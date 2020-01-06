import React from "react"
import { Text, View, Button, StyleSheet, TextInput, ScrollView, Dimensions } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import app from "./feathers-client.js"

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window')

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            isAuthenticated: false,

            newEmail: '',
            newPass: '',
            passwordConfirmation: ''
        }
    }

    authenticate = (options) => {
        console.log("Authentication Attempt")

        return app.authenticate({ strategy: 'local', ...options })
          .then(() => {
              console.log("Authentication Success")
              this.setState({ isAuthenticated: true })
              this.props.navigation.navigate("Record")
          })
          .catch((err) => {
              console.log("LoginPage: API call failed: ", err)
              this.setState({ isAuthenticated: false })
            }
          )
    }

    handleRegisterUser = () => {
        console.log("Registering new user")
        const { newEmail, newPass, passwordConfirmation } = this.state

        if (newPass !== passwordConfirmation) {
            return console.log('Your passwords do not match')
        }

        app.service('users').create({ email: newEmail, password: newPass })
          .then(() => this.authenticate({ strategy: 'local', email: newEmail, password: newPass }))
          .catch(err => console.log("Registration Failure: ", err))
    }

    render() {
        const { email, password, newEmail, newPass, passwordConfirmation } = this.state
        return (
          <KeyboardAwareScrollView>
              <ScrollView>
                <View
                  style={{
                      top: -50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: DEVICE_HEIGHT,
                      width: DEVICE_WIDTH
                  }}
                >
                    <Text style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 10,
                        marginBottom: 10,
                    }}>
                        Uroflow App
                    </Text>
                    <View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '100',
                        }}>
                            Already have an account?
                        </Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoCapitalize="none"
                        onChangeText={(email) => this.setState({ email })}
                        value={email}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Password"
                        autoCapitalize="none"
                        onChangeText={(password) => this.setState({ password })}
                        value={password}
                    />
                    <View style={{width: '30%'}}>
                        <Button style={{width: '100px'}} onPress={() => this.authenticate({ email: email, password: password })} title="Login" />
                    </View>
                    {/*<View style={{*/}
                        {/*marginTop: 15,*/}
                        {/*marginBottom: 15,*/}
                        {/*fontSize: 22,*/}
                        {/*fontWeight: '100',*/}
                        {/*textAlign: 'center'*/}
                    {/*}}>*/}
                        {/*<Text>OR</Text>*/}
                    {/*</View>*/}
                    {/*<Text style={{*/}
                        {/*fontSize: 16,*/}
                        {/*fontWeight: '100',*/}
                    {/*}}>*/}
                        {/*Register as a new user*/}
                    {/*</Text>*/}
                    {/*<TextInput*/}
                      {/*style={styles.input}*/}
                      {/*placeholder="Email"*/}
                      {/*autoCapitalize="none"*/}
                      {/*onChangeText={(newEmail) => this.setState({ newEmail })}*/}
                      {/*value={newEmail}*/}
                    {/*/>*/}
                    {/*<TextInput*/}
                      {/*style={styles.input}*/}
                      {/*secureTextEntry={true}*/}
                      {/*placeholder="Password"*/}
                      {/*autoCapitalize="none"*/}
                      {/*onChangeText={(newPass) => this.setState({ newPass })}*/}
                      {/*value={newPass}*/}
                    {/*/>*/}
                    {/*<TextInput*/}
                      {/*style={styles.input}*/}
                      {/*secureTextEntry={true}*/}
                      {/*placeholder="Password"*/}
                      {/*autoCapitalize="none"*/}
                      {/*onChangeText={(passwordConfirmation) => this.setState({ passwordConfirmation })}*/}
                      {/*value={passwordConfirmation}*/}
                    {/*/>*/}
                    {/*<View style={{width: '30%'}}>*/}
                        {/*<Button style={{width: '100px'}} onPress={this.handleRegisterUser} title="Sign Up" />*/}
                    {/*</View>*/}
                </View>
              </ScrollView>
          </KeyboardAwareScrollView>
        )
    }
}

export default LoginPage

const styles = StyleSheet.create({
    input: {
        margin: 8,
        height: 40,
        width: 230,
        borderColor: "steelblue",
        borderWidth: 1,
        paddingLeft: 15
    },
    submitButton: {
        padding: 10,
        margin: 15,
        height: 40
    },
    submitButtonText: {
        color: "white"
    }
})
