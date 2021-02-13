import React, { useState, useEffect, useRef } from 'react';
import { Linking, Dimensions } from 'react-native';
import { Container, } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List, BottomSheet } from '../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BORDER_GREY } from '../../../global/Colors';
import { RF } from "../../../global/Responsive";
import { Requestlist } from '../../../components/commomList';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../../global/FontFamilies';
import { Actions } from 'react-native-router-flux';
import { cross_icon, Customer_Profile, dial, Flag, location_icon, Threedot_icon } from "../../../assets/Icon"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { CustomWhiteButton, GreenhalfButton, SubmitButton } from '../../../components/Molecules';


export default Details = (props) => {
    const refBottomSheetStatic = useRef();


    const state = useSelector(state => state).reducer
    const {
        Bookingfor,
        Bookingduration,
        Booking_details,
        Total_Ernings,
        Client_Note,
        Floor,
        Sensitive_Skin,
        Allergy,
        Pet,
        are_you_sure_cancel,
        YES,
        NO,
        Bill_details,
        service_fee,
        Taxes,
        Total_bill

    } = state.language.REQUESTS
    const {
        Confirm_booking,
        Decline,
        Cancel_booking,
        Cancel_Booking,
        Accept
    } = state.language.COMMON_TXT

    const [inbuilstate, setState] = useState({
        Flagoption: false,


    })


    return (
        <Container scrollable title={Booking_details} backOnly Containerlayout={[styles.containerLayout]} header={true} >
            <AppView style={[styles.defaultView, {}]}>
                <AppView style={styles.imageView}>
                    <AppView style={{
                        width: width * 0.8,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',

                    }} >
                        <AppImage style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                        }} source={Customer_Profile} />
                        <AppView style={{ left: 10, width: width * 0.6, }}>
                            <AppText style={[styles.defaultText, { fontSize: RF(18), fontFamily: ROBOTO_BOLD, }]
                            }>
                                Mo Akaliu                       </AppText>
                            <AppText style={[styles.defaultText, { fontSize: RF(16), }]}>
                                04 june 2020, 10:00-11:15
                            </AppText>
                            <AppText style={[styles.defaultText, { fontSize: RF(16), }]}>
                                19 Briest St. London, EC1M 5NR
                            </AppText>

                        </AppView>
                    </AppView>


                    <AppView
                        style={{
                            height: 50,
                            // marginTop: 10,
                            // backgroundColor: "red",
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Touchable>
                            <AppImage resizeMode="contain" style={{
                            }} source={location_icon} />
                        </Touchable>
                        <Touchable onPress={() => Linking.openURL(`tel:${"9999999999"}`)}>
                            <AppImage style={{ width: 30, height: 20, }} resizeMode="contain" source={dial} />
                        </Touchable>

                    </AppView>
                </AppView>
                {props.Page == "Home" ?
                    null :
                    <AppView style={{
                        marginLeft: 80, width: width * 0.7, alignSelf: 'center', flexDirection: 'row',
                        alignItems: 'center', marginVertical: 15,
                    }}>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), left: 10, fontFamily: ROBOTO_BOLD, width: width * 0.6, }]
                        }>
                            {Total_Ernings}
                        </AppText>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), width: width * 0.1, textAlign: "center" }]
                        }>

                            $17
                        </AppText>
                    </AppView>
                }
                {props.Page == "Home" ?
                    <AppView style={styles.ButtonView}>

                    </AppView>
                    :
                    <AppView style={styles.ButtonView}>
                        <SubmitButton
                            onPress={() => props.Page == "Request" ? Actions.Bookings() : refBottomSheetStatic.current.open()}
                            name={props.Page == "Request" ? Confirm_booking : Cancel_booking}
                            btnTxt={{ fontSize: 14 }}
                            btnLayout={{ width: width * 0.6, height: height * 0.05 }}
                        />
                    </AppView>
                }
                <AppView style={{ width: width * 0.9, alignSelf: 'center', paddingVertical: 5, }}>
                    <AppView style={{ width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 10, maxWidth: width * 0.3 }]
                        }>
                            {Bookingfor}
                        </AppText>
                        <AppText style={[styles.defaultText, {
                            fontSize: RF(15), paddingTop: 10, maxWidth: width * 0.5,
                        }]
                        }>
                            Waxing & Head massage
                        </AppText>
                    </AppView>
                    <AppView style={{ width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 10, paddingTop: 10, maxWidth: width * 0.4 }]
                        }>
                            {Bookingduration}
                        </AppText>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), paddingTop: 10, maxWidth: width * 0.5 }]
                        }>

                            1.5 hrs
                        </AppText>
                    </AppView>
                    {props.Page == "Home" ?
                        <AppView style={{ height: 30, width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>

                        </AppView>
                        :
                        <AppView style={{ width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                            <AppText style={[styles.defaultText, { fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 10, maxWidth: width * 0.4 }]
                            }>
                                {Floor}

                            </AppText>
                            <AppText style={[styles.defaultText, { fontSize: RF(15), paddingTop: 10, maxWidth: width * 0.5 }]
                            }>

                                Groud Floor
                        </AppText>
                        </AppView>
                    }

                    <AppView style={{ width: width * 0.9, alignSelf: 'center', }}>
                        <AppText style={[styles.defaultText, { fontSize: props.Page == "Home" ? RF(18) : RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 10, maxWidth: width * 0.4 }]
                        }>
                            {Client_Note}

                        </AppText>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), paddingTop: 10, maxWidth: width * 0.9 }]
                        }>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean euismod bibendum laoreet. Proin gravida
                        </AppText>
                    </AppView>
                    {props.Page == "Home" ?
                        <AppView style={{ marginTop: 30, width: width * 0.9, alignSelf: 'center', }}>
                            <AppText style={[styles.defaultText, {
                                fontSize: props.Page == "Home" ? RF(18) : RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 10, maxWidth: width * 0.4
                            }]
                            }>
                                {Bill_details}

                            </AppText>
                            <AppView style={{ marginTop: 10, width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                                <AppText style={[styles.defaultText, {
                                    textAlign: "left", fontSize: RF(15), fontFamily: ROBOTO_REGULAR, paddingTop: 10, width: width * 0.75,

                                }]
                                }>
                                    Waxing & Head massage

                                </AppText>
                                <AppText style={[styles.defaultText,
                                {
                                    textAlign: "center", fontSize: RF(15), paddingTop: 10, width: width * 0.15,

                                }]
                                }>

                                    $27
</AppText>
                            </AppView>
                            <AppView style={{ marginTop: 10, width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                                <AppText style={[styles.defaultText, {
                                    textAlign: "left", fontSize: RF(15), fontFamily: ROBOTO_REGULAR,  width: width * 0.75,

                                }]
                                }>
                                    {service_fee}

                                </AppText>
                                <AppText style={[styles.defaultText,
                                {
                                    textAlign: "center", fontSize: RF(15),  width: width * 0.15,

                                }]
                                }>

                                    $5
</AppText>
                            </AppView>
                            <AppView style={{ marginTop: 10, width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                                <AppText style={[styles.defaultText, {
                                    textAlign: "left", fontSize: RF(15), fontFamily: ROBOTO_REGULAR,  width: width * 0.75,

                                }]
                                }>
                                    {Taxes}

                                </AppText>
                                <AppText style={[styles.defaultText,
                                {
                                    textAlign: "center", fontSize: RF(15),  width: width * 0.15,

                                }]
                                }>

                                    $2
</AppText>
                            </AppView>
                            <AppView style={{ marginTop: 10, width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                                <AppText style={[styles.defaultText, {
                                    textAlign: "left", fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 8, width: width * 0.75,

                                }]
                                }>
                                    {Total_bill}

                                </AppText>
                                <AppText style={[styles.defaultText,
                                {
                                    fontFamily: ROBOTO_BOLD,
                                    textAlign: "center", fontSize: RF(15), paddingTop: 8, width: width * 0.15,

                                }]
                                }>

                                    $33
</AppText>
                            </AppView>
                        </AppView>
                        :
                        <AppView>

                            <AppView style={{ width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                                <AppText style={[styles.defaultText, { fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 10, maxWidth: width * 0.4 }]
                                }>
                                    {Pet}

                                </AppText>
                                <AppText style={[styles.defaultText, { fontSize: RF(15), paddingTop: 10, maxWidth: width * 0.5 }]
                                }>

                                    Dog
</AppText>
                            </AppView>
                            <AppView style={{ width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                                <AppText style={[styles.defaultText, { fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 10, maxWidth: width * 0.4 }]
                                }>
                                    {Allergy}

                                </AppText>
                                <AppText style={[styles.defaultText, { fontSize: RF(15), paddingTop: 10, maxWidth: width * 0.5 }]
                                }>

                                    No
</AppText>
                            </AppView>
                            <AppView style={{ width: width * 0.9, alignSelf: 'center', flexDirection: 'row', }}>
                                <AppText style={[styles.defaultText, { fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 10, maxWidth: width * 0.4 }]
                                }>
                                    {Sensitive_Skin}

                                </AppText>
                                <AppText style={[styles.defaultText, { fontSize: RF(15), paddingTop: 10, maxWidth: width * 0.5 }]
                                }>

                                    No
</AppText>
                            </AppView>
                        </AppView>
                    }

                </AppView>

            </AppView>
            {props.Page == "Request" ?

                <AppView style={[styles.ButtonView,
                { height: height * 0.2, justifyContent: 'flex-end', alignItems: 'flex-end', }]}>
                    <SubmitButton
                        name={Decline}
                        onPress={() => alert("Decline Successfully")}
                    />
                </AppView>
                :
                props.Page == "Home" ?
                    <AppView style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignSelf: 'center',
                        alignItems: 'center',
                        padding: 15,
                        width: width * 0.9,

                        height: height * 0.15, alignItems: 'flex-end',
                    }}>
                        <CustomWhiteButton
                            name={Decline}
                            textstyle={{ color: LIGHT_BROWN, }}
                            onPress={() => refBottomSheetStatic.current.close()}

                        />
                        <GreenhalfButton
                            name={Accept}
                            onPress={() => refBottomSheetStatic.current.close()}
                        />

                    </AppView>


                    :
                    null
            }
            {/* //******************  Bottom Sheet  *************************************/}

            <BottomSheet adr={refBottomSheetStatic}
                sheetHeight={inbuilstate.Flagoption ? hp(25) : hp(30)}
            >
                <AppView style={styles.staticContainerLayout}>
                    <AppView style={styles.staticHeaderWrapper}>
                        <AppView />
                        <AppText style={[styles.staticHeaderTxt]}>
                            {/* {location_details} */}
                        </AppText>

                        <Touchable onPress={() => refBottomSheetStatic.current.close()}>
                            <AppImage source={cross_icon} resizeMode="contain"
                                style={{ width: wp(3), height: hp(2), }} />
                        </Touchable>


                    </AppView>



                    <AppView style={[styles.Modalcontainer,]}>
                        <AppView
                            style={{
                                justifyContent: 'center',
                                width: wp("80%"),
                                alignItems: 'center',

                            }}>

                            <AppView style={{}}>

                                <AppText style={[styles.defaultText, {
                                    textAlign: "center",
                                    padding: 5,
                                    fontSize: RF(18),
                                    fontFamily: ROBOTO_BOLD,
                                }]}>
                                    {Cancel_Booking}

                                </AppText>
                            </AppView>
                            <AppView style={{ alignItems: "center", width: wp("80%"), }}>

                                <AppText style={[styles.defaultText, {
                                    fontSize: RF(16),
                                    textAlign: "center",
                                    padding: 20,
                                }]}>
                                    {are_you_sure_cancel}
                                </AppText>
                            </AppView>
                            <AppView style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignSelf: 'center',
                                alignItems: 'center',
                                padding: 15,
                                width: wp("80%"),
                            }}>
                                <CustomWhiteButton
                                    name={NO}
                                    textstyle={{ color: LIGHT_BROWN, }}
                                    onPress={() => refBottomSheetStatic.current.close()}

                                />
                                <GreenhalfButton
                                    name={YES}
                                    onPress={() => {refBottomSheetStatic.current.close(),Actions.Bookings()}}
                                />

                            </AppView>

                        </AppView>
                    </AppView>


                </AppView>
            </BottomSheet>
        </Container>
    )



}