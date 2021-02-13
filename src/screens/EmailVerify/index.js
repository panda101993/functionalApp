import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';

import { Container, } from '../../components/Containers/index';

import { useSelector, useDispatch } from 'react-redux';

import { logo, banner_signup, checked_box, unchecked_box, tw_img, mail_img,back_arrow, fb_img } from "@Image/Icon"
import { AppView, AppText, AppImage, Touchable, BottomSheet, SilentTouchable } from '../../components/Atoms';
import { ShortButton, SubmitButton, Card, Input,EmailOTP } from '@Component/Molecules';
import { ROBOTO_BOLD, ROBOTO_LIGHT, ROBOTO_REGULAR, SANS_PRO_REGULAR } from '../../global/FontFamilies';
import styles from './style';
import handleValidations from './validate';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BLUE_LIGHT } from '../../global/Colors';

import { RF, SW , hp ,wp } from "../../global/Responsive";
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');

export default EmailVerify = (props) => {
    const state = useSelector(state => state).reducer;
    const dispatch = useDispatch()
    const refBottomSheet = useRef();
    // const state = useSelector(state => state).reducer
    // const { } = state.language
    const [errortxtEmail, setEmailError] = useState(null)
    const [errortxtPassword, setPasswordError] = useState(null)
    const [remember, setremember] = useState(false)


    const phoneOTP1 = useRef(null);
    const phoneOTP2 = useRef(null);
    const phoneOTP3 = useRef(null);
    const phoneOTP4 = useRef(null);

    const [inbuiltstate, setState] = useState({
        ...inbuiltstate,
        phoneOTP1: '', phoneOTP1Status: '',
        phoneOTP2: '', phoneOTP2Status: '',
        phoneOTP3: '', phoneOTP3Status: '',
        phoneOTP4: '', phoneOTP4Status: '',
        phoneError: null
    });

    const handleOTPInput =async (input,type,index,prev,next) =>{
        // console.log("OTP ===>",input)
        setState({ ...inbuiltstate, phoneError: null, })
        let status = `${type}${index}Status`;
        let Otpvalue = `${type}${index}`
        let resp = handleValidations(input,prev,next)
        await setState({ ...inbuiltstate, [Otpvalue]: resp.value, [status]: resp.status, phoneError: null })
    }

    const validate = (OTP) => {
        let status = false
        if (OTP.length != 4) { setState({ ...inbuiltstate, phoneError: 'Enter 4 digit OTP' }) }
        else {
            status = true
            setState({ ...inbuiltstate, phoneError: null })
        }
        return status;
    }


    const submit = () => {
        const { phoneOTP1, phoneOTP2, phoneOTP3, phoneOTP4 } = inbuiltstate;

        let combineOTP = `${phoneOTP1}${phoneOTP2}${phoneOTP3}${phoneOTP4}`;
        if (validate(combineOTP)) {
            // let payload = { "userId": state.userData._id, "passCode": combineOTP, }
            console.log("combineOTP -->",combineOTP)
            Actions.ResetPassword()
        }
    }
    return (
        <Container Containerlayout={[styles.containerLayout]}
            scrollable
             header={false}
            // backOnly
          
            // onBackPress={() => Actions.pop()}
        >
            <AppView style={[styles.mainLayout]}>
            <AppView style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                       <Touchable onPress={()=>Actions.pop()}>
                         <AppImage  source={back_arrow} style={{ height: hp(2.5), width: wp(8) }} resizeMode="contain" />
                    </Touchable>
                    <AppText style={{ fontFamily: ROBOTO_BOLD, color: LIGHT_BROWN, fontSize: RF(18) }} >OTP Verification</AppText>
                    <AppView style={{ height: hp(5), width: wp(8) }} />
                </AppView>

                <Card cardContainer={styles.adjustCard}>
                    <AppView style={[styles.cardHeader]}>
                        <AppText style={[styles.cardHeaderTxt]}>{'Just few steps ahead !'}</AppText>
                    </AppView>
                    <AppView style={[styles.cardHeaderMsgView]}>
                        <AppText style={[styles.cardHeaderMsgTxt]}>{'Please enter the 4 digit OTP you recieved on your registered email address.'}</AppText>
                    </AppView>
                    <EmailOTP
                    error_text={inbuiltstate.phoneError}
                    adr_one={phoneOTP1}
                    onChangeText_one={(text) => handleOTPInput(text, 'phoneOTP', '1', phoneOTP1, phoneOTP2)}

                    adr_two={phoneOTP2}
                    onChangeText_two={(text) => handleOTPInput(text, 'phoneOTP', '2', phoneOTP1, phoneOTP3)}

                    adr_three={phoneOTP3}
                    onChangeText_three={(text) => handleOTPInput(text, 'phoneOTP', '3', phoneOTP2, phoneOTP4)}

                    adr_four={phoneOTP4}
                    onChangeText_four={(text) => handleOTPInput(text, 'phoneOTP', '4', phoneOTP3, phoneOTP4)}

                    />
                    <AppView style={{
                        // backgroundColor:'red',
                        width:'90%',
                        alignSelf:'center',
                        alignItems: 'flex-end',
                        marginVertical:SW(14)
                    }}>
                        <Touchable onPress={()=>alert("OTP has resent successfully")}>
                            <AppText style={{
                                color: BLUE_LIGHT,
                                fontSize: RF(15),
                                textDecorationLine:'underline'
                            }}>Resend</AppText>
                        </Touchable>
                        
                    </AppView>
                </Card>
                <AppView style={[styles.btnView]}>
                    <SubmitButton
                        btnLayout={{ width: '95%' }}
                        // btnTxt={{fontSize:RF(15)}}
                        nameLayout={{ alignItems: 'center', paddingLeft: 22 }}
                        name='Change'
                        // enableImgLeft
                        enableImgRight
                        source_one={mail_img}
                        // source_two={}
                        onPress={() => submit()}
                    // onPress={() => refBottomSheet.current.open()}
                    />
                </AppView>
            </AppView>
        </Container>
    )
}