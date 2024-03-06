import {StyleSheet} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import {Text, View} from "@/components/Themed";
import ListItem from "@/components/listItem";
export default function TabOneScreen() {
  return (
    <View style={{justifyContent: "flex-start", alignItems: "center", flex: 1}}>
      <ListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
