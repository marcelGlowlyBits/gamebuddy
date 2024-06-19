import AsyncStorage from '@react-native-async-storage/async-storage'

import { IUser } from '@/types'

const STORAGE_KEY = 'user'

const storeUser = async (value: IUser) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

const getUser = async (): Promise<IUser | null> => {
  try {
    const response = await AsyncStorage.getItem(STORAGE_KEY)

    const user = response !== null ? JSON.parse(response) : null

    return user
  } catch (error) {
    console.error(error)
    return null
  }
}

const disableOnboarded = async () => {
  try {
    const user = await getUser()

    if (user) {
      user.onboarded = false
      await storeUser(user)
    }
  } catch (error) {
    console.error(error)
  }
}

export { storeUser, getUser, disableOnboarded }
