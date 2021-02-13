import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';

import { Container, } from '../../components/Containers/index';

import { useSelector, useDispatch } from 'react-redux';

import AppIntroSlider from 'react-native-app-intro-slider';

import { logo, banner_signup, tw_img, mail_img, fb_img } from "@Image/Icon"
import { AppView, AppText, AppImage, Touchable, BottomSheet, SilentTouchable } from '../../components/Atoms';
import { ShortButton, SubmitButton, Card, Input, } from '@Component/Molecules';

import styles from '../CreateAccount/style';

import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../global/Colors';
// import {  } from '../../Assets/Icon';

// import { RF } from "@Global/Responsive";
import { RF } from "../../global/Responsive";
import { color } from 'react-native-reanimated';
import style from '../CreateAccount/style';
// import { BUTTON_SHORT } from '../../components/Molecules';

const { height, width } = Dimensions.get('window');
// import MapView from 'react-native-maps';
export default AppointAddress = (props) => {
  const dispatch = useDispatch()
  const refBottomSheet = useRef();
  // const state = useSelector(state => state).reducer
  // const { } = state.language

  const [cardPosition, setCardPosition] = useState({})

  return (
    <Container Containerlayout={[styles.containerLayout]} scrollable header={false} >
     
     <MapView style={{
        width:width / 1.1,
        height: height / 1.4,
        alignSelf: 'center',
        borderRadius: 10,
        overflow:"hidden",
        marginHorizontal: 10
    }}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />


      

        <AppView style={[styles.btnView]}>
          <SubmitButton
            nameLayout={{ alignItems: 'center', paddingLeft: 22 }}
            name='Continue'
            // enableImgLeft
            enableImgRight
            source_one={mail_img}
            // source_two={}
            onPress={() => refBottomSheet.current.open()}
          />
        </AppView>
        <AppView style={[styles.alreadyAMemberLayout]}>
          <AppView style={[styles.alreadyTxtLayout]}>
            <AppText style={[styles.alreadyTxt]}>{'Already a member ?'}</AppText>
          </AppView>
          <SilentTouchable>
            <AppText style={[styles.signInTxt]}>{" Sign in"}</AppText>
          </SilentTouchable>
        </AppView>
        {/* <AppView style={[styles.btnView]}>
          <SubmitButton
            name='Continue'
            enableImgLeft
            // enableImgRight
            source_one={mail_img}
            // source_two={}
            onPress={() => refBottomSheet.current.open()}
          />
        </AppView> */}

        <BottomSheet adr={refBottomSheet}>
          <AppView style={[]}>
            <AppText>dsahdgjh</AppText>
          </AppView>
        </BottomSheet>
  

    </Container>
  )
}