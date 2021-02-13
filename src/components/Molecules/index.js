import React, { useRef, useState, useEffect } from 'react';
import { FlatList, Platform,TextInput,Dimensions} from "react-native"
import { AppView, Touchable, AppText, AppImage, AppModal, TouchableIn, Indicator, SilentTouchable, List, AppWebView, AppbackgraoundImage } from "../Atoms/index";
import CSS from "../../global/Style"
import { GREY_TWO, LIGHT_GREEN,ERROR_RED, WHITE_ONE,LIGHT_BROWN, GREY_ONE, BORDER_GREY } from '../../global/Colors';
import { Actions } from 'react-native-router-flux';
import { Greenhalf_button,Whitehalf_button,shadow_button, white_back_arrow ,continue_img, Drawer_image} from '../../assets/Icon';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RF } from '../../global/Responsive';
import { ROBOTO_BOLD } from '../../global/FontFamilies';
const { height, width } = Dimensions.get('window');
import { useSelector, useDispatch } from 'react-redux';


const Header = (props) => {
 
    if (props.backOnly){
        return (
            <AppView style={[CSS.header, props.style]}>
                <Touchable style={[CSS.sideContainer,]}  onPress={()=>props.drawer_open?Actions.drawerOpen():Actions.pop()}>
                   <AppImage style={[CSS.back]} source={props.drawer_open ? Drawer_image :white_back_arrow} />
                </Touchable>
                <AppView style={CSS.headerTitleContainer}>
                    <AppText style={CSS.headerTitle}>{props.title}</AppText>
                </AppView>

                <Touchable style={CSS.sideContainer}>
                </Touchable>

                <Touchable style={[CSS.sideContainer,]}>
                </Touchable>
            </AppView>
        )
    }else
    {
        return (
            <AppView style={[CSS.header, props.style]}>
                <Touchable onPress={() => props.drawer_open ? Actions.drawerOpen() : Actions.pop()} style={CSS.sideContainer}>
                <AppImage style={[CSS.back]} source={props.drawer_open ? Drawer_image :white_back_arrow} />
                </Touchable>
                <AppView style={CSS.headerTitleContainer}>
                <AppText style={CSS.headerTitle}>{props.title}</AppText>
                </AppView>
                <AppView style={CSS.sideContainer}>

                    <Touchable onPress={props.right_firstclik}  >
                        <AppImage style={{ right: 0 }} source={props.right_first} />
                    </Touchable>
                    {/* <Touchable onPress={props.right_secondclik} >
                        <AppImage source={props.right_second} />
                    </Touchable> */}
                </AppView>
    
            </AppView>
        )
    }
}


//SHORT BUTTON
const ShortButton = props => {
    const { btnLayout, shortBtnTxt, name } = props;
    return (
        <Touchable style={[CSS.shortBtnLayout, btnLayout]} {...props}>
            <AppText style={[CSS.shortBtnTxt, shortBtnTxt]}>{name}</AppText>
        </Touchable>
    )
}

//NORMAL BUTTON

const SubmitButton = props => {
    const { btnContainer,btnLayout, enableImgLeft, enableImgRight,
        source_one, source_two, shortBtnTxt, leftImgStyle,btnTxt,
        rightImgStyle,
        nameLayout, name } = props;
        return (
            <Touchable style={[btnContainer]}   onPress={props.onPress}>
                <AppbackgraoundImage 
                    resizeMode="contain"
                    style={[CSS.btnLayout, btnLayout]}
                     source={shadow_button}>
           
           {enableImgLeft ?
               <AppImage 
               style={[CSS.leftImg, leftImgStyle]}
               source={source_one} resizeMode="contain" />:
               <AppView style={[CSS.leftImg, leftImgStyle]} />
           }
                 
              
                <AppView style={[CSS.btnNameView,nameLayout]}>
                    <AppText style={[CSS.btnTxt,btnTxt]}>{name}</AppText>
                </AppView>


                {enableImgRight ?
                  <AppImage 
                   style={[CSS.rightImg,rightImgStyle]}
                   source={source_two ? source_two : continue_img} resizeMode="contain"/>:
                   <AppView  style={[CSS.rightImg,rightImgStyle]} />

                }
                   
               

                </AppbackgraoundImage>
            </Touchable>
        )
    }

    const Input = (props) => {
        const { Inputcontainer,errortext } = props;
        return (
            <AppView style={[CSS.Inputcontainer, Inputcontainer]}>
                <AppView
                    style={[CSS.inputLayout,{
                     borderColor : errortext == null||errortext =="" ? GREY_TWO : "red"},props.style]}>
                    {/* <AppView style={CSS.verticalBarInput}  /> */}
                    <TextInput
                        {...props}
                        
                        placeholderTextColor={BORDER_GREY}
                        style={[CSS.textInput, props.textInput]}
                        placeholder={props.placeholder}
                        secureTextEntry={props.secure || false}
                        editable={props.editable}
                        // autoCapitalize='characters'
                    />
                </AppView>
                {errortext == null||errortext =="" ?
                    null
                    :
                    <AppView style={[CSS.ErrorLayout,{
                     backgroundColor:errortext == null ? WHITE_ONE:"red"
                    },props.Errorstyle]}>
                        <AppText style={CSS.Errortextstyle}>
                            {errortext}
                        </AppText>
                    </AppView>
                } 
            </AppView>
    
        )
    }



