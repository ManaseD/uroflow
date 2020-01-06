import React, { Component } from "react";
import { Alert, SafeAreaView } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity as TouchableHighlight } from "react-native";
import {LinearGradient} from "expo-linear-gradient";

import app from "./feathers-client.js"
import * as Font from "expo-font";

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        (async () => {
            await Font.loadAsync({
                'Avenir': require('./assets/fonts/Avenir-Book.ttf'),
                'Avenir-Heavy': require('./assets/fonts/Avenir-Roman.ttf'),
                'Avenir-Light': require('./assets/fonts/Avenir-Light.ttf'),
            })
        })()
    }

    logOut = () => {
        this.setState({ isLoading: false });
        return Alert.alert(
            "Logging Out",
            "Are you sure you would like to log out?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Log Out",
                    onPress: () => {
                        app.logout()
                          .then(() => this.props.navigation.navigate("Login"))
                    }
                }
            ],
            { cancelable: false }
        );
    };

    render() {
        return (
          <SafeAreaView style={styles.container}>
              <LinearGradient colors={['#fff', '#E4E5E6']} style={styles.gradient}>
                  <View style={styles.recordingDataContainer}>
                      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableHighlight style={styles.deleteButton} onPress={() => this.logOut()}>
                              <Text style={{color: '#ffffff', fontFamily: 'Avenir-Heavy', fontSize: 16}}> LOG OUT </Text>
                          </TouchableHighlight>
                      </View>
                  </View>
              </LinearGradient>
          </SafeAreaView>
        );
    }
}
Profile.navigationOptions = {
    title: "Profile"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    recordingDataContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: '12%',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    deleteButton: {
        alignItems: 'center',
        width: '40%',
        margin: 10,
        borderRadius: 30,
        backgroundColor: '#b71c1c',
        padding: 10
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
