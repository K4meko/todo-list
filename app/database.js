import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("my-key", jsonValue);
  } catch (e) {
    // saving error
  }
};
const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log("Done.");
};
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("my-key");
    if (value !== null) {
      console.log(JSON.parse(value));
      return value;
      w;
    }
  } catch (e) {
    // error reading value
  }
};
export {storeData, getData, clearAll};
