import React, { useContext } from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useQuery, ApolloClient, InMemoryCache, } from '@apollo/client';

import AppText from '../../components/Text';
import Card from '../../components/Card'
import colors from '../../config/colors';
import POPULAR_RECIPES from '../../Backend/Suggestic/Queries/popularRecipes';
import RECIPE_BY_MEAL_TIME from '../../Backend/Suggestic/Queries/recipeByMealTime';
import Screen from "../../components/Screen"
import FAVORITE_RECIPES from '../../Backend/Suggestic/Queries/favoriteRecipes';
import ADD_TO_USER_FAVORITE from '../../Backend/Suggestic/Mutaions/addTouserFavorite';
import RECIPE_SEARCH from '../../Backend/Suggestic/Queries/recipeSearch';
import Toast from 'react-native-root-toast';
import AppLoading from '../AppLoading';
import AuthContext from '../../authentication/context';

const client2 = new ApolloClient({
    uri: 'https://production.suggestic.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        "Authorization": 'Token e4a2aaf2883e9a174b8edd44793dabc657418db0',
    },
});

const MyComponent = ({ navigation, user }) => {
    const [searchQuery, setSearchQuery] = React.useState('');


    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search by name or ingredients"
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon={"magnify"}
            onIconPress={() => {

                client2.query({ query: RECIPE_SEARCH, variables: { query: searchQuery }, context: { headers: { "sg-user": user.user_id } } })
                    .then((data) => {
                        navigation.navigate("RecipeSearchResult", { data })
                    }).catch(() => null)
                return <AppLoading />
            }}
            showSoftInputOnFocus={true}
            onEndEditing={() => {
                client2.query({ query: RECIPE_SEARCH, variables: { query: searchQuery }, context: { headers: { "sg-user": user.user_id } } })
                    .then((data) => {
                        navigation.navigate("RecipeSearchResult", { data })
                    }).catch(() => null)
                return <AppLoading />
            }}

        />
    );
};

function PopularRecipes({ navigation, user }) {


    const { loading, error, data } = useQuery(POPULAR_RECIPES, { client: client2, context: { headers: { "sg-user": user.user_id } } })
    if (loading) return <AppLoading />;
    if (error) return <AppText >`Error! ${error.message}`</AppText >;

    return (
        <View style={{}}>
            <AppText style={{ marginHorizontal: 20, marginVertical: 8, fontWeight: "bold" }}>
                Popular
            </AppText>
            <FlatList data={data.popularRecipes.edges}
                horizontal={true}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("RecipeDetails", { item: item.node })}>
                        <Card onPress={() => {

                            client2.mutate({
                                mutation: ADD_TO_USER_FAVORITE,
                                variables: { recipeId: item.node.databaseId },
                                context: { headers: { "sg-user": user.user_id } }
                            }).then((data) => {
                                client2.resetStore()
                                Toast.show(data.data.userFavoriteRecipe.isUserFavorite ? 'Recipe Added To Favorites' : "Recipe Removed From Favorites", {
                                    duration: Toast.durations.SHORT,
                                    position: Toast.positions.BOTTOM,
                                    shadow: true,
                                    animation: true,
                                    hideOnPress: true,
                                    delay: 0,
                                    onShow: () => {
                                        // calls on toast\`s appear animation start
                                    },
                                    onShown: () => {
                                        // calls on toast\`s appear animation end.
                                    },
                                    onHide: () => {
                                        // calls on toast\`s hide animation start.
                                    },
                                    onHidden: () => {
                                        // calls on toast\`s hide animation end.
                                    }
                                });
                            }).catch((err) => console.log(JSON.stringify(err, null, 2)))

                        }} isUserFav={item.node.isUserFavorite} title={item.node.name} image={item.node.mainImage} subTitle={item.node.author} />
                    </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.node.databaseId}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                height: "100%",
                                width: 20,
                                backgroundColor: colors.light,

                            }}
                        />
                    );
                }}
            />
        </View>
    )
}


function FavoriteRecipes({ navigation, user }) {
    const { loading, error, data } = useQuery(FAVORITE_RECIPES, { client: client2, context: { headers: { "sg-user": user.user_id } } },)
    if (loading) return <></>;
    if (data.myFavoriteRecipes.edges.length <= 0) return <></>
    if (error) console.log(JSON.stringify(error));
    return (

        <View style={{}}>
            <AppText style={{ marginHorizontal: 20, marginVertical: 8, fontWeight: "bold" }}>
                Favorites
            </AppText>
            <FlatList data={data.myFavoriteRecipes.edges}
                horizontal={true}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("RecipeDetails", { item: item.node })}>
                        <Card onPress={() => {

                            client2.mutate({
                                mutation: ADD_TO_USER_FAVORITE,
                                variables: { recipeId: item.node.databaseId },
                                context: { headers: { "sg-user": user.user_id } }
                            }).then((data) => {
                                client2.resetStore()

                                Toast.show(data.data.userFavoriteRecipe.isUserFavorite ? 'Recipe Added To Favorites' : "Recipe Removed From Favorites", {
                                    duration: Toast.durations.SHORT,
                                    position: Toast.positions.BOTTOM,
                                    shadow: true,
                                    animation: true,
                                    hideOnPress: true,
                                    delay: 0,
                                    onShow: () => {
                                        // calls on toast\`s appear animation start
                                    },
                                    onShown: () => {
                                        // calls on toast\`s appear animation end.
                                    },
                                    onHide: () => {
                                        // calls on toast\`s hide animation start.
                                    },
                                    onHidden: () => {
                                        // calls on toast\`s hide animation end.
                                    }
                                });
                            }).catch((err) => console.log(JSON.stringify(err, null, 2)))

                        }} isUserFav={item.node.isUserFavorite} title={item.node.name} image={item.node.mainImage} subTitle={item.node.author} />
                    </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.node.databaseId}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                height: "100%",
                                width: 20,
                                backgroundColor: colors.light,

                            }}
                        />
                    );
                }}
            />
        </View>
    )
}


