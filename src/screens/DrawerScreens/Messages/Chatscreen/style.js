
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { BLACK_ONE, BORDER_GREY, LIGHT_BROWN, LIGHT_GREEN, WHITE_ONE } from '../../../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR, Perpetua_Bold, Perpetua } from '../../../../global/FontFamilies';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
        backgroundColor: WHITE_ONE,
        width,
        justifyContent: 'flex-start',
        // flex:1,
        // height: height * 0.9
        alignItems: 'center',
    },
    defaultText: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: LIGHT_BROWN,
        // marginVertical:,
      
    },
    shortBtnLayout: {
        alignSelf: "flex-end",
        // backgroundColor: LIGHT_GREEN,
        width: width * 0.25,
        // borderRadius: width * 0.2,
        height: height * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shortBtnTxt: {
        fontSize: RF(16),
        color: WHITE_ONE,
        // fontWeight: 'normal',
        fontFamily: ROBOTO_REGULAR,
    },
    TypingView: {
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: BORDER_GREY,
        height: height * 0.06,
        // backgroundColor: "pink",
        alignItems: "center",
        flexDirection: 'row',
        width: width * 0.95,
        alignSelf: "center",
        justifyContent: 'space-between',
        // bottom:10
    },
    TypeingInput: {
        width: width * 0.58, marginLeft: 15,
        height: height * 0.06,
        color: BLACK_ONE,
        alignItems: "center",
        fontSize: RF(14),
        justifyContent: 'center',
      
        // backgroundColor: "pink",

    },
    userView:{
        maxWidth:width*0.8,
        padding:8,
        alignSelf:"flex-end",
    },
    customerView:{
        maxWidth:width*0.9,
        padding:8,
      
        alignSelf:"flex-start",
        // alignItems:"flex-start",
        // justifyContent:"flex-start"
    }
})