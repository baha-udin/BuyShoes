import AsyncStorage from '@react-native-async-storage/async-storage';

// save data
export const storeData = async (key, value) => {
  try {
    // value must be string, default object
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('Fail store data');
  }
};

const getData = async (key, value) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
    console.warn('Fail get data');
  }
};
