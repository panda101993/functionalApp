import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List, BottomSheet } from '../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BORDER_GREY } from '../../../global/Colors';
import { RF } from "../../../global/Responsive";
import { Requestlist } from '../../../components/commomList';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ROBOTO_BOLD } from '../../../global/FontFamilies';
import { Actions } from 'react-native-router-flux';
import { cross_icon, Flag, location_icon, Threedot_icon, block } from "../../../assets/Icon"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { CustomWhiteButton, GreenhalfButton } from '../../../components/Molecules';


export default Bookings = (props) => {

    const refBottomSheetStatic = useRef();

    const state = useSelector(state => state).reducer
    const {
        Bookingfor,
        Bookingduration,
        Block,
        Raise_Flag,
        YES,
        NO,
        Block_user,
        care_about,
        Flag_raised_successfully,
        are_you_sure_cancel,
        Bookings,
        Upcoming,
        Today,
        Past_Booking

    } = state.language.REQUESTS
    const {
        Cancel,
        Continue_start,
        Cancel_Booking
    } = state.language.COMMON_TXT

    const [inbuilstate, setState] = useState({
        Flagoption: false,
        canclemodal: false,
        upcoming: false,
        today: true,
        pastbooking: false

    })
    const [isrefresh, setrefresh] = useState(false);

    const openSmallView = (item) => {
        Requestlist.map((element) => {

            if (item.id == element.id) {

                element.status = !element.status
                setrefresh(!isrefresh)

            } else {
                element.status = false
            }


        })


    }
    const closesmallview = async (item, type) => {

        await setrefresh(!isrefresh)
        if (type == "block") {
            item.status = !item.status
            setState({ ...inbuilstate, Flagoption: false, canclemodal: false }), refBottomSheetStatic.current.open()
        }
        else if (type == "cancel") {

            setState({ ...inbuilstate, canclemodal: true }), refBottomSheetStatic.current.open()
        }
        else {
            item.status = !item.status
            setState({ ...inbuilstate, Flagoption: true, canclemodal: false }), refBottomSheetStatic.current.open()
        }
    }
    const RequestList = ({ item, index }) => {

        return (
            <Touchable onPress={() => Actions.Details({ "Page": "Booking" })} style={[styles.defaultView, {}]}>
                <AppView style={styles.imageView}>
                    <AppView style={{
                        width: width * 0.7,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',

                    }} >
                        <AppImage style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,

                        }} source={item.customerprofile} />
                        <AppView style={{ left: 10, width: width * 0.5, }}>
                            <AppText style={[styles.defaultText, { fontSize: RF(18), fontFamily: ROBOTO_BOLD, }]
                            }>
                                {item.customername}                         </AppText>
                            <AppText style={[styles.defaultText, { fontSize: RF(16), }]}>
                                {item.Date}
                            </AppText>
                            <AppText style={[styles.defaultText, { fontSize: RF(16), }]}>
                                {item.km}
                            </AppText>
                        </AppView>
                    </AppView>
                    <AppView
                        style={{
                            width: width * 0.09,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',

                        }}>
                        <Touchable>
                            <AppImage resizeMode="contain" style={{
                            }} source={location_icon} />
                        </Touchable>
                        <Touchable onPress={() => openSmallView(item)}>
                            <AppImage style={{ width: 30, height: 20, top: 2, }} resizeMode="contain" source={Threedot_icon} />
                        </Touchable>
                        {item.status == true ?
                            <AppView style={{
                                position: "absolute", width: 120, height: 60,
                                backgroundColor: WHITE_ONE, top: 30, right: 0, alignItems: "center",
                                justifyContent: 'space-evenly',
                                borderWidth: 0.5, borderColor: BORDER_GREY,
                                borderRadius: 5,
                                zIndex: 2,


                            }}>
                                <Touchable onPress={() => closesmallview(item, "block")}
                                    style={{
                                        width: 110, height: 20, alignSelf: 'center',
                                        flexDirection: 'row', alignItems: 'center',
                                        //  justifyContent: 'space-evenly',
                                    }}>
                                    <AppImage resizeMode="contain" style={{ width: 20, }} source={block} />
                                    <AppText style={{ left: 5, }} >
                                        {Block}
                                    </AppText>
                                </Touchable>
                                <Touchable onPress={() => closesmallview(item, "Flag")}
                                    style={{ width: 110, height: 20, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', }}>
                                    <AppImage resizeMode="contain" style={{ width: 20, height: 20, }} source={Flag} />
                                    <AppText style={{ left: 4 }} >
                                        {Raise_Flag}
                                    </AppText>


                                </Touchable>
                            </AppView> :
                            null}
                    </AppView>
                </AppView>
                <AppView style={{ width: width * 0.8, alignSelf: 'center', paddingVertical: 5, }}>
                    <AppView style={{ width: width * 0.8, alignSelf: 'center', flexDirection: 'row', }}>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 5, maxWidth: width * 0.3 }]
                        }>
                            {Bookingfor}

                        </AppText>
                        <AppText style={[styles.defaultText, {
                            fontSize: RF(15), paddingTop: 5, maxWidth: width * 0.5,
                        }]
                        }>

                            {item.bookingfor}
                        </AppText>
                    </AppView>
                    <AppView style={{ width: width * 0.8, alignSelf: 'center', flexDirection: 'row', }}>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), fontFamily: ROBOTO_BOLD, paddingTop: 5, maxWidth: width * 0.4 }]
                        }>
                            {Bookingduration}

                        </AppText>
                        <AppText style={[styles.defaultText, { fontSize: RF(15), paddingTop: 5, maxWidth: width * 0.4 }]
                        }>

                            {item.bookingduration}
                        </AppText>
                    </AppView>


                </AppView>
                {inbuilstate.today?
                <AppView style={styles.ButtonView}>
                <Touchable
                    onPress={() => closesmallview(item, "cancel")}
                    style={styles.declineView}>
                    <AppText style={[styles.defaultText, { fontSize: RF(15) }]} >
                        {Cancel}
                    </AppText>
                </Touchable>
                <Touchable
                    style={styles.confirmView}>
                    <AppText style={[styles.defaultText, { fontSize: RF(15) }]}>
                        {Continue_start}
                    </AppText>
                </Touchable>

            </AppView>
            :inbuilstate.upcoming?
            <AppView style={[styles.ButtonView,{ 
                width: width * 0.85,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                
                }]}>
                <Touchable
                    onPress={() => closesmallview(item, "cancel")}
                    style={[styles.declineView,{alignSelf: 'flex-end',}]}>
                    <AppText style={[styles.defaultText, { fontSize: RF(15) }]} >
                        {Cancel}
                    </AppText>
                </Touchable>
                {/* <Touchable
                    style={styles.confirmView}>
                    <AppText style={[styles.defaultText, { fontSize: RF(15) }]}>
                        {Continue_start}
                    </AppText>
                </Touchable> */}

            </AppView>
            :null
                }
                
            </Touchable>

        )
    }





    return (
        <Container drawer_open title={Bookings} backOnly Containerlayout={[styles.containerLayout]} header={true} >
            <AppView style={{
                width,
                flexDirection: 'row',
                height: height * 0.08,
                backgroundColor: LIGHT_GREEN,
            }}>
                <Touchable onPress={() => setState({ ...inbuilstate, pastbooking: true, upcoming: false, today: false, })}
                    style={[styles.toptabview, { backgroundColor: inbuilstate.pastbooking ? WHITE_ONE : LIGHT_GREEN, }]} >
                    <AppText style={styles.defaultText, { color: inbuilstate.pastbooking ? LIGHT_GREEN : WHITE_ONE }}>
                        {Past_Booking}
                    </AppText>
                </Touchable>
                <Touchable onPress={() => setState({ ...inbuilstate, pastbooking: false, upcoming: false, today: true, })}
                    style={[styles.toptabview, { backgroundColor: inbuilstate.today ? WHITE_ONE : LIGHT_GREEN, }]}>
                    <AppText style={styles.defaultText, { color: inbuilstate.today ? LIGHT_GREEN : WHITE_ONE }}>
                        {Today}
                    </AppText>
                </Touchable>
                <Touchable onPress={() => setState({ ...inbuilstate, pastbooking: false, upcoming: true, today: false, })}
                    style={[styles.toptabview, { backgroundColor: inbuilstate.upcoming ? WHITE_ONE : LIGHT_GREEN, }]}>
                    <AppText style={styles.defaultText, { color: inbuilstate.upcoming ? LIGHT_GREEN : WHITE_ONE }}>

                        {Upcoming}

                    </AppText>
                </Touchable>
            </AppView>
            {Requestlist.length == 0 ?
                <AppView style={[styles.containerLayout, { alignItems: 'center', justifyContent: 'center', }]}>
                    <AppText style={[styles.defaultText, { fontFamily: ROBOTO_BOLD, fontSize: RF(17), }]}>
                        No records found !
</AppText>

                </AppView>
                :


                <List
                    showsVerticalScrollIndicator={false}
                    data={Requestlist}
                    renderItem={({ item, index }) => RequestList({ item, index }

                    )}
                    keyExtractor={item => item.id}
                    extraData={isrefresh}

                />




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
                        {inbuilstate.Flagoption ?
                            null
                            :
                            <Touchable onPress={() => refBottomSheetStatic.current.close()}>
                                <AppImage source={cross_icon} resizeMode="contain"
                                    style={{ width: wp(3), height: hp(2), }} />
                            </Touchable>
                        }

                    </AppView>
                    {inbuilstate.Flagoption ?

                        <AppView style={[styles.Modalcontainer,]}>
                            <AppView
                                style={{
                                    justifyContent: 'center',
                                    width: wp("80%"),
                                    alignItems: 'center',

                                }}>

                                <AppView style={{}}>
                                    <AppImage resizeMode="contain" source={Flag} />

                                </AppView>
                                <AppView style={{ alignItems: "center", width: wp("80%"), }}>

                                    <AppText style={[styles.defaultText, {
                                        fontSize: RF(16),
                                        textAlign: "center",
                                        padding: 20,
                                    }]}>
                                        {Flag_raised_successfully}
                                    </AppText>
                                </AppView>


                            </AppView>
                        </AppView>
                        :
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
                                        {inbuilstate.canclemodal ? Cancel_Booking : care_about}

                                    </AppText>
                                </AppView>
                                <AppView style={{ alignItems: "center", width: wp("80%"), }}>

                                    <AppText style={[styles.defaultText, {
                                        fontSize: RF(16),
                                        textAlign: "center",
                                        padding: 20,
                                    }]}>
                                        {inbuilstate.canclemodal ? are_you_sure_cancel : Block_user}

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
                                        onPress={() => refBottomSheetStatic.current.close()}
                                    />

                                </AppView>

                            </AppView>
                        </AppView>
                    }


                </AppView>
            </BottomSheet>
        </Container>
    )



}