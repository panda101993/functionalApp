
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, LIGHT_GREEN } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_LIGHT, ROBOTO_REGULAR, VERDANA_BOLD } from '../../global/FontFamilies';
const { height, width } = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        paddingVertical: width * 0.08,
        alignSelf:'center'
    },
    headerLayout: {
        // backgroundColor: "orange",
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between',
    },
    logoLayout: {},
    logo: {
        // width:width * 0.15
        aspectRatio: 283 / 282,
        width: '45%',
        height: undefined,
    },
    headerTitleLayout: {
        // backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: RF(18),
        // fontWeight: 'bold',
        color: LIGHT_BROWN,
        // fontFamily:VERDANA_BOLD
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
        alignSelf:'center',
        fontSize: RF(25),
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: LIGHT_BROWN,
    },
    btnView: {
        marginTop: hp(3)
    },
    otherSignupTxtLayout: {
        alignItems: 'center'
    },
    orTxt: {
        // bottom:hp(1),
        fontSize: RF(11),
        color: LIGHT_BROWN,
        fontFamily:ROBOTO_LIGHT
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
        color: LIGHT_BROWN
    },
    signInTxt: {
        fontSize: RF(15),
        color: LIGHT_GREEN
    },








})
