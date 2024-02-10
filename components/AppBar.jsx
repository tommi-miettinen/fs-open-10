import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 40,
    backgroundColor: "black",
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal></ScrollView>
    </View>
  );
};

export default AppBar;
