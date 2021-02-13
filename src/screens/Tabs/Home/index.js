import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List } from '../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_SHADOW, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BORDER_GREY } from '../../../global/Colors';
import { RF ,hp,wp} from "../../../global/Responsive";
import { Notificationlist } from '../../../components/commomList';

import {
    camera_icon,
    smallProfileIcon,location_icon
} from "@Image/Icon"
const { height, width } = Dimensions.get('window');

import { ROBOTO_BOLD, ROBOTO_LIGHT, ROBOTO_REGULAR } from '../../../global/FontFamilies';
import { Actions } from 'react-native-router-flux';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Delete_icon } from "../../../assets/Icon"
import RBSheet from "react-native-raw-bottom-sheet";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Maplist from '../../../components/Map'
export default Home = (props) => {
    const state = useSelector(state => state).reducer
    const {
        Notification
    } = state.language.NOTIFICATIONS
    const [inbuilstate, setState] = useState({
        // comment: ""
    })
   const [toggleNavigation,setToggleNavigation] = useState(true)

    const refBottomSheet = useRef();
    return (
        <Container drawer_open title={"Alafiame"}
            backOnly Containerlayout={[styles.containerLayout]} header={true}>
            <AppView style={{ flex: 1, justifyContent: 'flex-end', }}>

                {toggleNavigation&&
                <AppView
                style={{
                    height: hp(14), width: wp(100),
                    marginBottom: hp(-18),
                     zIndex: 2,
                    flexDirection: 'row', justifyContent: 'space-evenly',
                }}>
                <AppView style={styles.smallCardStyle}>
                    <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(13) }}>Total completed jobs</AppText>
                    <AppText style={{ fontFamily: ROBOTO_BOLD,fontSize:RF(17) }}>25</AppText>

                </AppView>
                <AppView style={styles.smallCardStyle}>
                    <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(13) }}>job requests for today</AppText>
                    <AppText style={{ fontFamily: ROBOTO_BOLD,fontSize:RF(17)}}>03</AppText>

                </AppView>
            </AppView>
            }
                
                <Maplist  home toggleNavigation = {toggleNavigation}  mapstyle={{ height:Platform.OS=="ios"?hp(75):hp(80) }} />


                <AppView
                    style={[styles.bottomCard,{height:toggleNavigation?hp(28):hp(24)}]}>
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
                        <Touchable
                        onPress={()=>setToggleNavigation(!toggleNavigation)}
                        >
 <AppImage source={location_icon}
                            resizeMode="contain"
                            style={{
                                height: hp(4),
                                marginHorizontal: wp(6),
                                marginVertical: hp(1),
                                width: wp(5)
                            }} />
                        </Touchable>
                       
                    </AppView>
                    {toggleNavigation&&
                    <AppView>
                    <AppView style={{flexDirection:'row',marginHorizontal: wp(5),marginTop:hp(1)}}>
                    <AppText style={{ fontFamily: ROBOTO_BOLD }}>Booking for- </AppText>
                    <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(13) }}>{" Waxing & Head massage"}</AppText>
                    </AppView>
                    
                    <AppView style={{flexDirection:'row',marginHorizontal: wp(5),}}>
                    <AppText style={{ fontFamily: ROBOTO_BOLD }}>Booking Duration-</AppText>
                    <AppText style={{ fontFamily: ROBOTO_REGULAR, fontSize: RF(13) }}>{" 1.5 hrs"}</AppText>
                    </AppView>
                    </AppView>
                    }
                    
                     <AppView style={{flexDirection:'row',
                     marginVertical: hp(2),
                     justifyContent: 'space-between',marginHorizontal: wp(6),}}>
                     <Touchable 
                         onPress={()=>{}}
                        style={{
                            width: wp(35),
                            height: hp(6),
                            borderRadius: hp(6)/2,
                            borderColor: BORDER_GREY,
                            justifyContent: 'center',
                            borderWidth: 0.6
                        }}>
                            <AppText style={{ alignSelf: 'center', 
                            fontFamily: ROBOTO_REGULAR }}>Decline</AppText>
                        </Touchable>


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
                            fontFamily: ROBOTO_REGULAR }}>Accept</AppText>
                        </Touchable>
                     </AppView>
                </AppView>
            </AppView>
        </Container>
    )
}