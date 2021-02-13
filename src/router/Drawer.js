import React, { useState, useEffect } from "react";
import { Share, Linking, Dimensions } from "react-native"
import { AppView, Touchable, AppImage, AppText, AppModal } from "@Component/Atoms/index"
import styles from "../global/Style"
// import {

// } from "@Image/Icon"
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { linkedin, TwitterIcon, Notification_bell, facebookIcon, instagramicon, Troggle_off, Troggle_on, forwardarrow, earnings, lock, messagebox, dial, faq, p_guide, T_guide, star, share, logout } from "../assets/Icon";
import { BLUE_REGULAR, LIGHT_BROWN } from "../global/Colors";
import { ROBOTO_REGULAR } from "../global/FontFamilies";
import { RF } from "../global/Responsive";
import { Modal_for_YES_NO } from "../components/Molecules";
const { height, width } = Dimensions.get('window');


export default Drawernav = () => {
    const state = useSelector(state => state).reducer
    const {
        Notification,
        Change_Password,
        Earnings,
        Messages,
        Contact_Us,
        FAQs,
        Privacy_Policy,
        Terms_of_use,
        Rate_us,
        Share_app,
        Checkout_Customer_app,
        Follow_us,
        Logout,
        logout_status,
        YES,
        NO


    } = state.language.DRAWER
    const [inbuildstate, setState] = useState({
        notificationtick: false,
        logoutModal: false
    })

    useEffect(() => {

    }, [])

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "www.alfaime.com"

            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    const LogoutSession = () => {
        setState({ ...inbuildstate, logoutModal: false })

        Actions.reset("Login")
    }
    return (
        <AppView style={styles.Drawerstyle}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <AppView style={[styles.Drawerscenestyle, { marginTop: 10, }]}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={Notification_bell} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Notification}
                        </AppText>
                    </AppView>
                    <Touchable onPress={() => setState({ ...inbuildstate, notificationtick: !inbuildstate.notificationtick })} style={styles.arrowView}>
                        <AppImage style={{ right: 5 }}
                            resizeMode="contain" source={inbuildstate.notificationtick ? Troggle_on : Troggle_off} />
                    </Touchable>
                </AppView>
                <Touchable onPress={() => Actions.Earnings()} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={earnings} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Earnings}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable onPress={() => Actions.ChangePassword()} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={lock} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Change_Password}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable onPress={() => Actions.MessageInbox()} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={messagebox} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Messages}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable onPress={() => Actions.ContactUs()} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={dial} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Contact_Us}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable onPress={() => Actions.FAQ()} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={faq} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {FAQs}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable onPress={() => Actions.PrivacyPolicy()} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={p_guide} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Privacy_Policy}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable onPress={() => Actions.TermsCondition()} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={T_guide} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Terms_of_use}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={star} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Rate_us}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable onPress={() => onShare()} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable  >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={share} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Share_app}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <Touchable onPress={() => setState({ ...inbuildstate, logoutModal: true })} style={styles.Drawerscenestyle}>
                    <AppView style={styles.Drawertextview}
                    >
                        <Touchable  >
                            <AppImage resizeMode="contain" style={{ marginHorizontal: 20, }} source={logout} />
                        </Touchable>
                        <AppText style={styles.DreawerusernameText}>
                            {Logout}
                        </AppText>
                    </AppView>
                    <Touchable style={styles.arrowView}>
                        <AppImage source={forwardarrow} />
                    </Touchable>
                </Touchable>
                <AppView style={{
                    alignItems: 'center',
                    height: height * 0.1,
                    justifyContent: 'center',
                    // backgroundColor: "pink",
                }}>
                    <Touchable onPress={() => Actions.Checkout()}>
                        <AppText style={{ color: BLUE_REGULAR, textDecorationLine: "underline", }}>
                            {Checkout_Customer_app}
                        </AppText>
                    </Touchable>


                </AppView>
                <AppView style={{
                    alignItems: 'flex-start',
                    height: height * 0.15,
                    justifyContent: 'flex-start',
                    width: wp("60%"),
                    alignSelf: 'center',
                }}>
                    <AppText style={{
                        fontSize: RF(15), textAlign: "left"
                        , color: LIGHT_BROWN, fontFamily: ROBOTO_REGULAR,
                    }}>
                        {Follow_us}
                    </AppText>
                    <AppView style={{
                        width: wp("60%"), marginTop: 20,
                        flexDirection: 'row', justifyContent: 'space-between',
                    }}>
                        <Touchable>
                            <AppImage resizeMode="contain" source={instagramicon} />
                        </Touchable>
                        <Touchable>
                            <AppImage resizeMode="contain" source={facebookIcon} />
                        </Touchable>
                        <Touchable>
                            <AppImage resizeMode="contain" source={TwitterIcon} />
                        </Touchable>
                        <Touchable>
                            <AppImage resizeMode="contain" source={linkedin} />
                        </Touchable>

                    </AppView>
                </AppView>

                <Modal_for_YES_NO
                    visible={inbuildstate.logoutModal}
                    Headertext={Logout}
                    Bodytext={logout_status}
                    NOText={NO}
                    YESText={YES}
                    NOonpress={() => setState({ ...inbuildstate, logoutModal: false })}
                    YESonpress={() =>
                        LogoutSession()
                    }
                />
            </KeyboardAwareScrollView>
        </AppView>
    )
}