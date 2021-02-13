
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, WHITE_ONE, LIGHT_GREEN } from '../../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR,Perpetua_Bold,Perpetua } from '../../../global/FontFamilies';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    containerLayout: {
        backgroundColor: WHITE_ONE,
        width,
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
            width: width * 0.45,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
            // backgroundColor: "pink",
            flexDirection: 'row',
         
    },
    unselectedLayout:{
        width:wp("90%"),
        alignSelf: 'center',
        height:hp("5%"),
        backgroundColor: LIGHT_GREEN,
        marginVertical: hp("0.5%"),
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    titletext_style2: {
        fontSize: RF(16),
        fontFamily: ROBOTO_REGULAR,
        color: WHITE_ONE,
        marginLeft:wp("3%"),
        alignSelf:'center',
    },
    selectedLayout:{
        width:wp("90%"),
        alignSelf: 'center',
        backgroundColor: WHITE_ONE,
        marginVertical: hp("1%"),
    
    },
    title_Layout: {
        width: wp("85%"),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },

   

})