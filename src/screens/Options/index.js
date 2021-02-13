import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';

import { Container, } from '../../components/Containers/index';

import { useSelector, useDispatch } from 'react-redux';

import AppIntroSlider from 'react-native-app-intro-slider';

import { logo, banner_signup, tw_img, mail_img, fb_img } from "@Image/Icon"
import { AppView, AppText, AppImage, Touchable, BottomSheet, SilentTouchable } from '../../components/Atoms';
import { ShortButton, SubmitButton } from '@Component/Molecules';
import {SignUpBottomSheet,StaticBottomSheet} from '../../components/CommonComponents/index'
import styles from './style';
import { Actions } from 'react-native-router-flux';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../global/Colors';
// import {  } from '../../Assets/Icon';
import { ROBOTO_BOLD, ROBOTO_LIGHT, ROBOTO_REGULAR, SANS_PRO_REGULAR } from '../../global/FontFamilies';

import { RF } from "../../global/Responsive";
import { color } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');
const cityList = ['London','Brimingham','Paris','North West & Yorkshire']
export default Signup = (props) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state).reducer
  const {
    Welcome,
    Apply_as_pract,
    Login,
    Apply_Pract_alafiame,
    Login_to
} = state.language.OPTIONS
let [Qualified, setQualified] = useState(false)

  const refBottomSheet = useRef();
  // const state = useSelector(state => state).reducer
  // const { } = state.language

  return (
    <Container Containerlayout={[styles.containerLayout]} scrollable header={false} >
      <AppView style={[styles.mainLayout]}>
        <AppView style={styles.headerLayout}>
          <AppView style={[styles.logoLayout]}>
            <AppImage source={logo} style={[styles.logo]} resizeMode='contain' />
          </AppView>
        </AppView>
        <AppView style={[styles.bannerLayout]}>
          <AppImage source={banner_signup} style={[styles.bannerImg]} />
        </AppView>
        <AppView style={[styles.pageMsgView]}>
          <AppText style={[styles.pageMsgTxt]}>{Welcome}</AppText>
        </AppView>
        <AppView style={[styles.btnView]}>
          <SubmitButton
            name={Apply_as_pract}
            btnTxt={{fontSize:RF(16),fontFamily: ROBOTO_BOLD,}}
            onPress={() => refBottomSheet.current.open()}
          />
        </AppView>
        <AppView style={[styles.otherSignupTxtLayout]}>
          <AppText style={[styles.orTxt]}>{Apply_Pract_alafiame}</AppText>
        </AppView>
        <AppView style={[styles.btnView]}>
          <SubmitButton
          btnTxt={{fontSize:RF(16),fontFamily: ROBOTO_BOLD,}}
            name={Login}
            // enableImgRight
            onPress={() =>Actions.Login() }
          />
        </AppView>
        <AppView style={[styles.otherSignupTxtLayout]}>
          <AppText style={[styles.orTxt]}>{Login_to}</AppText>
        </AppView>
        
        {/* <BottomSheet adr={refBottomSheet}>
          <AppView style={[]}>
            <AppText>dsahdgjh</AppText>
          </AppView>
        </BottomSheet> */}


        <SignUpBottomSheet adr ={refBottomSheet}
        data={cityList}
        onPress = {(cityName)=>console.log(cityName)}
        submitonpress={()=>{refBottomSheet.current.close(),Actions.reset("Qualification")}}
  
        />

      </AppView>

    </Container>
  )
}