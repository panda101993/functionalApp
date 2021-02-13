import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, BottomSheet, SilentTouchable } from '../../components/Atoms';
import { ShortButton, SubmitButton, Card, Input, } from '@Component/Molecules';
import { ROBOTO_BOLD, ROBOTO_LIGHT, ROBOTO_REGULAR, SANS_PRO_REGULAR } from '../../global/FontFamilies';
import styles from './style';
import { checked_box, unchecked_box, back_arrow, mail_img } from "@Image/Icon"
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../global/Colors';
import { RF, hp, wp } from "../../global/Responsive";
import { Actions } from 'react-native-router-flux';
import { handleValidations } from "./validate"
const { height, width } = Dimensions.get('window');

export default ForgotPassword = (props) => {
    const dispatch = useDispatch()
    const refBottomSheet = useRef();
    const state = useSelector(state => state).reducer
    const { Email, Email_error, Continue } = state.language.SIGN_IN;
    const { We_are_here, Email_txt, Please_enter_your } = state.language.FORGOT_PASSWORD;

    let [inbuiltstate, setState] =
        useState({
            email: "",
            emailError: "",
            emailStatus: false,
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
            Actions.EmailVerify()
        }
        else { setState({ ...inbuiltstate, emailstatus: false, emailError: Email_error, }) }
    }

    return (
        <Container Containerlayout={[styles.containerLayout]}
            scrollable
            header={false}
        // backOnly
        // title="Forgot Password"
        //   onBackPress={()=>Actions.pop()}
        >
            <AppView style={[styles.mainLayout]}>

                <AppView style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <AppImage source={back_arrow} style={{ height: hp(2.5), width: wp(8) }} resizeMode="contain" />
                    <AppText style={{ fontFamily: ROBOTO_BOLD, color: LIGHT_BROWN, fontSize: RF(18) }} >Forgot Password</AppText>
                    <AppView style={{ height: hp(5), width: wp(8) }} />
                </AppView>


                <Card cardContainer={styles.adjustCard}>
                    <AppView style={[styles.cardHeader]}>
                        <AppText style={[styles.cardHeaderTxt]}>{We_are_here}</AppText>
                    </AppView>
                    <AppView style={[styles.cardHeaderMsgView]}>
                        <AppText style={[styles.cardHeaderMsgTxt]}>{Please_enter_your}</AppText>
                    </AppView>
                    <AppView style={[styles.cardHeaderMsgView]}>
                        <AppText style={[styles.cardHeaderMsgTxt]}>{Email_txt}</AppText>
                    </AppView>
                    <AppView style={{ marginBottom: hp(8), }}>
                        <Input
                            onChangeText={(text) => handlevalidate(text, "email")}
                            errortext={inbuiltstate.emailError}
                            placeholder={Email}
                            keyboardType='email-address'
                            value={inbuiltstate.email}
                            maxLength={45}
                            style={{ width: wp(75) }}
                            Errorstyle={{ width: wp(75) }}
                        />

                    </AppView>


                </Card>
                <AppView style={[styles.btnView]}>
                    <SubmitButton
                        btnLayout={{ width: '95%' }}
                        // btnTxt={{fontSize:RF(15)}}
                        nameLayout={{ alignItems: 'center', paddingLeft: 22 }}
                        name={Continue}
                        // enableImgLeft
                        enableImgRight
                        source_one={mail_img}
                        // source_two={}
                        onPress={() => Submit()}
                    // onPress={() => refBottomSheet.current.open()}
                    />
                </AppView>
            </AppView>
        </Container>
    )
}