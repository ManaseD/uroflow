import React, { Component } from 'react';
// import profileImg from "./assets/profile.jpg" this dependency is not pushed zyb
import { TextInput, Button, Alert, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity as TouchableHighlight
} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';

function UselessTextInput() {
    const [value, onChangeText] = React.useState('Name');
    return (
        <TextInput
            style={{ height: 40, borderColor: 'black' }}
            onChangeText={text => onChangeText(text)}
            value={value}
            autoFocus={true}
            placeholder="name"
            container={true}
            clearTextOnFocus={true}
        />
    );
}




export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = { Name: "Will L.",
                        showName: false,
                        Gender: "Male",
                        Age: 20,
                        Height: "180",
                        showHeight: false,
                        Birthday: "1999/11/14",
                        showBirthday: false,
                        Email:"Test Email",
                        showEmail:false,
                        Password:"Test password",
                        showPassword:false,
                        showGender:false,
                        inputPassword:"",
                        inputBirthday:"",
                        inputGender:"" }
      }
    
    logOut = () => {
        return Alert.alert(
            'Logging Out',
            'All unsaved information will be lost',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Log Out', onPress: () => this.props.navigation.navigate("Login")},
            ],
            {cancelable: false},
          );
    }

    render() {
        return (
            <KeyboardAwareScrollView>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <Text style={styles.text}>press and hold field to edit</Text> 
                <View style={styles.bodyContent}>
                    <TouchableHighlight  style={styles.buttonContainer} onLongPress={()=>{this.setState({showPassword: !this.state.showPassword})}}>
                        <Text style={{color: "white"}}>password</Text>
                    </TouchableHighlight>
                    {this.state.showPassword ? <View>
                        <PasswordInputText  style = {styles.changepassword} getRef={input => this.input = input} value={this.state.Password}
                        onChangeText={(text) => this.setState({inputPassword: text})} value={this.state.inputPassword}/>
                        <Button title = "Save" onPress = {() => {
                            Alert.alert(
                                "Confirm Change",
                                "Press Yes to finish changing password or No to withdraw  ",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => {
                                            console.log("Send: Cancel change password");
                                            this.setState({showPassword: !this.state.showPassword})
                                        },
                                        style: "cancel"
                                    },
                                    {
                                        text: "Yes",
                                        onPress: () => {
                                            console.log("Changed Password");
                                            this.setState({Password:this.state.inputPassword})
                                            this.setState({showPassword: !this.state.showPassword})
                                        }
                                    }
                                ],
                                { cancelable: false }
                                );}}/>
                </View>
                    : null}
                    <TouchableHighlight style={styles.buttonContainer} onLongPress={()=>{this.setState({showBirthday: !this.state.showBirthday})}}>
                        <Text style={{color: "white"}}>Birthday: {this.state.Birthday}</Text>
                    </TouchableHighlight>
                    {this.state.showBirthday ? <View style={styles.editinfo}><TextInput style={styles.textInput} 
                                            onChangeText={(text) => this.setState({inputBirthday: text})} value={this.state.inputBirthday}/>
                                            <Button title="Save" onPress={() => {
                            Alert.alert(
                                "Confirm Change",
                                "Press Yes to finish changing Birthday or No to withdraw  ",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => {
                                            console.log("Send: Cancel change birthday");
                                            this.setState({showBirthday: !this.state.showBirthday})
                                        },
                                        style: "cancel"
                                    },
                                    {
                                        text: "Yes",
                                        onPress: () => {
                                            console.log("Changed birthday");
                                            this.setState({Birthday: this.state.inputBirthday})
                                            this.setState({showBirthday: !this.state.showBirthday})
                                        }
                                    }
                                ],
                                { cancelable: false }
                                );}}/></View>
                    : null}
                    <TouchableHighlight style={styles.buttonContainer} onLongPress={() => {this.setState({showGender: !this.state.showGender})}}>
                        <Text style={{color: "white"}}>Gender: {this.state.Gender}</Text>
                    </TouchableHighlight>
                    {
                        this.state.showGender? <View style={styles.editinfo}>
                            <TextInput style={styles.textInput}
                                onChangeText={(text) => this.setState({inputGender: text})} 
                                value = {this.state.inputGender}
                            />
                            <Button title = "Save" onPress = {() => {
                            Alert.alert(
                                "Confirm Change",
                                "Press Yes to finish changing Gender or No to withdraw  ",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => {
                                            console.log("Send: Cancel change gender");
                                            this.setState({showGender: !this.state.showGender})
                                        },
                                        style: "cancel"
                                    },
                                    {
                                        text: "Yes",
                                        onPress: () => {
                                            console.log("Changed Gender");
                                            const validGenders = ["MALE", "FEMALE", "UNKNOWN"]
                                            if(validGenders.includes(this.state.inputGender.toUpperCase())){
                                                this.setState({Gender: this.state.inputGender})
                                            }
                                            else{
                                                Alert.alert(
                                                    "Unexpected Gender",
                                                    "Gender can only be in Male, Female or Unknown"
                                                )
                                            }
                                            this.setState({showGender: !this.state.showGender})
                                        }
                                    }
                                ],
                                { cancelable: false }
                                );}}/> 
                        </View>
                    : null}
                    <Button title= "Log Out" style={styles.buttonContainer} onPress={this.logOut}/>
                </View>
            </ScrollView>
            </KeyboardAwareScrollView>
        );
    }
}
Profile.navigationOptions = {
    title: "Profile"
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "steelblue",
        height: 140,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 80
    },
    body: {
        marginTop: 50,
    },
    bodyContent: {
        flex: 3,
        alignItems: 'center',
        padding: 30,
        flexDirection: "column"
        
    },
    inputContent: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        fontSize: 16,
        color: "steelblue",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 20,
        backgroundColor: "steelblue",
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        fontSize: 17,
        textAlign: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    },
    editinfo: {
        width: 200,
        height: 75,
    },
    scrollView: {
        margin: 5
    },
    changepassword:{
        width: 200,
        height: 45,
        marginBottom: 20
    }
});
