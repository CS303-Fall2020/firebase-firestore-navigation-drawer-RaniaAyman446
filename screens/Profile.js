/*import React , { useState,useEffect , Component} from "react";
//import { View , Text , StyleSheet ,TextInput , TouchableOpacity, Button ,ActivityIndicator} from "react-native";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    idboard,
    TouchableOpacity,
    ActivityIndicator
  } from "react-native";
import * as firebase from 'firebase'


export default class Profile extends React.Component{
    
    constructor(props){
        super(props);
        this.state={currentUser:""}
    }
   static navigationOptions ={
       header: null,
   };
   onSignOutPress = () =>{
       firebase.auth().signOut();
   }
   
   

   render (){

       const {currentUser} = firebase.auth() ;
       return (
           <View style={{paddingTop:450}}>
               <Text style={{textAlign:"center"}}>Hello {currentUser.email}</Text>
               <Button title="SignOut"  onPress={this.onSignOutPress}/>
           </View>
       )
   }
}
const styles =StyleSheet.create({

});*/

import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableWithoutFeedback,
    Keyboard, 
    TextInput,
    Button
  } from "react-native";

  export default function Profile({ navigation }) {
      return (
          <View> 
              <Text>Profile</Text>
           </View>
      )
  }
