import {
  FlatList,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import {getAllTodoItems, addTodoItem} from "../app/database.js";
import {NativeWindStyleSheet} from "nativewind";
import EditScreenInfo from "@/components/EditScreenInfo";
import {Text, View} from "@/components/Themed";
import ListItem from "@/components/listItem.jsx";
import {useState, useEffect} from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {useTodoListItems} from "../app/toDoListItem.js";
import {FontAwesome6} from "@expo/vector-icons";
import {storeData, getData, clearAll} from "../app/database.js";
export default function TabOneScreen() {
  const [newTask, setNewTask] = useState({text: "", isDone: false});
  const [todoListItems, setTodoListItems] = useState([]);

  useEffect(() => {
    getData().then(data => {
      if (data !== null) {
        setTodoListItems(JSON.parse(data));
      }
      console.log(Array.isArray(todoListItems));
    });
  }, []);

  const addNewItem = () => {
    const updatedTodoListItems = [...todoListItems, newTask];
    setTodoListItems(updatedTodoListItems);
    storeData(updatedTodoListItems);
  };
  return (
    <View className="justify-center items-center pt-16 flex-1 bg-white">
      <View></View>
      <FlatList
        ItemSeparatorComponent={() => <View className="h-4 bg-red bg-white" />}
        data={Array.isArray(todoListItems) ? todoListItems : []}
        renderItem={({item, index}) =>
          item && (
            <ListItem
              item={item}
              index={index}
              setTodoListItems={setTodoListItems}
            />
          )
        }
      />
      <View className="flex-row items-center mb-8 mt-8 bg-white h-14">
        <TextInput
          className="h-full w-80 px-2 py-5 rounded-lg mr-6 bg-[#94A3B8] text-white font-semibold"
          placeholder="Type your task here"
          placeholderTextColor="white"
          keyboardType="default"
          onChange={e => {
            //console.log(e.nativeEvent.text);
            setNewTask({text: e.nativeEvent.text, isDone: false});
            //  console.log(todoListItems);
          }}
        />
        <TouchableOpacity onPress={() => addNewItem()}>
          <FontAwesome6 name="circle-plus" size={44} color={"#94A3B8"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
