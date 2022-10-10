import * as SecureStore from 'expo-secure-store'

const key = "authToken";

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken)

    } catch (error) {
        console.log('Error Setting token ', error)
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)

    } catch (error) {
        console.log('Error Getting token ', error)
    }
}

const getUser = async () => {
    const token = await getToken()
    return (token) ? JSON.parse(token) : null
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)

    } catch (error) {
        console.log('Error Removing token ', error)
    }
}


export default { getUser, storeToken, removeToken }