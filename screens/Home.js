import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style = {styles.droidSafeArea}/>
                    <ImageBackground source = {require('../assets/bg_image.png')} style = {styles.BackgroundImage}>
                    <View style = {styles.titleBar}>
                <Text style = {styles.titleText}>ISS Tracker App</Text>
                </View>
                <TouchableOpacity style = {styles.routeCard} onPress = {()=> this.props.navigation.navigate("IssLocation")}>
                <Text style = {styles.routeText}>IssLocation</Text>
                <Text style = {styles.knowMore}>{"knowMore...."}</Text>
                <Text style = {styles.bgDigit}>1</Text>
                <Image source = {require("../assets/iss_icon.png")} style = {styles.iconImage}/>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.routeCard} onPress = {()=> this.props.navigation.navigate("Meteors")}>
                <Text style = {styles.routeText}>Meteors</Text>
                <Text style = {styles.knowMore}>{"knowMore...."}</Text>
                <Text style = {styles.bgDigit}>2</Text>
                <Image source = {require("../assets/meteor_icon.png")} style = {styles.iconImage}/>
                </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS === 'android'? StatusBar.currentHeight:0
    },
    backgroundImage:{flex:1,
    resizeMode:'cover'
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15
    }
    
})