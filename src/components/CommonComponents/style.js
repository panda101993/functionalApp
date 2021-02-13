
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { RF } from '@Global/Responsive';
const { height, width } = Dimensions.get('window');
import { ROBOTO_BOLD, ROBOTO_LIGHT, ROBOTO_REGULAR, SANS_PRO_REGULAR } from '../../global/FontFamilies';
import { GREY_ONE,
    GREY_TWO,LIGHT_BROWN, BLACK_ONE, LIGHT_GREEN, WHITE_ONE } from '../../global/Colors';
    import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
 
    export default StyleSheet.create({
    //********************  Sign Up Bottom Sheet  ******************************/
    signUpContainerLayout: {
    },
    signUpHeaderTxt:{
        //'Roboto-Medium' is required instead of 'Roboto-Regular
        fontFamily:ROBOTO_BOLD ,
        fontSize:RF(16),

    },
    signUpListItemContainer:{
        paddingVertical:hp(2),
        borderBottomWidth:0.9,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:GREY_TWO
    },
    signUpListUnselectedRadio:{
     height:15,
     width:15,
     borderRadius:15/2,
     borderWidth:1,
     alignSelf:'center',
     borderColor:GREY_TWO
    },
    signUpListSelectedRadio:{
        height:15,
        width:15,
        borderRadius:15/2,
        borderWidth:1,
        backgroundColor:LIGHT_GREEN,
        alignSelf:'center'
    },
    signUpTermsNConCheckBox:{
        height:20,
        width:20,
        borderWidth:1
    },
    signUpTermsNConditionTxt:{
        marginHorizontal:20
    },
    signUpText:{
        color:GREY_TWO,
        fontFamily:ROBOTO_REGULAR,
        fontSize:RF(13)
    },


    
/**********************Static Bottom Sheet************************************** */
    staticContainerLayout:{
    },
    staticHeaderTxt:{
        //'Roboto-Medium' is required instead of 'Roboto-Regular
        fontFamily:ROBOTO_BOLD ,
        fontSize:RF(16),
        color:LIGHT_BROWN

    },
    staticBodyTxt:{
        textAlign: 'justify',
        marginBottom: hp(4),
        marginTop:hp(2),
        fontFamily:ROBOTO_LIGHT,
        color:LIGHT_BROWN
    },
    staticHeaderWrapper:{ flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center' }


})
