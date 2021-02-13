
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, WHITE_ONE, LIGHT_GREEN, BORDER_GREY } from '../../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR,Perpetua_Bold,Perpetua } from '../../../global/FontFamilies';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    containerLayout: {
        backgroundColor: WHITE_ONE,
        // width,
       flex:1
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    defaultText: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: LIGHT_BROWN
    },
    defaultView:{
            width: width ,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: WHITE_ONE,
            flexDirection: 'row',
            // height:height*0.12,
            paddingVertical:15,
            marginVertical: 2.5,
            borderTopColor:BORDER_GREY,
            borderTopWidth: 0.3,
            borderBottomWidth: 0.3,
            borderBottomColor:BORDER_GREY
         
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        marginVertical:2.5,
        width: 50,
        // padding:15,
    },
    backRightBtnRight: {
        backgroundColor: LIGHT_GREEN,
        right: 0,
        alignItems: 'center',
        justifyContent: "center",
        // borderBottomLeftRadius: 8,
        // borderTopLeftRadius: 8,
        width: width * 0.23
    },
    rowBack: {

        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },

   

})