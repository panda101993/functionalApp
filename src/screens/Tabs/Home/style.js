
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, BLACK_ONE, WHITE_ONE, LIGHT_GREEN, BORDER_GREY } from '../../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR, Perpetua_Bold, Perpetua } from '../../../global/FontFamilies';
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    containerLayout: {
        backgroundColor: WHITE_ONE,
        // width,
        // flex: 1
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    containerStyle: {
        opacity: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: WHITE_ONE,
        height: height * .40,
        paddingTop: 25,
        paddingHorizontal: 15,
        // width:width
    },
    smallCardStyle: {
        height: hp(10), width: wp(40),
        shadowColor: "rgba(0, 0, 0, 0.4)",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 9,
        alignItems:'center',justifyContent:'space-evenly',
        borderRadius: 10,
        backgroundColor: 'white', alignSelf: 'center',
    },
    bottomCard: {
        height: hp(28), width: wp(100),
        position: 'absolute',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: 'white',
        shadowColor: "rgba(0, 0, 0, 0.4)",
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 20,
    }


})