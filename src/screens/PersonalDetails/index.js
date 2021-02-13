import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container } from '../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import {
    camera_icon,
    profile_picture
} from "@Image/Icon"
import { ROBOTO_BOLD, ROBOTO_LIGHT, ROBOTO_REGULAR, SANS_PRO_REGULAR } from '../../global/FontFamilies';
import { AppView, AppText, AppImage, Touchable, SilentTouchable, List, AppbackgraoundImage } from '../../components/Atoms';
import styles from './style';
import { checked_box, unchecked_box, back_arrow } from "@Image/Icon"
import { LIGHT_GREEN, LIGHT_BROWN, GREY_ONE, BLACK_ONE, BLUE_DARK, LIGHT_YELLOW, WHITE_ONE, BLUE_LIGHT } from '../../global/Colors';
import { RF, hp, wp } from "../../global/Responsive";
import { Input, SubmitButton } from '../../components/Molecules';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import style from './style';
import { handleValidations } from "./validate"
import { StaticBottomSheet } from '@Component/CommonComponents/index'
import { Actions } from 'react-native-router-flux';
const { height, width } = Dimensions.get('window');

const workOption = [
    {
        id: '0',
        title: 'Weekends',
        status: false

    },
    {
        id: '1',
        title: 'Weekends',
        status: false

    },
    {
        id: '2',
        title: 'Mornings',
        status: false
    },
    {
        id: '3',
        title: 'Afternoons',
        status: false
    },
    {
        id: '4',
        title: 'Evenings',
        status: false
    },
]
export default PersonalDetails = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state).reducer

    const {
        name_error,
        email_error,
        phonenumber_error,
        Password_error,
    } = state.language.PERSONAL_DETAILS
    const { Bottom_Body_Txt } = state.language.COMMON_TXT
    const [isrefresh, setrefresh] = useState(false);
    const [publicTransportStatus, setPublicTransportStatus] = useState(false);
    const [drivingStatus, setDrivingStatus] = useState(false);
    const [gender, setGender] = useState("")
    const [interestedGender, setInterestedGender] = useState("")
    const [remember, setremember] = useState(false)
    const [bottomTitle, setBottomTitle] = useState("")
    const refBottomSheetStatic = useRef();
    let [inbuiltstate, setState] =
        useState({
            name: "",
            nameStatus: false,
            nameError: "",
            email: "",
            emailStatus: false,
            emailError: "",
            phonenumber: "",
            phonenumberStatus: false,
            phonenumberError: "",
            password: "",
            passwordStatus: false,
            passwordError: '',
            genderError: '',
            interestedGenderError: '',
            workStatus: false,
            workError: '',
            transportError: '',
            termsPrivacyError: ''

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
        // console.log("resppp=>>", resp, inbuiltstate)
    }

    const handleGender = (type) => {
        setGender(type)
        setState({ ...inbuiltstate, genderError: '' })
    }
    const handleInterestedGender = (type) => {
        setInterestedGender(type)
        setState({ ...inbuiltstate, interestedGenderError: '' })
    }
    const Submit = () => {
        //Actions.Userinfo()
        if (inbuiltstate.nameStatus) {
            if (inbuiltstate.emailStatus) {
                if (inbuiltstate.phonenumberStatus) {
                    if (inbuiltstate.passwordStatus) {
                        if (gender !== '') {
                            if (interestedGender !== '') {
                                workErrorCheck()
                            }
                            else { setState({ ...inbuiltstate, interestedGenderError: 'Please select an option' }) }
                        }
                        else { setState({ ...inbuiltstate, genderError: 'Please select your gender' }) }
                    }
                    else { setState({ ...inbuiltstate, passwordstatus: false, passwordError: Password_error, }) }
                }
                else { setState({ ...inbuiltstate, phonenumberstatus: false, phonenumberError: phonenumber_error, }) }
            }
            else { setState({ ...inbuiltstate, emailstatus: false, emailError: email_error, }) }
        }
        else { setState({ ...inbuiltstate, namestatus: false, nameError: name_error, }) }
    }

    const workErrorCheck = () => {
        let workStatus = workOption.some((item) => item.status === true)
        if (workStatus) {
            if (publicTransportStatus || drivingStatus) {
                if (remember) {
                    Actions.RegistrationDetails()
                }
                else {
                    setState({ ...inbuiltstate, termsPrivacyError: "Please select the check box", })
                }
            }
            else { setState({ ...inbuiltstate, transportError: "Please select an option", }) }
        }
        else { setState({ ...inbuiltstate, workStatus: false, workError: "Please select an option", }) }

    }





    const handleTermsNPrivacy = (type) => {
        type === 'terms' ? setBottomTitle("Terms of use") : setBottomTitle("Privacy Policy")
        refBottomSheetStatic.current.open()
    }
    const renderWork = ({ item, index }) => {
        return (
            <AppView style={{
                width: width * 0.31,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: wp(0.2),
                height: hp(7)
            }}>
                <Touchable onPress={() => {
                    item.status = !item.status
                    setState({ ...inbuiltstate, workError: "" })
                    setrefresh(!isrefresh)
                }}
                    style={[styles.OptiononeView, { backgroundColor: item.status ? LIGHT_GREEN : WHITE_ONE, width: width * 0.3 }]}>
                    <AppText style={{ textAlign: "center", color: item.status ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                        {item.title}
                    </AppText>
                </Touchable>
            </AppView>
        )
    }
    return (
        <AppView style={{ flex: 1 }}>
            <KeyboardAwareScrollView
                enableOnAndroid
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <AppView style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Touchable onPress={()=>Actions.pop()}>
                         <AppImage  source={back_arrow} style={{ height: hp(2.5), width: wp(8) }} resizeMode="contain" />
                    </Touchable>
                   
                    <AppText style={{ fontFamily: ROBOTO_BOLD, color: LIGHT_BROWN, fontSize: RF(18) }} >Personal details</AppText>
                    <AppView style={{ height: hp(5), width: wp(8) }} />
                </AppView>

                <AppView style={styles.profilePicContainer}>
                    <AppbackgraoundImage resizeMode="contain"
                        style={styles.profilePic} source={profile_picture}>
                        <AppImage resizeMode="contain"
                            style={styles.cameraIconStyle}
                            source={camera_icon} />
                    </AppbackgraoundImage>
                </AppView>
                <AppText
                    style={styles.personalTxt}>Personal details</AppText>

                <AppView style={inbuiltstate.nameError === "" ? { marginVertical: hp(1) } : { marginTop: hp(1) }}>
                    <Input
                        placeholder={"Enter your full name"}
                        maxLength={30}
                        value={inbuiltstate.name}
                        onChangeText={(text) => handlevalidate(text, "name")}
                        errortext={inbuiltstate.nameError}
                        keyboardType='default'
                    />
                </AppView>
                <AppView style={inbuiltstate.emailError === "" ? { marginVertical: hp(1) } : { marginTop: hp(1) }}>
                    <Input
                        placeholder={"Enter your email address"}
                        maxLength={30}
                        value={inbuiltstate.email.trim()}
                                     onChangeText={(text) => handlevalidate(text, "email")}
                                     errortext={inbuiltstate.emailError}
                    />
                </AppView>
                <AppView style={inbuiltstate.phonenumberError === "" ? { marginVertical: hp(1) } : { marginTop: hp(1) }}>
                    <Input
                        maxLength={16}
                        placeholder={"Enter your phone number"}
                        value={inbuiltstate.phonenumber.trim()}
                        onChangeText={(text) => handlevalidate(text, "phonenumber")}
                        keyboardType="number-pad"
                        errortext={inbuiltstate.phonenumberError}
                    />
                </AppView>
                <AppView style={inbuiltstate.passwordError === "" ? { marginVertical: hp(1) } : { marginTop: hp(1) }}>
                    <Input
                        placeholder={"Enter your password"}
                        maxLength={16}
                        secure={ true}
                         value={inbuiltstate.password.trim()}
                        onChangeText={(text) => handlevalidate(text, "password")}
                        errortext={inbuiltstate.passwordError}
                    />
                </AppView>
                <AppText
                    style={styles.personalTxt}>Other details</AppText>

                <AppView style={{ marginVertical: hp(1) }}>
                    <AppText
                        style={[styles.personalTxt, { fontSize: RF(16) }]}>Select your gender</AppText>
                    <AppView style={{ flexDirection: 'row', marginLeft: wp(12.5), }}>
                        <Touchable
                            onPress={() => handleGender("Male")}
                            style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                            {gender === "Male" ?
                                <AppView style={[styles.selectedRadio]} />
                                :
                                <AppView style={[styles.unselectedRadio]} />
                            }
                            <AppText style={styles.radioTxt}>Male</AppText>
                        </Touchable>
                        <Touchable
                            onPress={() => handleGender("Female")}
                            style={{ flexDirection: 'row', marginVertical: hp(1), marginLeft: wp(6) }}>
                            {gender === "Female" ?
                                <AppView style={[styles.selectedRadio]} />
                                :
                                <AppView style={[styles.unselectedRadio]} />
                            }
                            <AppText style={styles.radioTxt}>Female</AppText>
                        </Touchable>
                    </AppView>
                    {inbuiltstate.genderError !== "" && <AppText style={{ marginLeft: wp(12.5), color: 'red' }}>{inbuiltstate.genderError}</AppText>
                    }
                </AppView>

                <AppView>
                    <AppText
                        style={[styles.personalTxt, { fontSize: RF(16) }]}>Interested to provide services</AppText>
                    <AppView style={{ flexDirection: 'row', marginLeft: wp(12.5), }}>
                        <Touchable
                            onPress={() => handleInterestedGender("Male")}
                            style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                            {interestedGender === "Male" ?
                                <AppView style={[styles.selectedRadio]} />
                                :
                                <AppView style={[styles.unselectedRadio]} />
                            }
                            <AppText style={styles.radioTxt}>Male</AppText>
                        </Touchable>
                        <Touchable
                            onPress={() => handleInterestedGender("Female")} style={{ flexDirection: 'row', marginVertical: hp(1), marginLeft: wp(6) }}>
                            {interestedGender === "Female" ?
                                <AppView style={[styles.selectedRadio]} />
                                :
                                <AppView style={[styles.unselectedRadio]} />
                            }
                            <AppText style={styles.radioTxt}>Female</AppText>
                        </Touchable>
                        <Touchable
                            onPress={() => handleInterestedGender("Both")} style={{ flexDirection: 'row', marginVertical: hp(1), marginLeft: wp(6) }}>
                            {interestedGender === "Both" ?
                                <AppView style={[styles.selectedRadio]} />
                                :
                                <AppView style={[styles.unselectedRadio]} />
                            }
                            <AppText style={styles.radioTxt}>Both</AppText>
                        </Touchable>
                    </AppView>
                    {inbuiltstate.interestedGenderError !== "" && <AppText style={{ marginLeft: wp(12.5), color: 'red' }}>{inbuiltstate.interestedGenderError}</AppText>
                    }
                </AppView>

                <AppView style={styles.listView} >
                    <AppText style={{ width: width * 0.90, alignSelf: 'center', paddingBottom: hp(1), textAlign: "left", fontSize: RF(16), fontWeight: "bold", color: LIGHT_BROWN, }}>
                        {"When are you most likely to work"}
                    </AppText>
                    <List
                        showsVerticalScrollIndicator={false}
                        data={workOption}
                        showsHorizontalScrollIndicator={false}
                        renderItem={(item, index) => renderWork(item, index)}
                        numColumns={3}
                        extraData={isrefresh}
                    />
                    {!inbuiltstate.workStatus && <AppText style={{ color: 'red', alignSelf: 'flex-start', marginLeft: wp(3), }}>{inbuiltstate.workError}</AppText>}
                </AppView>
                <AppView style={{ width: wp(93), alignSelf: 'center', }} >
                    <AppText style={{ width: width * 0.90, alignSelf: 'center', textAlign: "left", fontSize: RF(16), fontWeight: "bold", color: LIGHT_BROWN, marginVertical: 10, }}>
                        {"Preferred transport mode"}
                    </AppText>

                    <AppView style={{ flexDirection: 'row', }}>

                        <AppView style={{
                            width: wp(40),
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: hp(7)
                        }}>
                            <Touchable
                                onPress={() => {
                                    setPublicTransportStatus(!publicTransportStatus)
                                    setrefresh(!isrefresh)
                                    setState({ ...inbuiltstate, transportError: "", })
                                }}
                                style={[styles.OptiononeView, { backgroundColor: publicTransportStatus ? LIGHT_GREEN : WHITE_ONE, width: wp(40) }]}>
                                <AppText style={{ textAlign: "center", color: publicTransportStatus ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                                    {"Public transport"}
                                </AppText>
                            </Touchable>
                        </AppView>


                        <AppView style={{
                            width: width * 0.31,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: hp(7),
                            marginHorizontal: wp(2),
                        }}>
                            <Touchable
                                onPress={() => {
                                    setDrivingStatus(!drivingStatus)
                                    setrefresh(!isrefresh)
                                    setState({ ...inbuiltstate, transportError: "", })
                                }}
                                style={[styles.OptiononeView, { backgroundColor: drivingStatus ? LIGHT_GREEN : WHITE_ONE, width: width * 0.3 }]}>
                                <AppText style={{ textAlign: "center", color: drivingStatus ? WHITE_ONE : LIGHT_BROWN, fontSize: RF(13), fontWeight: "normal" }}>
                                    {"Driving"}
                                </AppText>
                            </Touchable>
                        </AppView>
                    </AppView>
                    {inbuiltstate.transportError !== "" && <AppText style={{ color: 'red', alignSelf: 'flex-start', marginLeft: wp(3) }}>{inbuiltstate.transportError}</AppText>}
                </AppView >
                <Touchable
                    style={[styles.rememberMeLayout, { width: wp(90), alignSelf: 'center', marginTop: hp(2), alignSelf: 'center', }]}
                    onPress={() => {
                        setremember(!remember)
                        setState({ ...inbuiltstate, termsPrivacyError: "" })
                    }}>
                    <AppView>
                        <AppImage source={remember ? checked_box : unchecked_box} />
                    </AppView>
                    <AppView style={[styles.rememberMeView]}>
                        <AppText style={[styles.rememberMeTxt]}>{'I accept'}</AppText>
                    </AppView>
                    <SilentTouchable onPress={() => handleTermsNPrivacy('terms')}>
                        <AppText style={[styles.signInTxt]}>{" Terms & Conditions"}</AppText>
                    </SilentTouchable>
                    <AppView style={[styles.alreadyTxtLayout]}>
                        <AppText style={[styles.alreadyTxt]}>{' and'}</AppText>
                    </AppView>
                    <SilentTouchable onPress={() => handleTermsNPrivacy('privacy')}>
                        <AppText style={[styles.signInTxt]}>{" Privacy Policy"}</AppText>
                    </SilentTouchable>
                </Touchable>
                {!remember && <AppText style={{ color: 'red', alignSelf: 'flex-start', marginLeft: wp(3) }}>{inbuiltstate.termsPrivacyError}</AppText>}
                <AppView style={{ marginVertical: hp(3) }}>
                    <SubmitButton
                        // enableImgLeft
                        name={"Continue"}
                        // enableImgRight
                        onPress={() => Submit()}
                    />
                </AppView>
                <AppView style={[styles.alreadyAMemberLayout]}>
                    <AppView style={[styles.alreadyTxtLayout]}>
                        <AppText style={[styles.alreadyTxt]}>{'Already a member ?'}</AppText>
                    </AppView>
                    <SilentTouchable onPress={() => Actions.Login()}>
                        <AppText style={[styles.signInTxt]}>{" Sign in"}</AppText>
                    </SilentTouchable>
                </AppView>
            </KeyboardAwareScrollView>
            <StaticBottomSheet adr={refBottomSheetStatic}
                title={bottomTitle}
                body={Bottom_Body_Txt}
                pressCross={() => refBottomSheetStatic.current.close()}
            />
        </AppView>



    )
}
















