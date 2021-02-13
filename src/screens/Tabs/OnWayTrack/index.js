import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List } from '../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_SHADOW, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BORDER_GREY } from '../../../global/Colors';
import { RF } from "../../../global/Responsive";
import { Notificationlist } from '../../../components/commomList';

import {
    camera_icon,
    smallProfileIcon,
    dial
} from "@Image/Icon"
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ROBOTO_BOLD, ROBOTO_LIGHT, ROBOTO_REGULAR } from '../../../global/FontFamilies';
import { Actions } from 'react-native-router-flux';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Delete_icon } from "../../../assets/Icon"
import RBSheet from "react-native-raw-bottom-sheet";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Maplist from '../../../components/Map'
export default OnWayTrack = (props) => {
    const state = useSelector(state => state).reducer
    const {
        Notification
    } = state.language.NOTIFICATIONS
    const [inbuilstate, setState] = useState({
        // comment: ""
    })

    const refBottomSheet = useRef();
    return (
        <Container drawer_open title={"Alafiame"}
            backOnly Containerlayout={[styles.containerLayout]} header={true}>
            <AppView style={{ flex: 1, justifyContent: 'flex-end', }}>
   
                <Maplist mapstyle={{ height:Platform.OS=="ios"?hp(75):hp(90) }} onwaytrack/>
                <AppView
                    style={styles.bottomCard}>
                    <AppView style={{
                        flexDirection: 'row',
                        marginTop: hp(2),
                        justifyContent: 'space-between',
                    }}>

                        <AppView style={{ flexDirection: "row", width: wp(50), justifyContent: 'space-evenly', }}>
                            <AppImage source={smallProfileIcon}
                                resizeMode="contain"
                                style={{ height: hp(10), width: wp(20) }} />
                            <AppView style={{ marginVertical: hp(1), }}>
                                <AppText style={{ fontFamily: ROBOTO_BOLD }}>MO Alakiu</AppText>
                                <AppText style={{ fontFamily: ROBOTO_LIGHT, fontSize: RF(13) }}>04 june 2020</AppText>
                                <AppText style={{ fontFamily: ROBOTO_LIGHT, fontSize: RF(13) }}>20km</AppText>
                            </AppView>

                        </AppView>
                        <AppImage source={dial}
                            resizeMode="contain"
                            style={{
                                height: hp(4),
                                marginHorizontal: wp(6),
                                marginVertical: hp(1),
                                width: wp(5)
                            }} />
                    </AppView>
                    <AppView style={{flexDirection:'row',marginHorizontal: wp(5),marginTop:hp(1)}}>
                    <AppText style={{ fontFamily: ROBOTO_BOLD }}>Booking for- </AppText>
                    <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(13) }}>{" Waxing & Head massage"}</AppText>
                    </AppView>

                    <AppView style={{flexDirection:'row',marginHorizontal: wp(5),}}>
                    <AppText style={{ fontFamily: ROBOTO_BOLD }}>Booking Duration-</AppText>
                    <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(13) }}>{" 1.5 hrs"}</AppText>
                    </AppView>

                     <AppView style={{flexDirection:'row',
                     marginVertical: hp(2),
                     
                     marginHorizontal: wp(6),}}>
                     <AppText style={{ fontFamily: ROBOTO_REGULAR,
                         alignSelf: 'center',
                         marginLeft:'auto',
                         marginHorizontal: wp(4),
                        //  marginHorizontal: wp(),
                         fontSize: RF(13) }}>{"0:15 mins"}</AppText>
                        <Touchable 
                         onPress={()=>{}}
                        style={{
                            width: wp(35),
                            height: hp(6),
                            borderRadius: hp(6)/2,
                            borderColor: BORDER_GREY,
                            justifyContent: 'center',
                            borderWidth: 0.6,
                            backgroundColor:LIGHT_GREEN,
                        }}>
                            <AppText style={{ alignSelf: 'center', 
                            color:WHITE_ONE,
                            fontFamily: ROBOTO_REGULAR }}>Start</AppText>
                        </Touchable>
                     </AppView>
                </AppView>
            </AppView>
        </Container>
    )
}