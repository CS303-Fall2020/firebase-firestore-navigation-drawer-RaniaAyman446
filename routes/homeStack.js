import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
//import { createStackNavigator } from '@react-navigation/stack'
//import {
  //  createStackNavigator,
    //createAppContainer
  //} from 'react-navigation';

import ReviewDetails from "../screens/reviewDetails";
import TodoItem from "../components/todoItem";
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import Register from "../screens/Register";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import Profile from "../screens/Profile";
import Loading from "../screens/Loading";
import SignIn from "../screens/SignIn";
import Header from '../components/header'
import Header1 from '../components/header1'
import MyDrawer from './drawer'
//firebase
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyB29NbOisafk0g99jPz0MLB9Z1hMPfIUPs",
    authDomain: "socialapp-63ba3.firebaseapp.com",
    databaseURL: "https://socialapp-63ba3.firebaseio.com",
    projectId: "socialapp-63ba3",
    storageBucket: "socialapp-63ba3.appspot.com",
    messagingSenderId: "304043455069",
    appId: "1:304043455069:web:ea73ea8b3e1629e10593b4",
    measurementId: "G-6KXREL77RR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  


  const screens = {
    // loading: {
    //     screen: loading,
    //     navigationOptions: {
    //         title: 'loading',
    //         headerLeft: null,
    //         headerStyle: {
    //             backgroundColor:'coral',
    //         }
    //     }
    // },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerLeft:  () => null,
            headerStyle: {
                backgroundColor:'grey'
            }
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'SignIn',
            headerLeft:  () => null,
            headerStyle: {
                backgroundColor:'grey'
            }
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'ForgotPassword',
            headerLeft:  () => null,
            headerStyle: {
                backgroundColor:'grey'
            }
        }
    },
   // Main: {
     //   screen: main,
       // navigationOptions: {
         //   title: 'main',
           // headerLeft:  () => null,
            //headerStyle: {
              //  backgroundColor:'coral'
           // }
        //}
    //},
    // Home: {
    //     screen: Home,
    //     navigationOptions: {
    //         headerTitle: () => <Header />,
    //         headerLeft: null,
    //         headerStyle: {
    //             backgroundColor:'coral',
    //         },
    //         headerRight: () => <Header1 />
    //     }
    // },
    // ReviewDetails: {
    //     screen: ReviewDetails,
    //     navigationOptions: {
    //         title: 'ToDo Details',
    //         headerStyle: {
    //             backgroundColor:'coral'
    //         }
    //     }
    // }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 