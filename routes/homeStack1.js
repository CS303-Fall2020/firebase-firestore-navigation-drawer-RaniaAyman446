import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react';
import Header from '../components/header'
import Header1 from '../components/header1'
import Header2 from '../components/header2'


const screens = {
    home: {
        screen: home,
        navigationOptions: ({ navigation }) => {
            return {
              title: "Todo",
              headerLeft: () => <Header2 navigation={navigation} />,
              headerRight: () => <Header1 />,
              headerStyle: {
                backgroundColor: "grey"
              }
            };
          }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ToDo Details',
            headerStyle: {
                backgroundColor:'grey'
            }
        }
    }
}

const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack); 
export default HomeStack;

