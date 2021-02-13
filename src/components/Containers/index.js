import React, { useEffect } from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { AppView, AppbackgraoundImage, AppModal, } from "../Atoms/index";
import CSS from "../../global/Style"
import { Header, PageLoader } from '../Molecules'
import { containImage } from "@Image/Icon"
import { Dimensions } from 'react-native';
const {height ,width} =Dimensions.get('window')

const Container = (props) => {
    return (
        <AppbackgraoundImage source={containImage}
            // height={height}
            // width={width}
            style={[CSS.BackgroundImageStyle, {
                // aspectRatio: 701 / 1890,
                // width: '95%',
                // height: undefined,
            }]}
            resizeMode='stretch'
        >
            {/* <PageLoader animationType="none" visible={props.loading} /> */}
            {
                props.scrollable ?
                    <AppView
                        style={[CSS.defaultContainer, props.Containerlayout]}>
                        {props.header !== false && <Header {...props} />}
                        {props.custom}
                        <KeyboardAwareScrollView
                            enableOnAndroid
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={[CSS.contentContainerStyle, props.contentContainerStyle]}
                             >
                            {props.children}
                        </KeyboardAwareScrollView>
                    </AppView>
                    :
                    <AppView style={[CSS.defaultContainer, props.Containerlayout]}>
                        {props.header !== false && <Header {...props} />}
                        {props.custom}
                        {props.children}
                    </AppView>
            }
        </AppbackgraoundImage>
    )
}
export {
    Container
}