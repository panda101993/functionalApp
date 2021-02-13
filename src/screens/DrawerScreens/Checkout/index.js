import React, { useState, useEffect } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, AppbackgraoundImage } from '../../../components/Atoms';
import styles from './style';

import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BLUE_LIGHT } from '../../../global/Colors';
import { App_store, Checkout_banner, play_store } from '../../../assets/Icon';
import { RF } from '../../../global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../../global/FontFamilies';
// import {  } from '../../Assets/Icon';

// import { RF } from "@Global/Responsive";
// import { RF } from "../../global/Responsive";
// import { Actions } from 'react-native-router-flux';
// import { SANS_PRO_REGULAR } from '../../global/FontFamilies';
// import { Skip_button } from '../../assets/Icon';
// import { BUTTON_SHORT } from '../../components/Molecules';
const { height, width } = Dimensions.get('window');

export default Checkout = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state).reducer
    const {
        Checkout_status,
        Checkout_practitioner,
        Customer

    } = state.language.CHECKOUT




    return (
        <Container backOnly title ={Customer}Containerlayout={[styles.containerLayout]} header={true} >
            <AppImage source={Checkout_banner} />


            <AppView style={{
                width: width * 0.8,
                alignSelf: 'center',
                alignItems: 'flex-start',
                justifyContent: 'center',
                
                marginTop: width * 0.08,

            }}>
                <AppText style={[styles.defaultText, { fontSize: RF(20), fontFamily: ROBOTO_REGULAR, }]}>
                    {Checkout_practitioner}
                </AppText>
                <AppText style={[styles.defaultText, { fontSize: RF(12), fontFamily: ROBOTO_REGULAR, marginTop: 10, }]}>
                    {Checkout_status}
                </AppText>
            </AppView>
            <AppView style={[styles.defaultView, { flexDirection: 'column', marginTop: width * 0.08, justifyContent: 'space-between', }]}>
                <AppView style={styles.defaultView}>
                    <AppView style={{width:width*0.15,}}>
                          <AppImage source={App_store} />
                    </AppView>
                  
                    <AppText style={[styles.defaultText,{color:BLUE_LIGHT} ]}>
                        https://i.Alafiame.com
                    </AppText>
                </AppView>
                <AppView style={[styles.defaultView,{marginTop: 20,}]}>
                    <AppView style={{width:width*0.15,}}>
                    <AppImage source={play_store} />
                    </AppView>
                    <AppText style={[styles.defaultText,{color:BLUE_LIGHT} ]}>
                        https://i.Alafiame.com
                    </AppText>
                </AppView>
            </AppView>

        </Container>
    )
}