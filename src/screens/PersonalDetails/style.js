import { Platform, StyleSheet, Dimensions } from 'react-native';
import { BLACK_ONE, BORDER_GREY, GREY_ONE, GREY_TWO, LIGHT_BROWN, LIGHT_GREEN, WHITE_ONE } from '../../global/Colors';
import { RF, hp, wp } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, ROBOTO_LIGHT, SANS_PRO_REGULAR } from '../../global/FontFamilies';
import { color } from 'react-native-reanimated';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
    },
    profilePicContainer: {
        width: wp(100),
        height: hp(30),
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        width: wp(45),
        height: hp(25),
        justifyContent: 'flex-end',
        height: hp(25)
    },
    cameraIconStyle: {
        width: wp(16),
        alignSelf: 'flex-end',
        // marginBottom: hp(-0.5),
        marginRight: wp(-1),
        // backgroundColor: 'red',
        height: hp(8)
    },
    personalTxt: {
        fontFamily: ROBOTO_REGULAR,
        width: wp(80),
        alignSelf: "center",
        fontSize: RF(18),
        color: LIGHT_BROWN,
    },

    unselectedRadio: {
        height: 15,
        width: 15,
        borderRadius: 15 / 2,
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: BORDER_GREY
    },
    selectedRadio: {
        height: 15,
        width: 15,
        borderRadius: 15 / 2,
        borderWidth: 1,
        borderColor: BORDER_GREY,
        backgroundColor: LIGHT_GREEN,
        alignSelf: 'center'
    },
    radioTxt: {
        color: LIGHT_BROWN,
        fontFamily: ROBOTO_LIGHT,
        marginHorizontal: wp(2),
        fontSize: RF(15)
    },
    listView: {
        width: width * 0.95,
        alignSelf: "center",
        // backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "space-between",
        // height:height*0.26,
        flex: 1,
        marginTop: hp(1),
        // marginVertical: width * 0.05 
    },
    OptiononeView:{
        width:width*0.35,
        alignSelf:"center", 
        // padding:10,
         height:hp(6),
        borderRadius:24,       
        justifyContent:"center",
        alignItems:"center",
        borderWidth: 0.5,
        borderColor:BORDER_GREY,
        // backgroundColor:LIGHT_GREEN
        // marginTop: width * 0.35,
        // marginVertical: width * 0.05 
    },
    alreadyAMemberLayout: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:hp(3)
    },
    alreadyTxtView: {

    },
    alreadyTxt: {
        color: LIGHT_BROWN
    },
    signInTxt: {
        fontSize: RF(14),
        color: LIGHT_GREEN
    },
    rememberMeLayout: {
        flexDirection: 'row',
        // backgroundColor: 'pink',
        width: '42%',
       
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
        fontFamily:ROBOTO_REGULAR,
        fontSize: RF(14),
    },
})















