import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ListItem({item, setTodoListItems, index}) {
  const toggleDone = () => {
    setTodoListItems(items => {
      print("ng");
      return items.map((item, i) => {
        if (i === index) {
          return {...item, done: !item.done};
        } else {
          return item;
        }
      });
    });
  };
  return (
    <View className="bg-slate-400 p-4 w-96 rounded-lg ">
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
  );
}
