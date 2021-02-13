
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { LIGHT_BROWN, LIGHT_GREEN, WHITE_ONE } from '../../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR,Perpetua_Bold,Perpetua } from '../../../global/FontFamilies';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
        backgroundColor: WHITE_ONE,
        width,
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
    mainView:{
        width: width * 0.8,
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: width * 0.08,

    }
   

})