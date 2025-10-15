import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const {toggleDarkMode} = useTheme();

  const todos = useQuery(api.todo.getTodos);
  console.log(todos);


  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen123.</Text>
      <Text>Hello My name is Ayush</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
  }
});
