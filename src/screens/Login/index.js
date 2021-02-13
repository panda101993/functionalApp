import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';

import { Container } from '../../components/Containers/index';

import { useSelector, useDispatch } from 'react-redux';

import AppIntroSlider from 'react-native-app-intro-slider';

import { logo, banner_signup, checked_box, unchecked_box, tw_img, mail_img, fb_img } from "@Image/Icon"
import { AppView, AppText, AppImage, Touchable, BottomSheet, SilentTouchable } from '../../components/Atoms';
import { ShortButton, SubmitButton, Card, Input, } from '@Component/Molecules';

import styles from './style';

import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../global/Colors';
// import {  } from '../../Assets/Icon';

// import { RF } from "@Global/Responsive";
import { RF, wp, hp } from "../../global/Responsive";
import { color } from 'react-native-reanimated';
import style from './style';
import { Actions } from 'react-native-router-flux';
// import { BUTTON_SHORT } from '../../components/Molecules';
import { handleValidations } from "./validate"
const { height, width } = Dimensions.get('window');

export default CreateAccount = (props) => {
  const dispatch = useDispatch()
  const refBottomSheet = useRef();
  const state = useSelector(state => state).reducer
  const {
    Sign_in, 
    Email, 
    Password,
    Continue,
    Forgot_Password,
    Remember_me,
    Dont_have_account,
    Join_now,
    Email_error,
    Password_error,
    Or_sign_with,
    sign_with_facebook
  } = state.language.SIGN_IN;
  const [errortxtEmail, setEmailError] = useState(null)
  const [errortxtPassword, setPasswordError] = useState(null)
  const [remember, setremember] = useState(false)
  let [inbuiltstate, setState] =
    useState({
      email: "",
      emailError: "",
      emailStatus: false,
      password: "",
      passwordStatus: false,
      passwordError: '',

    });
  const handlevalidate = async (text, type) => {
    let status = `${type}Status`;
    let errorText = `${type}Error`;
    let resp = handleValidations(text, type)
    await setState({
      ...inbuiltstate,
      [type]: resp.value,
      [errorText]: resp.errorText,
      [status]: resp.status,
    })

  }

  const Submit = () => {
    if (inbuiltstate.emailStatus) {
      if (inbuiltstate.passwordStatus) {
        // if (Remeberme) {
          Actions.tabBar()
        //     let Credentials = {
        //         emailorphone: inbuiltstate.email,
        //         password: inbuiltstate.password,
        //         remembeme: Remeberme
        //     }
        //     AsyncStorage.setItem("user_credentials", JSON.stringify(Credentials))
        // }
        // else {
        //     let Credentials = {
        //         emailorphone: inbuiltstate.email,
        //         password: inbuiltstate.password,
        //         remembeme: Remeberme
        //     }
        //     AsyncStorage.setItem("user_credentials", JSON.stringify(Credentials))
        // }
        // let loginCredentials = {}
        // fetchFromLocal('@fcm_token').then((res)=>{
        //     if(res.status=='Success'){
        //         loginCredentials = {
        //             email: inbuiltstate.email.includes("@")
        //                 ? inbuiltstate.email.toLowerCase()
        //                 : inbuiltstate.email,
        //             password: inbuiltstate.password,
        //             fcmToken: res.data
        //         }
        //         dispatch(GettingAuthToken())
        //         dispatch(SignIn(loginCredentials))
        //     }
        // })
      }
      else {
        setState({ ...inbuiltstate, passwordstatus: false, passwordError: Password_error, })
      }
    }
    else { setState({ ...inbuiltstate, emailstatus: false, emailError: Email_error, }) }
  }
  return (
    <Container Containerlayout={[styles.containerLayout]} scrollable header={false} >
      <AppView style={[styles.mainLayout]}>
        <AppView style={[styles.logoLayout]}>
          <AppImage source={logo} style={[styles.logo]} resizeMode='contain' />
        </AppView>
        <Card cardContainer={styles.adjustCard}>
          <AppView style={[styles.cardHeader]}>
            <AppText style={[styles.cardHeaderTxt]}>{Sign_in}</AppText>
          </AppView>
         <AppView style={inbuiltstate.emailError===""?{ marginVertical: hp(1)}:{marginTop:hp(1)}}>
            <Input
            
              onChangeText={(text) => handlevalidate(text, "email")}
              errortext={inbuiltstate.emailError}
              placeholder={Email}
              keyboardType='email-address'
              value={inbuiltstate.email.trim()}
              maxLength={45}
            />
          </AppView>
         <AppView style={inbuiltstate.passwordError===""?{ marginVertical: hp(1)}:{marginTop:hp(1)}}>
            <Input
              secure={true}
              placeholder={Password}
              errortext={errortxtPassword}
              value={inbuiltstate.password.trim()}
              onChangeText={(text) => handlevalidate(text, "password")}
              errortext={inbuiltstate.passwordError}
            />
          </AppView>

          <AppView style={[styles.signInActionsView]}>
            <Touchable style={[styles.rememberMeLayout]} onPress={() => setremember(!remember)}>
              <AppView>
                <AppImage source={remember ? checked_box : unchecked_box} />
              </AppView>
              <AppView style={[styles.rememberMeView]}>
                <AppText style={[styles.rememberMeTxt]}>{Remember_me}</AppText>
              </AppView>
            </Touchable>
            <Touchable style={[styles.forgotPasswordLayout]}
              onPress={() => Actions.ForgotPassword()}
            >
              <AppText style={[styles.forgotPasswordtxt]}>{Forgot_Password}</AppText>
            </Touchable>
          </AppView>

          <AppView style={[styles.btnView]}>
            <SubmitButton
              btnLayout={{ width: wp(85) }}
              // btnTxt={{fontSize:RF(15)}}
              // nameLayout={{ alignItems: 'center', paddingLeft: 22 }}
              name={Continue}
              // enableImgLeft
              enableImgRight
              source_one={mail_img}
              // source_two={}
              onPress={() => Submit()}
            />
          </AppView>
          <AppView style={[styles.orSigninWithView]}>
            <AppText style={[styles.orSignWithTxt]}>{Or_sign_with}</AppText>
          </AppView>
          <AppView style={[styles.btnView, { paddingBottom: hp(3), }]}>
            <SubmitButton
              btnLayout={styles.adjustBtnLayout}
              // btnTxt={styles.adjustFont}
              name={sign_with_facebook}
              enableImgLeft
              // enableImgRight
              source_one={fb_img}
            // source_two={}
            // onPress={() => refBottomSheet.current.open()}
            />
          </AppView>
        </Card>
        <AppView style={[styles.alreadyAMemberLayout]}>
          <AppView style={[styles.alreadyTxtLayout]}>
            <AppText style={[styles.alreadyTxt]}>{Dont_have_account}</AppText>
          </AppView>
          <SilentTouchable onPress={() => Actions.Options()}>
            <AppText style={[styles.signInTxt]}>{Join_now}</AppText>
          </SilentTouchable>
        </AppView>
        {/* <BottomSheet adr={refBottomSheet}>
          <AppView style={[]}>
            <AppText>dsahdgjh</AppText>
          </AppView>
        </BottomSheet> */}
      </AppView>

    </Container>
  )
}