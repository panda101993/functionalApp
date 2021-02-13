import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List, BottomSheet } from '../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BORDER_GREY, GREY_ONE } from '../../../global/Colors';
import { RF } from "../../../global/Responsive";
import { Requestlist } from '../../../components/commomList';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ROBOTO_BOLD } from '../../../global/FontFamilies';
import { Actions } from 'react-native-router-flux';
import { cross_icon, Flag, location_icon, Threedot_icon, block, job, cash } from "../../../assets/Icon"
import CalendarStrip from 'react-native-calendar-strip';
import { CustomWhiteButton, GreenhalfButton } from '../../../components/Molecules';


export default Earnings = (props) => {

    const refBottomSheetStatic = useRef();

    const state = useSelector(state => state).reducer
    const {
        Bookingfor,
        Bookingduration,

        YES,
        NO,
        sure_Delete,
        Earning

    } = state.language.REQUESTS
    const {
        Decline,
        Delete
    } = state.language.COMMON_TXT
    const {
        Earnings
    } = state.language.DRAWER


    const [inbuilstate, setState] = useState({
        Flagoption: false,


    })
    const [isrefresh, setrefresh] = useState(false);

    
    const RequestList = ({ item, index }) => {

        return (
            <AppView style={[styles.defaultView, {}]}>
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

                    </AppView>
                </AppView>
                <AppView style={{ width: width * 0.8, alignSelf: 'center', paddingVertical: 5, }}>
                    <AppView style={{ width: width * 0.8, alignSelf: 'center', flexDirection: 'row', }}>
                        <AppText style={[styles.defaultText, { paddingTop: 5, maxWidth: width * 0.3 }]
                        }>
                            {Bookingfor}

                        </AppText>
                        <AppText style={[styles.defaultText, {
                            paddingTop: 5, maxWidth: width * 0.5,
                        }]
                        }>

                            {item.bookingfor}
                        </AppText>
                    </AppView>
                    <AppView style={{ width: width * 0.8, alignSelf: 'center', flexDirection: 'row', }}>
                        <AppText style={[styles.defaultText, { paddingTop: 5, maxWidth: width * 0.4 }]
                        }>
                            {Bookingduration}

                        </AppText>
                        <AppText style={[styles.defaultText, { paddingTop: 5, maxWidth: width * 0.4 }]
                        }>

                            {item.bookingduration}
                        </AppText>
                    </AppView>


                </AppView>
                <AppView style={styles.ButtonView}>
                    <AppView

                        style={styles.declineView}>
                        <AppText style={[styles.defaultText, { fontSize: RF(18), fontFamily: ROBOTO_BOLD, }]
                        } >
                            {Earning}$20
                        </AppText>
                    </AppView>
                    <Touchable
                        onPress={() => refBottomSheetStatic.current.open()}
                        style={styles.confirmView}>
                        <AppText style={[styles.defaultText, { fontSize: RF(15) }]}>
                            {Delete}
                        </AppText>
                    </Touchable>

                </AppView>
            </AppView>

        )
    }





    return (
        <Container title={Earnings} backOnly Containerlayout={[styles.containerLayout]} header={true} >
              <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'background', duration: 200, highlightColor:LIGHT_GREEN,}}
                    style={{height: 110, paddingTop: 10, paddingBottom: 10}}
                    calendarHeaderStyle={{color: LIGHT_BROWN,marginBottom:10}}
                    calendarColor={"rgb(235,235,235)"}
                    dateNumberStyle={{color: LIGHT_BROWN}}
                    dateNameStyle={{color: LIGHT_BROWN}}
                    highlightDateNumberStyle={{color: WHITE_ONE}}
                    highlightDateNameStyle={{color: WHITE_ONE}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    // datesWhitelist={datesWhitelist}
                    // datesBlacklist={datesBlacklist}
                    // iconLeft={require('./img/left-arrow.png')}
                    // iconRight={require('./img/right-arrow.png')}
                    iconContainer={{flex: 0.1}}
                />
            <AppView style={styles.cardView}>
                <AppView style={styles.shadowView}
                >
                    <AppImage resizeMode="contain" style={{width:50,height:30}} source={job} />
                    <AppText style={[styles.defaultText, { fontFamily: ROBOTO_BOLD, fontSize: RF(17),top:10  }]}>
                        50 Jobs
</AppText>
                </AppView>
                <AppView style={styles.shadowView}>
                    <AppImage resizeMode="contain" style={{width:50,height:30}} source={cash} />
                    <AppText style={[styles.defaultText, { fontFamily: ROBOTO_BOLD, fontSize: RF(17),top:10 }]}>
                        $500
                </AppText>
                </AppView>
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
                                    {Delete}

                                </AppText>
                            </AppView>
                            <AppView style={{ alignItems: "center", width: wp("80%"), }}>

                                <AppText style={[styles.defaultText, {
                                    fontSize: RF(16),
                                    textAlign: "center",
                                    padding: 20,
                                }]}>
                                    {sure_Delete}
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



                </AppView>
            </BottomSheet>
        </Container>
    )



}