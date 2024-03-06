import {View, Text, StyleSheet} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ListItem() {
  return (
    <View className="bg-red-300 rounded-lg h-10 w-11/12  flex-row items-center justify-between p-2">
      <Text className=" text-lg">Do homework</Text>
      <MaterialCommunityIcons
        name="checkbox-blank-circle-outline"
        size={18}
        color="black"
      />
    </View>
  );
}