function BreakfastRecipes({ navigation, user }) {
    const { loading, error, data } = useQuery(RECIPE_BY_MEAL_TIME, { variables: { mealTime: "BREAKFAST" }, client: client2, context: { headers: { "sg-user": user.user_id } } },)
    if (loading) return <AppLoading />;
    if (error) console.log(JSON.stringify(error));
    return (

        <View style={{}}>
            <AppText style={{ marginHorizontal: 20, marginVertical: 8, fontWeight: "bold" }}>
                Breakfast
            </AppText>
            <FlatList data={data.recipesByMealTime.edges}
                horizontal={true}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("RecipeDetails", { item: item.node })}>
                        <Card onPress={() => {

                            client2.mutate({
                                mutation: ADD_TO_USER_FAVORITE,
                                variables: { recipeId: item.node.databaseId },
                                context: { headers: { "sg-user": user.user_id } }
                            }).then((data) => {
                                client2.resetStore()

                                Toast.show(data.data.userFavoriteRecipe.isUserFavorite ? 'Recipe Added To Favorites' : "Recipe Removed From Favorites", {
                                    duration: Toast.durations.SHORT,
                                    position: Toast.positions.BOTTOM,
                                    shadow: true,
                                    animation: true,
                                    hideOnPress: true,
                                    delay: 0,
                                    onShow: () => {
                                        // calls on toast\`s appear animation start
                                    },
                                    onShown: () => {
                                        // calls on toast\`s appear animation end.
                                    },
                                    onHide: () => {
                                        // calls on toast\`s hide animation start.
                                    },
                                    onHidden: () => {
                                        // calls on toast\`s hide animation end.
                                    }
                                });
                            }).catch((err) => console.log(JSON.stringify(err, null, 2)))

                        }} isUserFav={item.node.isUserFavorite} title={item.node.name} image={item.node.mainImage} subTitle={item.node.author} />
                    </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.node.databaseId}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                height: "100%",
                                width: 20,
                                backgroundColor: colors.light,

                            }}
                        />
                    );
                }}
            />
        </View>
    )
}

function LunchRecipes({ navigation, user }) {
    const { loading, error, data } = useQuery(RECIPE_BY_MEAL_TIME, { variables: { mealTime: "LUNCH" }, client: client2, context: { headers: { "sg-user": user.user_id } } })
    if (loading) return <AppLoading />;
    if (error) return <AppText >`Error! ${error.message}`</AppText >;
    return (
        <View style={{}}>
            <AppText style={{ marginHorizontal: 20, marginVertical: 8, fontWeight: "bold" }}>
                Lunch
            </AppText>
            <FlatList data={data.recipesByMealTime.edges}
                horizontal={true}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("RecipeDetails", { item: item.node })}>
                        <Card onPress={() => {

                            client2.mutate({
                                mutation: ADD_TO_USER_FAVORITE,
                                variables: { recipeId: item.node.databaseId },
                                context: { headers: { "sg-user": user.user_id } }
                            }).then((data) => {
                                client2.resetStore()

                                Toast.show(data.data.userFavoriteRecipe.isUserFavorite ? 'Recipe Added To Favorites' : "Recipe Removed From Favorites", {
                                    duration: Toast.durations.SHORT,
                                    position: Toast.positions.BOTTOM,
                                    shadow: true,
                                    animation: true,
                                    hideOnPress: true,
                                    delay: 0,
                                    onShow: () => {
                                        // calls on toast\`s appear animation start
                                    },
                                    onShown: () => {
                                        // calls on toast\`s appear animation end.
                                    },
                                    onHide: () => {
                                        // calls on toast\`s hide animation start.
                                    },
                                    onHidden: () => {
                                        // calls on toast\`s hide animation end.
                                    }
                                });
                            }).catch((err) => console.log(JSON.stringify(err, null, 2)))

                        }} isUserFav={item.node.isUserFavorite} title={item.node.name} image={item.node.mainImage} subTitle={item.node.author} />
                    </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.node.databaseId}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                height: "100%",
                                width: 20,
                                backgroundColor: colors.light,

                            }}
                        />
                    );
                }}
            />
        </View>
    )
}

