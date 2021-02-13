
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, LIGHT_GREEN } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../global/FontFamilies';
import { hp, wp } from '../../global/Responsive';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
        // backgroundColor: "green",
        width,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    mainLayout: {
        // backgroundColor: "cyan",
        width: width * 0.96,
        alignSelf:'center',
        // paddingTop: width * 0.2,
        paddingVertical: width * 0.1,
        
    },
    adjustCard:{paddingVertical: hp(1),},
    headerLayout: {
        // backgroundColor: "orange",
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between',
    },
    logoLayout: {
        width: '70%',
        alignSelf: 'center',
        // backgroundColor:'red',
        // position: "absolute",
        // zIndex: 1,
        alignItems: 'center',
        marginBottom:hp(2),
        // backgroundColor: "red",
        // top: 50,
    },
    logo: {
        // width:width * 0.15
        aspectRatio: 283 / 282,
        width: '35%',
        height: undefined,
    },
    //Card Header
    cardHeader: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '94%',
        alignSelf: 'center',
        // backgroundColor: "green",
        marginTop: width * 0.10,
        paddingBottom:hp(1)
    },
    //Card Header Text
    cardHeaderTxt: {
        fontSize: RF(25),
        fontFamily: ROBOTO_BOLD,
        color: LIGHT_BROWN
    },
    headerTitleLayout: {
        // backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: RF(18),
        fontWeight: 'bold',
        color: LIGHT_BROWN
        // fontFamily:'verdanabold'
    },
    bannerLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        // backgroundColor:'orange'
    },
    bannerImg: {
        aspectRatio: 827 / 534,
        width: '90%',
        height: undefined,
    },
    pageMsgView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor:'red',
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 12
    },
    pageMsgTxt: {
        color: BLACK_ONE,
        fontSize: RF(20),
        fontWeight: 'bold'
    },
    btnView: {
        marginVertical: hp(1)
    },
    otherSignupTxtLayout: {
        alignItems: 'center'
    },
    orTxt: {

    },
    alreadyAMemberLayout: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:hp(2)
    },
    alreadyTxtView: {

    },
    alreadyTxt: {
        color: LIGHT_BROWN
    },
    signInTxt: {
        fontSize: RF(15),
        color: LIGHT_GREEN
    },

    signInActionsView: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        width: '95%',
        alignSelf: 'center',
        marginTop:hp(1),
        justifyContent: 'space-between',
    },
    rememberMeLayout: {
        flexDirection: 'row',
        // backgroundColor: 'pink',
        width: '42%',
        justifyContent: 'space-between',
    },
    rememberMeView: {
        flexDirection: 'row',
        // backgroundColor: 'cyan',
        marginLeft:10,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    rememberMeTxt: {
        color: LIGHT_BROWN,
        fontFamily:ROBOTO_REGULAR
    },
    forgotPasswordLayout: {
        flexDirection: 'row',
        // backgroundColor: 'brown',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    forgotPasswordtxt: {
        color: LIGHT_GREEN,
        fontFamily:ROBOTO_REGULAR
    },
    orSigninWithView: {
        alignSelf: 'center',
    },
    orSignWithTxt: {
        fontSize: RF(14),
        color: LIGHT_BROWN,
        fontFamily:ROBOTO_REGULAR
    },
    adjustFont:{fontSize:RF(15)},
    adjustBtnLayout:{width:wp(85)},

})
