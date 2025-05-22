import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="View Detail" onPress={() => alert("Duy ne")} />
    </View>
  );
};

export default HomeScreen;
