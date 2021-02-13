
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
        flex: 1,
        // paddingBottom:width*0.1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    defaultText: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: LIGHT_BROWN
    },
    defaultView: {
        width: width * 0.9,
        alignSelf: 'center',
        borderColor: BORDER_GREY,
        borderWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: WHITE_ONE,
        // flexDirection: 'row',
        paddingVertical: 10,
        marginTop: 15,
        borderRadius: 10,



    },
    imageView: {
        width: width * 0.85,
        alignSelf: 'center',
        // paddingVertical: 5,
        // backgroundColor: "yellow",
        justifyContent: "space-between",
        flexDirection: "row",


    },
    ButtonView: {
        width: width * 0.9,
        alignSelf: 'center',
        paddingVertical:5,

        justifyContent: "space-evenly",
        flexDirection: "row",


    },
    declineView: {
        width: width * 0.3,
        height: 45,
        backgroundColor: WHITE_ONE,
        borderWidth: 0.3,
        borderColor: BORDER_GREY,
        borderRadius: 26,
        alignItems:"center",
        justifyContent:"center"
    },

    confirmView: {
        width: width * 0.45,
        height: 45,
        backgroundColor: WHITE_ONE,
        borderWidth: 0.3,
        borderColor: BORDER_GREY,
        borderRadius: 26,
        alignItems:"center",
        justifyContent:"center"
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

    mainContainer: {
        alignItems: "center",
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center'
    },
    Modalcontainer: {
        borderRadius: 10,
        alignItems: "center",
        alignSelf: 'center',
        width: wp("90%"),
        backgroundColor: "white",
       padding:15
     

    },
    toptabview:{
        width:width/3,
         borderWidth: 0.3,
         borderColor: BORDER_GREY, 
         height:height*0.08, 
         alignItems:"center",
         justifyContent:"center"

    }
})