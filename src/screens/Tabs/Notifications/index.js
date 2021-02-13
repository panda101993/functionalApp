import React, { useState, useEffect } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List } from '../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BORDER_GREY } from '../../../global/Colors';
import { RF } from "../../../global/Responsive";
import { Notificationlist } from '../../../components/commomList';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ROBOTO_BOLD } from '../../../global/FontFamilies';
import { Actions } from 'react-native-router-flux';
import { SwipeListView } from 'react-native-swipe-list-view';
import {Delete_icon} from "../../../assets/Icon"


export default Notifications = (props) => {


    const state = useSelector(state => state).reducer
    const {
        Notification

    } = state.language.NOTIFICATIONS
    const [inbuilstate, setState] = useState({
        // comment: ""

    })
    const [isrefresh, setrefresh] = useState(false);

    const MessageList = ({ item, index }) => {
     
        return (
            <Touchable style={[styles.defaultView, {  }]}>
                <AppView style={{
                    width: width * 0.25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }} >
                    <AppImage style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,

                    }} source={item.customerprofile} />
                </AppView>
                <AppView style={{

                    width: width * 0.75,
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
                    <AppView style={{
                        width: width * 0.75,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}>
                        <AppText style={[styles.defaultText, { fontSize: RF(17), }]
                        }>
                            {item.customername}
                        </AppText>
                   
                    </AppView>
                    <AppView style={{
                        width: width * 0.75, alignItems: 'flex-end', justifyContent: 'flex-end',alignSelf: 'flex-end',
                    }}>
                        <AppText style={[styles.defaultText, {  fontSize: RF(12), }]}>
                            {/* {item.Date} */}
                        </AppText>
                        <AppText style={[styles.defaultText, {  fontSize: RF(12), }]}>
                            {item.Date}
                        </AppText>
                    </AppView>
                </AppView>
            </Touchable>

        )
    }





    return (
        <Container drawer_open title={Notification} backOnly Containerlayout={[styles.containerLayout]} header={true} >
            {Notificationlist.length==0 ?
                <AppView style={[styles.containerLayout,{alignItems: 'center',justifyContent: 'center',}]}>
                    <AppText style={[styles.defaultText,{ fontFamily: ROBOTO_BOLD, fontSize: RF(17),}]}>
                        No records found !
</AppText>

                </AppView>
                :
        
                <SwipeListView
                showsVerticalScrollIndicator={false}
                data={Notificationlist}
                    renderItem={({ item, index }) => MessageList({ item, index }

                            )}
                keyExtractor={item => item.id}
                renderHiddenItem={(data, rowMap) => (
                    <AppView style={styles.rowBack}>
                        <Touchable
                            style={[
                                styles.backRightBtn,
                                styles.backRightBtnRight,
                            ]}
                            onPress={() =>
                                // Delete_IdSet(data.item._id)
alert("Delete Successfully")
                            }
                        >
                            <AppImage source={Delete_icon} />
                        </Touchable>
                    </AppView>

                )}
                rightOpenValue={-85}
            />
            }

        </Container>
    )



}