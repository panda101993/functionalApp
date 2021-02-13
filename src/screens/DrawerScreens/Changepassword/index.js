
import React, { useState, useEffect } from 'react';
import { Platform, Dimensions, Linking } from 'react-native';
import { Container } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, AppbackgraoundImage } from '../../../components/Atoms';
import styles from './style';
import { BORDER_GREY, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BLUE_LIGHT, GREY_ONE } from '../../../global/Colors';
import { App_store, Checkout_banner, dial, messagebox, play_store } from '../../../assets/Icon';
import { RF } from '../../../global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../../global/FontFamilies';
import { TextInput } from 'react-native-gesture-handler';
import { Input, SubmitButton } from '../../../components/Molecules';
import { handleValidations } from './validate';
const { height, width } = Dimensions.get('window');

export default ChangePassword = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state).reducer
    const {
        confirmpassword_error,
        new_Password_error,
        old_Password_error,
        old_password,
        new_password,
        Confirm_password,
        Enter_old_password,
        Enter_new_password,
        Reenter_password

    } = state.language.CHNAGEPASSWORD
    const {
        Change_Password
    } = state.language.DRAWER
    

    let [inbuiltstate, setState] =
        useState({

            confirmpassword: "",
            confirmpasswordStatus: false,
            confirmpasswordError: "",
            password: "",
            passwordStatus: false,
            passwordError: '',
            oldpassword: "",
            oldpasswordStatus: false,
            oldpasswordError: '',

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

        if (inbuiltstate.oldpasswordStatus) {
            if (inbuiltstate.passwordStatus) {
                if (inbuiltstate.confirmpasswordStatus) {
                    // let changpassworddetails = {
                    //     oldPassword: inbuiltstate.oldpassword,
                    //     newPassword: inbuiltstate.password,
                    //     confirmPassword: inbuiltstate.confirmpassword

                    // }

                    // let Token = inbuiltstate.Token
                    // dispatch(changepassword(changpassworddetails, Token))
                    // Actions.Setting()
                }
                else { setState({ ...inbuiltstate, confirmpasswordstatus: false, confirmpasswordError: confirmpassword_error, }) }
            }
            else { setState({ ...inbuiltstate, passwordstatus: false, passwordError: new_Password_error, }) }


        }
        else { setState({ ...inbuiltstate, oldpasswordStatus: false, oldpasswordError: old_Password_error, }) }

    }
    return (
        <Container scrollable backOnly title={Change_Password} Containerlayout={[styles.containerLayout]} header={true} >
            <AppView style={[styles.defaultView, { marginTop:width*0.15,}]}>
                <AppText style={[styles.defaultText, { fontSize: RF(18), paddingVertical: 10, textAlign: "left" }]}>
                    {old_password}
                </AppText>
                <Input placeholder={Enter_old_password}
              maxLength={16}
              secure
              value={inbuiltstate.oldpassword.trim()}
                errortext={inbuiltstate.oldpasswordError}
                onChangeText={(text)=>handlevalidate(text,"oldpassword")}
                Inputcontainer={{ height: inbuiltstate.oldpasswordError?height * 0.08:height * 0.07,  }} />
            </AppView>

            <AppView style={[styles.defaultView, { }]}>
                <AppText style={[styles.defaultText, { fontSize: RF(18), paddingBottom: 10,textAlign: "left" }]}>
                    {new_password}
                </AppText>
                <Input placeholder={Enter_new_password}
               maxLength={16}
               secure
               value={inbuiltstate.password.trim()}
                 errortext={inbuiltstate.passwordError}
                 onChangeText={(text)=>handlevalidate(text,"password")}
                Inputcontainer={{ height:inbuiltstate.passwordError?height * 0.08: height * 0.07,}} />
            </AppView>
            <AppView style={[styles.defaultView, { }]}>
                <AppText style={[styles.defaultText, { fontSize: RF(18), paddingBottom: 10, textAlign: "left" }]}>
                    {Confirm_password}
                </AppText>
                <Input placeholder={Reenter_password}
               maxLength={16}
               secure
               value={inbuiltstate.confirmpassword.trim()}
                 errortext={inbuiltstate.confirmpasswordError}
                 onChangeText={(text)=>handlevalidate(text,"confirmpassword")}
                Inputcontainer={{ height: inbuiltstate.confirmpasswordError?height * 0.08:height * 0.07, }} />
            </AppView>
            <AppView style={{height:height*0.15,alignItems: 'center',justifyContent: 'flex-end',}}>
                <SubmitButton
                name={Change_Password}
                onPress={()=>Submit()}
                />
            </AppView>
        </Container>
    )
}

