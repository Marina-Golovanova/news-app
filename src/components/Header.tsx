import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>News App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#72bcd4",
    padding: 15,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },
  title: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 20,
    color: "#ffffff",
  },
});
