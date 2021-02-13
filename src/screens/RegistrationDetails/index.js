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
import { BORDER_GREY, LIGHT_BROWN, GREY_ONE, BLACK_ONE, BLUE_DARK, LIGHT_YELLOW, WHITE_ONE, BLUE_LIGHT } from '../../global/Colors';
import { RF, hp, wp } from "../../global/Responsive";
import { Input, SubmitButton } from '../../components/Molecules';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import style from './style';
import { StaticBottomSheet } from '@Component/CommonComponents/index'
import { Actions } from 'react-native-router-flux';
const { height, width } = Dimensions.get('window');

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
                  
                    <AppText style={{ fontFamily: ROBOTO_BOLD, color: LIGHT_BROWN, fontSize: RF(18) }} >Registration details</AppText>
                    <AppView style={{ height: hp(5), width: wp(8) }} />
                </AppView>

                <AppView style={styles.profilePicContainer}>
                    <AppImage resizeMode="contain"
                        style={styles.profilePic} source={profile_picture} />
                </AppView>


                <AppView style={{ width: wp(85),paddingVertical: hp(3),borderColor: BORDER_GREY, paddingHorizontal: wp(5), borderWidth: 0.5, alignSelf: 'center' }}>
                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Location</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>Location</AppText>
                        </AppView>
                    </AppView>


                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Qualified in</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>Massage</AppText>
                        </AppView>
                    </AppView>

                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Treatments</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>Hot Stone massage</AppText>
                            <AppText>Swedish massage</AppText>
                            <AppText>Aromatherapy</AppText>
                        </AppView>
                    </AppView>

                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Name</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>Alis john</AppText>
                        </AppView>
                    </AppView>

                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Phone number</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>9999999999</AppText>
                        </AppView>
                    </AppView>

                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Email</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>abcd@gmail.com</AppText>
                        </AppView>
                    </AppView>

                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Password</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>**********</AppText>
                        </AppView>
                    </AppView>

                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Gender</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>Female</AppText>
                        </AppView>
                    </AppView>
                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Service provider for</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>Female</AppText>
                        </AppView>
                    </AppView>
                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Most like to work</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>Full Week</AppText>
                        </AppView>
                    </AppView>
                    
                    <AppView style={{ flexDirection: 'row', marginVertical: hp(1), }}>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText style={{ fontFamily: ROBOTO_BOLD, }}>Transport mode</AppText>
                        </AppView>
                        <AppView style={{ width: wp(80 / 2) }}>
                            <AppText>Drive</AppText>
                        </AppView>
                    </AppView>
                </AppView>
                <AppView style={{ marginVertical: hp(3) }}>
                    <SubmitButton
                        // enableImgLeft
                        name={"Submit your request"}
                        // enableImgRight
                        onPress={() => Actions.RequestSent()}
                    />
                </AppView>
            </KeyboardAwareScrollView>
        </AppView>



    )
}
















