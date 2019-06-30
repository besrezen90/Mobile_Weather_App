import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { style } from "./Forecast.style";
import { IForecast } from "../types";

const styles = StyleSheet.create(style as StyleSheet.NamedStyles<any>);

interface IProps {
  forecast: IForecast;
}

export class Forecast extends Component<IProps, {}> {
  render() {
    const { main, description, temp } = this.props.forecast;
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>{main}</Text>
        <Text style={styles.mainText}>Current conditions: {description}</Text>
        <Text style={styles.bigText}>{temp}°С</Text>
      </View>
    );
  }
}
