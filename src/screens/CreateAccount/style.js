
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, LIGHT_GREEN } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_REGULAR } from '../../global/FontFamilies';
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
        width: width * 0.92,
        paddingTop: width * 0.2,
        paddingVertical: width * 0.1
    },
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
        position: "absolute",
        zIndex: 1,
        alignItems: 'center',
        // backgroundColor: "red",
        top: 50,
    },
    logo: {
        // width:width * 0.15
        aspectRatio: 283 / 282,
        width: '45%',
        height: undefined,
    },
    //Card Header
    cardHeader: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '94%',
        alignSelf: 'center',
        // backgroundColor: "green",
        marginVertical: width * 0.10
    },
    //Card Header Text
    cardHeaderTxt: {
        fontSize: RF(30),
        fontFamily: 'Roboto-Bold'
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
        marginVertical: 15
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
    },
    alreadyTxtView: {

    },
    alreadyTxt: {
        fontSize: RF(14),
        color: LIGHT_BROWN,
        fontFamily:ROBOTO_REGULAR
    },
    signInTxt: {
        fontSize: RF(15),
        color: LIGHT_GREEN,
        fontFamily:ROBOTO_REGULAR
    },








})
