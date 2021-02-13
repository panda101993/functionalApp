import React, { useRef, useState, useEffect } from 'react';
import { Dimensions, Platform, FlatList,ScrollView } from "react-native"
import {
    AppView, Touchable, AppText, AppImage, AppModal,
    TouchableIn, Indicator, SilentTouchable, List,
    AppWebView, BottomSheet
} from "../Atoms/index";
import {
    GREY_ONE,
    GREY_TWO, LIGHT_GREEN, WHITE_ONE
} from '../../global/Colors';
import { RF } from '../../global/Responsive';
import { SubmitButton } from '@Component/Molecules';
import styles from './style'
import { color } from 'react-native-reanimated';
import { cross_icon } from "@Image/Icon"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window')


//******************  Sign Up Bottom Sheet  *************************************//
const SignUpBottomSheet = props => {
    const { adr, continueHandler, data, onPress } = props
    const [selected, setSelected] = useState(-1)

    return (
        <BottomSheet adr={adr} sheetHeight={hp(52)} scrollable={true}>
            <AppView style={styles.signUpContainerLayout}>
                <AppText style={styles.signUpHeaderTxt}>Select your city</AppText>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => <Touchable
                        onPress={() => {
                            onPress(item)
                            setSelected(index === selected ? -1 : index)
                        }}
                        style={styles.signUpListItemContainer}>
                        <AppText style={styles.signUpText}>{item}</AppText>
                        {index === selected ?
                            <AppView style={[styles.signUpListSelectedRadio]} />
                            :
                            <AppView style={[styles.signUpListUnselectedRadio]} />
                        }
                    </Touchable>
                    }
                />
                <AppView style={{ marginVertical: 15 }}>

                    <SubmitButton
                        name='Continue'
                        // enableImgLeft
                        // enableImgRight
                        //source_one={mail_img}
                        // source_two={}
                        btnContainer={{ marginVertical: hp(2) }}
                        onPress={props.submitonpress}
                    />
                </AppView>
            </AppView>
        </BottomSheet>
    )
}


//******************  Static Bottom Sheet  *************************************//
const StaticBottomSheet = props => {
    const { adr, title, body, pressCross ,sheetHeightProp,bodyStyle,bodyContainer} = props
    const [selected, setSelected] = useState(-1)

    return (
        <BottomSheet adr={adr} sheetHeight={sheetHeightProp?sheetHeightProp:hp(60)}>
            <AppView style={styles.staticContainerLayout}>
                <AppView style={styles.staticHeaderWrapper}>
                    <AppView />
                    <AppText style={[styles.staticHeaderTxt]}>{title}</AppText>
                    <Touchable onPress={pressCross}>
                    <AppImage source={cross_icon} resizeMode="contain" 
                    style={{ width: wp(3), height: hp(2), }} />
                    </Touchable>
                </AppView>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                style={[{width: wp(92)},bodyContainer]}>
                <AppText style={[styles.staticBodyTxt,bodyStyle]}>{body}</AppText>
                </ScrollView>
            </AppView>
        </BottomSheet>
    )
}


export {
    SignUpBottomSheet,
    StaticBottomSheet
}