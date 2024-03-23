import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {FontAwesome6} from "@expo/vector-icons";
import {getData, storeData} from "../app/database.js";
export default function ListItem({item, setTodoListItems, index}) {
  // const toggleDone = () => {
  //   setTodoListItems(items => {
  //     print("ng");
  //     return items.map((item, i) => {
  //       if (i === index) {
  //         return {...item, done: !item.done};
  //       } else {
  //         return item;
  //       }
  //     });
  //   });
  // };
  const RemoveItem = () => {
    setTodoListItems(prevItems => {
      const newItems = prevItems.filter((item, i) => i !== index);
      storeData(newItems);
      return newItems;
    });
  };
  const toggleDone = () => {
    setTodoListItems(prevItems => {
      const newItems = prevItems.map((item, i) => {
        if (i === index) {
          return {...item, done: !item.done};
        } else {
          return item;
        }
      });
      newItems.sort((a, b) => a.done - b.done);
      // Store the updated items array in local storagepr
      storeData(newItems);

      console.log(newItems);
      return newItems;
    });
  };
  return (
    <View className="w-screen px-3 bottom-3">
      <TouchableOpacity
        className="w-5 h-5 rounded-full bg-white z-50 top-3 right-1 overflow-visible"
        onPress={() => {
          RemoveItem();
          console.log("remove");
        }}
      >
        <FontAwesome6
          name="times-circle"
          size={20}
          color="red"
          className="w-5 h-5 rounded-full bg-white z-50 top-3 right-1 overflow-visible"
        />
      </TouchableOpacity>
      <View className="z-0 relative bg-slate-400 p-4 w-96 rounded-lg overflow-visible">
        <View className="flex-row bg-slate-400 justify-between items-center">
          <Text className="text-white font-semibold">{item.text}</Text>
          <TouchableOpacity onPress={toggleDone}>
            <MaterialCommunityIcons
              name={
                item.done
                  ? "checkbox-marked-circle"
                  : "checkbox-blank-circle-outline"
              }
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