// const SearchCustom = (props) => {
//     return (
//         <AppView
//             style={[style.Searchlayout, props.Searchlayout]}>
//             <AppImage style={{ marginLeft: 8, }} source={Search} />
//             <TextInput
//                 style={[style.SearchInputlayout, props.SearchInputlayout]}
//                 {...props}
//             >
//             </TextInput>
//         </AppView>
//     )
// }
const CustomWhiteButton = (props) => {
    return (
        <Touchable
            onPress={props.onPress}>
                <AppbackgraoundImage 
                resizeMode="contain"
                 style={[CSS.HalfButtonLayout, props.style]}
                 source={Whitehalf_button
                 }>
                <AppText style={[CSS.BtnTxt,props.textstyle]}>{props.name}</AppText>
             </AppbackgraoundImage>
        </Touchable>
    )
}

const GreenhalfButton = (props) => {
    return (
        <Touchable
            onPress={props.onPress}
           
            >
                <AppbackgraoundImage 
                resizeMode="contain"
                 style={[CSS.HalfButtonLayout, props.style]}
                 source={Greenhalf_button
                 }>
                <AppText style={[CSS.BtnTxt,props.textstyle]}>{props.name}</AppText>
             </AppbackgraoundImage>
          
        </Touchable>
    )
}
const PageLoader = props => {
    const { LoaderView, visible } = props;
    if (visible) {
        return (
            <AppModal visible={visible} {...props}>
                <AppView style={[{ justifyContent: 'center', flex: 1 }, LoaderView]}>
                    <Indicator size="large" color="red" {...props} />
                </AppView>
            </AppModal>
        )
    } else {
        return null;
    }
}
const Modal_for_YES_NO = (props) => (
    <AppModal
        animationType='fade'
        visible={props.visible}
        // visible={true}
    >
        <AppView style={[CSS.mainContainer]} >
            <AppView style={[CSS.Modalcontainer,]}>
                <AppView
                    style={{
                        justifyContent: 'center',
                        width: wp("80%"),
                        alignItems: 'center',
                       
                    }}>

                    <AppView style={{  }}>

                        <AppText style={[CSS.defaultText, {
                            textAlign: "center",
                            padding: 5,
                            fontSize: RF(18),
                            fontFamily: ROBOTO_BOLD,
                        }]}>
                            {props.Headertext}
                       
                    </AppText>
                    </AppView>
                    <AppView style={{ alignItems: "center", width: wp("80%"), }}>

                        <AppText style={[CSS.defaultText, {
                            fontSize: RF(16),
                            textAlign: "center",
                            padding: 20,
                        }]}>
                           {props.Bodytext}
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
                            name={props.NOText}
                            textstyle={{ color: LIGHT_BROWN, }}
                            onPress={props.NOonpress}

                        />
                        <GreenhalfButton
                            name={props.YESText}
                            onPress={props.YESonpress}
                        />

                    </AppView>

                </AppView>
            </AppView>
        </AppView>
    </AppModal>
)

// const Drop_Down_Modal = (props) => (
//     <AppModal
//         animationType='fade'
//         visible={props.visible}>
//         <TouchableIn onPressIn={() => props.onPressClose()} style={style.mainContainer} >
//             <AppView style={[style.Modalcontainer,props.Modalcontainer]}>
//                 <FlatList
//                     data={props.data}
//                     onRequestClose={() => console.log("modal has been closeds")}
//                     showsVerticalScrollIndicator={false}
//                     renderItem={({ item, index }) =>
//                         <Touchable
//                             onPress={() => props.onPress(item)}
//                             style={{
//                                 width: wp("70%"),
//                                 alignItems: 'center',
//                                 height: hp("6%"),
//                                 flexDirection: "row",
//                                 justifyContent: "space-between"
//                             }}
//                         >
//                             <AppText style={{ color: DarkGrey}}>
//                                 {item.title}
//                             </AppText>
//                         </Touchable>
//                     }
//                 />

