
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, LIGHT_GREEN, GREY_ONE } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../global/FontFamilies';
import { hp } from '../../global/Responsive';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
        width,
       
    },
    mainLayout: {
        width: width * 0.92,
        paddingVertical: hp(2),
        alignSelf:'center'
    },
    adjustCard: { paddingVertical: 0,
        marginVertical:hp(4),
        alignSelf:'center'},
    headerLayout: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between',
    },
    logoLayout: {
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    logo: {
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
        marginTop: width * 0.10
    },
    //Card Header Text
    cardHeaderTxt: {
        fontSize: RF(18),
        fontFamily: ROBOTO_BOLD,
        color: BLACK_ONE
    },
    //Card Header Message
    cardHeaderMsgView: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '94%',
        alignSelf: 'center',
        // backgroundColor: "green",
        marginVertical: width * 0.03
    },
    //Card Message 
    cardHeaderMsgTxt: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: GREY_ONE
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

    btnView: {
        marginVertical: 15
    },
})
