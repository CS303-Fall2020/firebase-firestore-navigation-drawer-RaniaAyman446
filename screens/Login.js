import React from "react";
import { View , Text , StyleSheet ,TextInput , TouchableOpacity, Alert ,ActivityIndicator} from "react-native";
import * as firebase from 'firebase'
import {navigationActions,navigation} from "react-navigation";
export default class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            errorMessage:null,
            isLoading:false
        };
    }

   changeState =() =>{
       this.setState({isLoading:true})
   }

   handleLogin =() =>{

       firebase.auth()
       .signInWithEmailAndPassword(this.state.email,this.state.password)
       .then(() => {} , (error) => {
           Alert.alert(error.message)
       })
   }
   
   
//<ActivityIndicator size="large" color="green" animating={this.state.isLoading}/>
    render(){
   return(
    
   <View style={styles.container}>
    <Text style={styles.greeting}> Hello </Text>
    <View style={styles.errorMessage}>
   {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
    </View>
    <View style={styles.form}>
      <View>
          <Text style={styles.inputTitle}>Email Address</Text>
          <TextInput style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({email})} value={this.state.email}></TextInput>
      </View>
      <View style={{marginTop:32}}>
      <Text style={styles.inputTitle}>Password</Text>
          <TextInput style={styles.input} secureTextEntry autoCapitalize="none" onChangeText={password => this.setState({password})} value={this.state.password}></TextInput>
      </View>
  </View>
  <ActivityIndicator size="large" color="green" animating={this.state.isLoading}/>
  <TouchableOpacity style={styles.button} onPress={this.handleLogin}   /*onPress={()=> this.setState({isLoading:true})}*/>
   <Text style={{ color:"#FFF" , fontWeight:"500"}}>LOGIN</Text>
  </TouchableOpacity> 
  <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Register")}>
   <Text style={{ color:"#FFF" , fontWeight:"500"}}>SIGNUP</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button1}>
   <Text style={{ color:"#FFF" , fontWeight:"500"}}  onPress={() => this.props.navigation.navigate("Todo")}>FORGOT PASSWORD</Text>
  </TouchableOpacity>
  </View>
 )
 //ForgotPassword
    
   }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    form:{
        marginBottom:48,
        marginHorizontal:30
    },
    inputTitle:{
        color:"#8A8F9E",
        fontSize:10,
       textTransform:"uppercase"
    },
    input:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"
    },
    greeting:{
        marginTop:32,
        fontSize:18,
        fontWeight:"400",
        textAlign:"center"
    },
    button:{
        marginHorizontal:30,
        backgroundColor:"#E9446A",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center"
    },
    button1:{
        marginHorizontal:30,
        backgroundColor:"#E9446A",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center",
        marginTop:90
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:38
    },
    error:{
        color:"#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
    }
})