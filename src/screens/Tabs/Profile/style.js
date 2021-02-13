
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, WHITE_ONE, LIGHT_GREEN, BORDER_GREY } from '../../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR, Perpetua_Bold, Perpetua, ROBOTO_LIGHT } from '../../../global/FontFamilies';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    containerLayout: {
        backgroundColor: WHITE_ONE,
        // width,
        flex: 1
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    defaultText: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: LIGHT_BROWN
    },
    defaultView: {
        width: width * 0.8,
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'center',

    },
    profileView: {
        height: height * 0.2,
        width: width * 0.9,
        alignSelf: "center",
        // backgroundColor:"pink",
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    staticContainerLayout: {
        width,
        alignSelf:"center"
    },
    staticHeaderTxt: {
        //'Roboto-Medium' is required instead of 'Roboto-Regular
        fontFamily: ROBOTO_BOLD,
        fontSize: RF(16),
        color: LIGHT_BROWN,
       

    },
    staticBodyTxt: {
        textAlign: 'justify',
        marginBottom: hp(4),
        marginTop: hp(2),
        fontFamily: ROBOTO_LIGHT,
        color: LIGHT_BROWN
    },
    staticHeaderWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:width*0.9,
        alignSelf:"center"
    },
    mapView: {
        width,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"pink",
        height:height*0.3,
        marginVertical:5



    }



})