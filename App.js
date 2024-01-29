/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import {Icon} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import FirstScreen from './src/screens/FirstScreen';
import Profile from './src/screens/Profile';
import Addphoto from './src/screens/Addphoto';
import Addcert from './src/screens/Addcert';
import Disclaim from './src/screens/Disclaim';
import Requests from './src/screens/Requests';
import SOSRequest from './src/screens/SOSRequests';
import Notification from './src/screens/Notification';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import Bookings from './src/screens/Bookings';
import Detailpage from './src/screens/Detailpage';
import LoginPage from './src/screens/LoginPage';
import SOSdetails from './src/screens/SOSdetailpage';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContainerTerm from './src/screens/ContainerTerm';
/* import {
  requestUserPermission,
  NotificationListner,
} from './src/utils/push_Notification'; */
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator activeColor="red">
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          headerShown: false,
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="SOS"
        component={SOSRequest}
        options={{
          headerShown: false,
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          //headerShown: true,
          // tabBarShowLabel: false,
          //  tabBarLabel: 'priya',
          tabBarIcon: ({ color }) => <Icon name="bell" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          headerShown: true,
          // tabBarShowLabel: false,
          // tabBarLabel: 'priya',
          tabBarIcon: ({ color }) => (
            <Icon name="address-card" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  const [intro, setintro] = useState(true);

  useEffect(() => {
    checkIntroScreen();
    SplashScreen.hide();
    //requestUserPermission();
    //NotificationListner();
  }, []);

  const checkIntroScreen = async cb => {
    const value = await AsyncStorage.getItem('introScreens');
    if (value && value === 'true') {
      //console.log(value, 'valueeee');
      setintro(false);
    } else {
      setintro(true);
    }
  };
  var isIntroScreenDone = undefined;
  checkIntroScreen(val => {
    isIntroScreenDone = val;
    //console.log(val, 'val');
  });
  console.log(isIntroScreenDone, '-=-=-');

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          {/* <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{headerShown: false}}
          /> */}

          {intro && (
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="Requests"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detailpage"
            component={Detailpage}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SOSdetailpage"
            component={SOSdetails}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Addphoto"
            component={Addphoto}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Addcert"
            component={Addcert}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContainerTerm"
            component={ContainerTerm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Disclaim"
            component={Disclaim}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="Requests"
            component={Requests}
            options={{headerShown: false}}
          /> */}
          {/* <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          /> */}
          {/* <Stack.Screen
            name="Bookings"
            component={Bookings}
            options={{headerShown: false}}
          /> */}

          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
