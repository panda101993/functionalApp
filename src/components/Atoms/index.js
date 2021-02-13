import React, { useRef } from 'react'
import { Image, Text, FlatList, View, TouchableOpacity,
     Modal, ImageBackground, ActivityIndicator, 
     TouchableWithoutFeedback, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image'

import RBSheet from "react-native-raw-bottom-sheet";
import { BLACK_SHADOW, GREY_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../global/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import styles from '../../global/Style';

const {height,width} = Dimensions.get('window');

const AppbackgraoundImage = (props) => (
    <ImageBackground source={props.source} style={props.style} {...props}>{props.children}</ImageBackground>)

const AppImage = (props) => (
    <Image   source={props.source} style={props.style} {...props} />)

const AppFastImage = (props) => (
    <FastImage source={props.source} style={props.style} {...props}/>)

const BottomSheet = props => {
    // const refRBSheet = useRef();
    const { children, adr,sheetHeight,scrollable } = props;
    let containerStyle = {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: WHITE_ONE,
        height: sheetHeight ?  sheetHeight : height * .40,
        paddingTop: 25,
        paddingHorizontal: 15,
        // width:width
    }
    return (
        <RBSheet
            ref={adr}
            closeOnDragDown={false}
            closeOnPressMask={true}
            animationType={'slide'}
            customStyles={{
                container: containerStyle,
                wrapper: {backgroundColor: BLACK_SHADOW},
                draggableIcon: {backgroundColor: "#000"}
            }}
        >
            {scrollable ?
                <KeyboardAwareScrollView
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    // contentContainerStyle={[CSS.contentContainerStyle, props.contentContainerStyle]} {...props}
                    >
                    {children}
                </KeyboardAwareScrollView>
                :
             children
            }
        </RBSheet>
    );
}

const AppText = (props) => (
    <Text {...props} style={[styles.defaultText, props.style]}>{props.children}</Text>)

const AppView = (props) => (
    <View style={props.style} {...props}>{props.children}</View>)

const Touchable = (props) => (
    <TouchableOpacity  {...props} onPress={props.onPress} style={[props.style]}>{props.children}</TouchableOpacity>)

const TouchableIn = (props) => (
    <TouchableOpacity  {...props} onPressIn={props.onPressIn} style={[props.style]}>{props.children}</TouchableOpacity>)

const AppModal = (props) => (
    <Modal  {...props} visible={props.visible} animationType={props.animationType || "slide"} CancelModal={props.CancelModal} transparent={true} >{props.children}</Modal>)

const Indicator = (props) => (
    <ActivityIndicator {...props} />)

const SilentTouchable = (props) => (
    <TouchableWithoutFeedback {...props} />
)
const List = props => (
    <FlatList
        {...props}
    />
)

export {
    AppImage,
    AppText,
    AppView,
    Touchable,
    TouchableIn,
    BottomSheet,
    AppFastImage,
    AppModal,
    AppbackgraoundImage,
    Indicator,
    List,
    SilentTouchable
}