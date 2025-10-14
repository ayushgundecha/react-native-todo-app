import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen123.</Text>
      <Text>Hello My name is Ayush</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "flex-start",

  }
});