//             </AppView>
//         </TouchableIn>
//     </AppModal>
// )

// const DropdownSelector = (props) => {
//     const { dropdownMainContainer, dropdownTxtContainer,
//         dropdownSelectedTxt, selectedText, dropdownImgView, toggleArrow } = props;
//     return (
//         <SilentTouchable {...props}>
//             <AppView style={[style.dropdownMainContainer, dropdownMainContainer]} {...props}>
//                 <AppView style={[style.dropdownTxtContainer, dropdownTxtContainer]}>
//                     <AppText style={[style.dropdownSelectedTxt, dropdownSelectedTxt]}>{selectedText}</AppText>
//                 </AppView>
//                 <AppView style={[style.dropdownImgView, dropdownImgView]}>
//                     <AppImage source={drop_down} style={[{ transform: [{ rotate: toggleArrow ? "180deg" : '0deg' },] }]} resizeMode='contain' />
const Card = props => {
    const {cardContainer, children} = props
    return (
        <AppView style={[CSS.cardMainLayout]} {...props}>
            <AppView style={[CSS.cardContainer,cardContainer]}>
                {children}
            </AppView>
        </AppView>
    )
}
// const PageLoader = props => {
//     const { LoaderView, visible } = props;
//     if (visible) {
//         return (
//             <AppModal visible={visible} {...props}>
//                 <AppView style={[{ justifyContent: 'center', flex: 1 }, LoaderView]}>
//                     <Indicator size="large" color="red" {...props} />
//                 </AppView>
//             </AppView>
//         </SilentTouchable>
//     );
// }

// const DropdownListView =  (props) => {
//     const { listBoxStyle, ListOptions, renderOptions } = props;

//     const defaultStyle = {
//         position: "absolute",
//         // top: Platform.OS == "android" ? hp(13) : y + hp(7),
//         // width: width,
//         maxHeight: hp(25),
//         minHeight: wp(4),
//         // backgroundColor: DarkGrey,
//         backgroundColor: WHITE_TWO,
//     }
//     return (
//         <AppView style={[defaultStyle, style.listBox, listBoxStyle]}>
//             <List
//                 data={ListOptions}
//                 renderItem={renderOptions}
//                 {...props}
//             />
//         </AppView>
//     );
// }

const EmailOTP = (props) => {
    const state = useSelector(state => state).reducer;
    const { Inputcontainer,error_text, adr_one,adr_two,adr_three,adr_four,
    } = props;
   
   
    return (
        <AppView style={[CSS.Inputcontainer, Inputcontainer]}>
            <AppView style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                // borderWidth:2
            }}>
                <OTPInput
                adr={adr_one}
                OTPInputLayout={{ borderBottomColor:error_text == null ? LIGHT_GREEN : ERROR_RED }}
                onChangeText={props.onChangeText_one} 
                />
                <OTPInput
                adr={adr_two}
                OTPInputLayout={{ borderBottomColor:error_text == null ? LIGHT_GREEN : ERROR_RED }}
                onChangeText={props.onChangeText_two} 
                />
                <OTPInput
                adr={adr_three}
                OTPInputLayout={{ borderBottomColor:error_text == null ? LIGHT_GREEN : ERROR_RED }}
                onChangeText={props.onChangeText_three} 
                />
                <OTPInput
                adr={adr_four}
                OTPInputLayout={{ borderBottomColor:error_text == null ? LIGHT_GREEN : ERROR_RED  }}
                onChangeText={props.onChangeText_four} 
                />
            </AppView>
            {error_text == null ?
                null
                :
                <AppView style={[CSS.OTPErrorLayout,{backgroundColor:error_text == null ? WHITE_ONE:"red"
                },props.Errorstyle]}>
                    <AppText style={CSS.Errortextstyle}>
                        {error_text}
                    </AppText>
                </AppView>
            } 
        </AppView>

    )
}

const OTPInput = (props) => {
    return (
        <AppView
            style={[CSS.OTPInputLayout, props.OTPInputLayout]}>
            <TextInput
                style={[CSS.OTPtextInput]}
                maxLength={1}
                keyboardType='numeric'
                placeholder={props.placeholder}
                secureTextEntry={props.secure || false}
                ref={props.adr}
                {...props}
            />
        </AppView>
    )
}

export {
    Header,
    ShortButton,
    SubmitButton,
    Modal_for_YES_NO,
    PageLoader,
    CustomWhiteButton,
    GreenhalfButton,
    Input,
    EmailOTP,
    Card,
    // PageLoader,
}