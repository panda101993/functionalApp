
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { BLACK_ONE, BORDER_GREY, GREY_ONE, LIGHT_BROWN, LIGHT_GREEN, WHITE_ONE } from '../../global/Colors';
import { RF } from '@Global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR, SANS_PRO_REGULAR } from '../../global/FontFamilies';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    containerLayout: {
        // backgroundColor: "green",
        width,
       
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
 
    logoImgView: {
        width:width*0.9,
        alignSelf:"center",        
        // backgroundColor: 'blue',
     
        marginTop: width * 0.1,
        marginVertical: width * 0.05
    },

    logoImg: {
        aspectRatio: 283 / 282,
        width: '32%',
        height: height*0.09,
    },
    sliderLayoutContainer: {
        // backgroundColor: "red",
        // justifyContent: 'center',
        height: width * 1.28,
        width: width * 0.92,
    },
    btnView: {
        alignSelf:"center",
        // backgroundColor:'grey',
        width: width * 0.90, 
        alignItems: 'flex-end',
        // justifyContent:"flex-end"


    },

    HeaderView:{
        width:width*0.9,
        alignSelf:"center",        
        // backgroundColor: 'blue',
        alignItems:"center",
        // marginTop: width * 0.08,
        // marginVertical: width * 0.05
    },
    BodyView:{
        width:width*0.95,
        alignSelf:"center",        
        // backgroundColor: 'yellow',
        alignItems:"center",
        // marginTop: width * 0.25,
        // marginVertical: width * 0.05 
    },
    OptionView:{
        width:width*0.8,
        alignSelf:"center", 
        // height:height*0.045,
        padding:12,
        borderRadius:24,       
        justifyContent:"center",
        alignItems:"center",
        borderWidth: 0.3,
        borderColor:BORDER_GREY,
        backgroundColor:WHITE_ONE
        // marginTop: width * 0.35,
        // marginVertical: width * 0.05 
    }
    ,
    OptiononeView:{
        width:width*0.35,
        alignSelf:"center", 
        padding:10,
        // height:height*0.045,
        borderRadius:24,       
        justifyContent:"center",
        alignItems:"center",
        borderWidth: 0.5,
        borderColor:BORDER_GREY,
        // backgroundColor:LIGHT_GREEN
        // marginTop: width * 0.35,
        // marginVertical: width * 0.05 
    },
    listView:{
        width:width*0.93,
        alignSelf:"center",        
        // backgroundColor: 'blue',
        alignItems:"center",
        justifyContent:"space-between",
        // height:height*0.26,
        flex:1,
        marginTop: width * 0.05,
        // marginVertical: width * 0.05 
    }

})