function DinnerRecipes({ navigation, user }) {
    const { loading, error, data } = useQuery(RECIPE_BY_MEAL_TIME, { variables: { mealTime: "DINNER" }, client: client2, context: { headers: { "sg-user": user.user_id } } })
    if (loading) return <></>;
    if (error) return <AppText >`Error! ${error.message}`</AppText >;
    return (
        <View style={{}}>
            <AppText style={{ marginHorizontal: 20, marginVertical: 8, fontWeight: "bold" }}>
                Dinner
            </AppText>
            <FlatList data={data.recipesByMealTime.edges}
                horizontal={true}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("RecipeDetails", { item: item.node })}>
                        <Card onPress={() => {

                            client2.mutate({
                                mutation: ADD_TO_USER_FAVORITE,
                                variables: { recipeId: item.node.databaseId },
                                context: { headers: { "sg-user": user.user_id } }
                            }).then((data) => {
                                client2.resetStore()

                                Toast.show(data.data.userFavoriteRecipe.isUserFavorite ? 'Recipe Added To Favorites' : "Recipe Removed From Favorites", {
                                    duration: Toast.durations.SHORT,
                                    position: Toast.positions.BOTTOM,
                                    shadow: true,
                                    animation: true,
                                    hideOnPress: true,
                                    delay: 0,
                                    onShow: () => {
                                        // calls on toast\`s appear animation start
                                    },
                                    onShown: () => {
                                        // calls on toast\`s appear animation end.
                                    },
                                    onHide: () => {
                                        // calls on toast\`s hide animation start.
                                    },
                                    onHidden: () => {
                                        // calls on toast\`s hide animation end.
                                    }
                                });

                            }).catch((err) => console.log(JSON.stringify(err, null, 2)))

                        }} isUserFav={item.node.isUserFavorite} title={item.node.name} image={item.node.mainImage} subTitle={item.node.author} />
                    </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.node.databaseId}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                height: "100%",
                                width: 20,
                                backgroundColor: colors.light,

                            }}
                        />
                    );
                }}
            />
        </View>
    )
}

function SnackRecipes({ navigation, user }) {
    const { loading, error, data } = useQuery(RECIPE_BY_MEAL_TIME, {
        variables: { mealTime: "SNACK" },
        client: client2,
        context: { headers: { "sg-user": user.user_id } }
    })
    if (loading) return <AppLoading />;
    if (error) return <AppText >`Error! ${error.message}`</AppText >;

    return (
        <View style={{}}>
            <AppText style={{ marginHorizontal: 20, marginVertical: 8, fontWeight: "bold" }}>
                Snack
            </AppText>
            <FlatList data={data.recipesByMealTime.edges}
                horizontal={true}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("RecipeDetails", { item: item.node })}>
                        <Card onPress={() => {
                            client2.mutate({
                                mutation: ADD_TO_USER_FAVORITE,
                                variables: { recipeId: item.node.databaseId },
                                context: { headers: { "sg-user": user.user_id } }
                            }).then((data) => {
                                client2.resetStore()

                                Toast.show(data.data.userFavoriteRecipe.isUserFavorite ? 'Recipe Added To Favorites' : "Recipe Removed From Favorites", {
                                    duration: Toast.durations.SHORT,
                                    position: Toast.positions.BOTTOM,
                                    shadow: true,
                                    animation: true,
                                    hideOnPress: true,
                                    delay: 0,
                                    onShow: () => {
                                        // calls on toast\`s appear animation start
                                    },
                                    onShown: () => {
                                        // calls on toast\`s appear animation end.
                                    },
                                    onHide: () => {
                                        // calls on toast\`s hide animation start.
                                    },
                                    onHidden: () => {
                                        // calls on toast\`s hide animation end.
                                    }
                                });
                            }).catch((err) => console.log(JSON.stringify(err, null, 2)))

                        }} isUserFav={item.node.isUserFavorite} title={item.node.name} image={item.node.mainImage} subTitle={item.node.author} />
                    </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.node.databaseId}
                ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                height: "100%",
                                width: 20,
                                backgroundColor: colors.light,

                            }}
                        />
                    );
                }}
            />
        </View>
    )
}


export default function RecipeHome({ navigation, route }) {
    const { user, } = useContext(AuthContext)
    if (route.params)
        route.params.refetch ? client2.resetStore() : null

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);


    return (
        <Screen>
            <View style={{ backgroundColor: colors.light, flex: 1, }}>

                <View style={{ padding: 20 }}>
                    <MyComponent navigation={navigation} user={user} />
                </View>

                <ScrollView>

                    <FavoriteRecipes navigation={navigation} user={user} />

                    <PopularRecipes navigation={navigation} user={user} />

                    <BreakfastRecipes navigation={navigation} user={user} />

                    <LunchRecipes navigation={navigation} user={user} />

                    <DinnerRecipes navigation={navigation} user={user} />

                    <SnackRecipes navigation={navigation} user={user} />

                </ScrollView>

            </View>
        </Screen>

    )
}

const styles = StyleSheet.create({})