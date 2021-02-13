import React, { useState, useEffect } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List } from '../../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BORDER_GREY } from '../../../../global/Colors';
import { RF } from "../../../../global/Responsive";
import { MessagaeList } from '../../../../components/commomList';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ROBOTO_BOLD } from '../../../../global/FontFamilies';
import { Actions } from 'react-native-router-flux';



export default MessageInbox = (props) => {


    const state = useSelector(state => state).reducer
    const {
        messages

    } = state.language.MESSAGES
    const [inbuilstate, setState] = useState({
        // comment: ""

    })
    const [isrefresh, setrefresh] = useState(false);

    const MessageList = ({ item, index }) => {
     
        return (
            <Touchable onPress={()=>Actions.Chatscreen({"NAME":item.customername})}style={[styles.defaultView, { borderTopColor: index == 0 ? WHITE_ONE : BORDER_GREY }]}>
                <AppView style={{
                    // backgroundColor: "cyan",
                    width: width * 0.25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: height * 0.12,
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
                    height: height * 0.12,
                    flexDirection: 'row',
                }} >
                    <AppView style={{
                        height: height * 0.12,
                        width: width * 0.36,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        // backgroundColor: "yellow",
                    }}>
                        <AppText style={[styles.defaultText, { fontFamily: ROBOTO_BOLD, fontSize: RF(17), }]
                        }>
                            {item.customername}
                        </AppText>
                        <AppText style={[styles.defaultText, { marginTop: 4, }]}>
                            {item.lastchat}
                        </AppText>
                    </AppView>
                    <AppView style={{
                        width: width * 0.38, height: height * 0.12, alignItems: 'center', justifyContent: 'flex-end',

                    }}>
                        <AppText style={[styles.defaultText, { marginBottom: 10, fontSize: RF(12), }]}>
                            {item.Date}
                        </AppText>
                    </AppView>
                </AppView>
            </Touchable>

        )
    }





    return (
        <Container backOnly title={messages}  Containerlayout={[styles.containerLayout]} header={true} >
            {MessagaeList.length==0 ?
                <AppView style={[styles.containerLayout,{alignItems: 'center',justifyContent: 'center',}]}>
                    <AppText style={[styles.defaultText,{ fontFamily: ROBOTO_BOLD, fontSize: RF(17),}]}>
                        No messages !
</AppText>

                </AppView>
                :
                <List
                    showsVerticalScrollIndicator={false}
                    data={MessagaeList}
                    renderItem={({ item, index }) => MessageList({ item, index }

                    )}
                    keyExtractor={item => item.id}
                    extraData={isrefresh}

                />
            }

        </Container>
    )



}