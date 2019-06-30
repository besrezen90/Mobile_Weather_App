import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground
} from "react-native";
import { style } from "./App.style";
import OpenWeatherMap from "./weather/open_weather_map";
import { Forecast } from "./components/Forecast";

const styles = StyleSheet.create(style as StyleSheet.NamedStyles<any>);

interface IProps {}

interface IState {
  city: string;
}

export class App extends Component<IProps, IState> {
  state = {
    city: "",
    forecast: null
  };

  onChange = event => {
    let city = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(city).then(forecast => {
      if (forecast) this.setState({ forecast, city });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./img/flowers.png")}
          resizeMode="cover"
          style={styles.backdrop}
        >
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>Current weather for</Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={this.onChange}
                  underlineColorAndroid="transparent"
                />
              </View>
            </View>
            {this.state.forecast && <Forecast forecast={this.state.forecast} />}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
