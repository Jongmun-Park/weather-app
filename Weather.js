import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="weather-lightning-rainy" size={66}/>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Tunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist"
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center"
  }
})
