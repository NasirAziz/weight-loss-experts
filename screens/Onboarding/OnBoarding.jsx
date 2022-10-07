import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
const { width, height } = Dimensions.get('window');
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import AppText from '../../components/Text';
import TopWave1 from '../../components/TopWave1';
const COLORS = { primary: '#282534', white: '#fff' };

const slides = [
  {
    id: '1',
    image: require('../../assets/cuate-1.png'),
    title: 'Best Digital Solution',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../../assets/cuate-2.png'),
    title: 'Achieve Your Goals',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../../assets/cuate-3.png'),
    title: 'Increase Your Value',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center', }}>
      <Image
        source={item?.image}
        style={{ height: '45%', width, resizeMode: 'contain' }}

      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};


const OnboardingScreen = ({ navigation }) => {

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "black",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View >
              <Button title={"Get Started"} onPress={() => navigation.replace('LoginScreen')} />
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>

              {/* <View style={{ width: 15 }} /> */}

              <View style={[styles.container, {
                flexDirection: "row",
                justifyContent: "space-between",
              }]}>
                <View style={{ flex: 1, marginHorizontal: 5 }} >
                  <Button title={"Skip"} onPress={skip} />
                </View>

                <View style={{ flex: 1, marginHorizontal: 5 }} >
                  <Button title={"Next"} onPress={goToNextSlide} />
                </View>

              </View>


            </View>


          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <TopWave1 />
      <Screen style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ alignItems: "center", }}>
          <AppText style={{ fontSize: 25, fontWeight: 'bold' }}>Weight Loss Experts</AppText>

        </View>
        {/* <StatusBar /> */}
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{ height: height * 0.75 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} />}
        />

        <Footer />
      </Screen>
    </>

  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "black",
    fontSize: 15,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 20,
  },
  title: {
    color: "black",
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  container: {
    flex: 1,
    padding: 20,
  }
});
export default OnboardingScreen;