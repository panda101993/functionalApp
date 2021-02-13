
import React, { useEffect, } from 'react';
import { SafeAreaView, LogBox, StyleSheet, View, Text, StatusBar, } from 'react-native';
import { Provider } from "react-redux";
import store from "./redux/Store/index";
import Navigation from "./router/index"
import { AppText } from './components/Atoms';
import {LIGHT_GREEN  } from "./global/Colors";
import SplashScreen from 'react-native-splash-screen'
import Earnings from './screens/DrawerScreens/Earnings';
import OnWayTrack from './screens/Tabs/OnWayTrack';

const App = () => {

    useEffect(() => {
        SplashScreen.hide()
    
      }, [])
  // LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={LIGHT_GREEN} />
      <SafeAreaView style={{ flex: 0, backgroundColor: LIGHT_GREEN }} />
    {/* <Navigation/> */}

    <OnWayTrack/>


    </Provider>
  );
}

export default App;