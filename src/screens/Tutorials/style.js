
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, LIGHT_GREEN, WHITE_ONE } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR,Perpetua_Bold,Perpetua } from '../../global/FontFamilies';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
        // backgroundColor: "green",
        // width,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    sliderLayout: {
        width,
        // justifyContent:"center",
        // width: "90%",
        height: height * 0.8,
        alignSelf: "center",
    },
    itemImg: {
        aspectRatio: 749 / 575,
        width: '73%',
        height: undefined,
        alignSelf: 'center',
    },
    itemHeadingView: {
        // backgroundColor: 'cyan',
        width: width * 0.8,
        marginVertical: width * 0.06,
        // flex:1
        // justifyContent: 'center',
        alignSelf: 'center',
    },
    itemHeadingTxt: {
        color: LIGHT_BROWN,
        fontSize: RF(30),
        textAlign: 'center',
        // fontWeight:'bold'
        fontFamily:ROBOTO_BOLD
    },
    itemDiscription: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 5,
    },
    itemDescriptionTxt: {
        fontSize: RF(16),
        color: LIGHT_BROWN,
        textAlign: 'center',
        fontFamily:  ROBOTO_REGULAR
    },
    logoImgView: {
        // backgroundColor: 'blue',
        alignSelf: 'center',
        marginTop: width * 0.1,
        marginVertical: width * 0.05
    },
    logoImg: {
        aspectRatio: 283 / 282,
        width: '22%',
        height: undefined,
    },
    sliderLayoutContainer: {
        // alignItems
        // backgroundColor: "red",
        // justifyContent: 'center',
        height: width * 1.28,
        width: width * 0.92,
        alignSelf:"center"
    },
    btnView: {
        alignSelf:"center",
        // backgroundColor:'grey',
        width: width * 0.90, 
        alignItems: 'flex-end',
        // justifyContent:"flex-end"

    },

    shortBtnLayout: {
        alignSelf:"flex-end",
        // backgroundColor: LIGHT_GREEN,
        width: width * 0.3,
        // borderRadius: width * 0.2,
        height: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shortBtnTxt: {
        fontSize: RF(16),
        color: WHITE_ONE,
        // fontWeight: 'normal',
        fontFamily:ROBOTO_REGULAR,
    },
   

})