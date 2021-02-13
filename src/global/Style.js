import { Platform, StyleSheet, Dimensions } from 'react-native'
import { BLACK_ONE, BORDER_GREY, GREY_ONE, GREY_TWO, LIGHT_BROWN, LIGHT_GREEN, LIGHT_YELLOW, WHITE_ONE } from './Colors';
import { ROBOTO_BOLD, ROBOTO_REGULAR, ROBOTO_LIGHT } from './FontFamilies';
import { RF, SH, hp as hpc, wp as wpc } from './Responsive';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
// import { normalizeFont, scale, scaleHeight } from './responsive';

// import { } from './colors'

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    shortBtnLayout: {
        backgroundColor: LIGHT_GREEN,
        width: width * 0.3,
        borderRadius: width * 0.2,
        height: width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BtnTxt: {
        fontSize: RF(16),
        color: WHITE_ONE,
        fontFamily: ROBOTO_REGULAR
    },
    bottomSheetContainer: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: WHITE_ONE,
        height: height * .40,
        paddingTop: 25,
        paddingHorizontal: 15
    },
    cardMainLayout: {
        padding: 10,
        alignItems: 'center',
        //  backgroundColor:'red'
    },
    cardContainer: {
        width: '100%',
        alignSelf: 'center',
        // height: width * 0.19,
        backgroundColor: WHITE_ONE,
        borderRadius: width * 0.04,
        shadowColor: "rgba(0, 0, 0, 0.4)",
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 9,
        paddingVertical: 25,
        paddingHorizontal: 15
    },
    //Shadow Submit Button Styling
    btnLayout: {
        width: wp(90),
        height: hp(9.4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        //  backgroundColor:'red',

    },
    // btnTxt: {
    //     alignSelf: 'center',
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    //     fontSize: RF(16),
    //     color: WHITE_ONE,
    // },
     btnTxt: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: RF(20),
        color: WHITE_ONE,
        fontFamily: ROBOTO_REGULAR
    },
    leftImg: {
        height: hp(3.5),
        width: wp(6),
        // borderWidth:1,
        // backgroundColor:'red'
    },
    btnNameView: {
        alignSelf: 'center',
        width: wp(58),
        paddingHorizontal: wp(2),
        justifyContent: 'center'
    },
    rightImg: { height: hp(4), width: wp(8) },

    //Header Styling
    header: {
        height: height * 0.1,
        width,
        backgroundColor: LIGHT_GREEN,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sideContainer: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"pink"

    },
    defaultText: {
        fontSize: RF(14),
        fontFamily: ROBOTO_REGULAR,
        color: LIGHT_BROWN
    },
    defaultContainer: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
    back: {
        width: 100,
        height: 22,
        resizeMode: 'contain'
    },
    headerTitleContainer: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerTitle: {
        color: WHITE_ONE,
        fontSize: RF(20),
        alignSelf: 'center',
        fontFamily: ROBOTO_BOLD
    },



    // PhysiciansheaderTitleContainer: {
    //     marginRight: wp("28%"),
    //     height: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    // SettingheaderTitleContainer: {
    //     marginRight: wp("38%"),
    //     height: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    // sideDoubleContainer: {

    //     width: '20%',
    //     height: '100%',
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center',
    //     flexDirection: 'row',
    // },

    inputLayout: {
        width: width * 0.8,
        alignSelf: "center",
        height: height * 0.05,
        borderWidth: 0.4,
        borderColor: BORDER_GREY,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: WHITE_ONE,
        color:BLACK_ONE,
        fontSize:RF(16),
        //  backgroundColor:'yellow'

    },
    Inputcontainer: {
        // height: height * 0.1,
        // backgroundColor:'orange',
        // // justifyContent:'center'
    },
    textInput: {
        height: '100%',
        width: '100%',
        // height: height * 0.03,
        // width: width * 0.60,
        padding: 10,
        color: BLACK_ONE,
        // backgroundColor:'red'
        //    color:'black'
    },
    ErrorLayout: {
        alignSelf: "center",
        width: width * 0.8,
        height: height * 0.03,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 4,
        // backgroundColor:'red',
        borderRadius: 4,
        bottom: hpc(0.65),
        //  width: '90%',
        // marginVertical: 5,

    },
    Errortextstyle: {
        fontSize: RF(12),
        fontFamily: ROBOTO_REGULAR,
        color: WHITE_ONE,
        paddingLeft: wpc(2)

    },
    verticalBarInput: {
        height: height * 0.045,
        width: 1,
        backgroundColor: GREY_TWO,
        marginHorizontal: wp(2)
    },
    // IconInputContainer: {
    //     paddingHorizontal: 10,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     width: '100%',
    // },
    // Button: {
    //     backgroundColor: THEME,
    //     height: scaleHeight(50),
    //     width: width * 0.6,
    //     borderRadius: scaleHeight(25),
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     alignSelf: 'center'

    // },
    // IconInput: {
    //     width: '85%'
    // },
    // backHeader: {
    //     height: height * 0.15
    // },

    BackgroundImageStyle: {
        // justifyContent: "center",
        // alignItems: "center",
        flex: 1
    },
    contentContainerStyle: {
        //   flex:1,
        // justifyContent: "flex-start",
        // alignItems: "center",
        // backgroundColor:"red"
    },

    // DreawerText: {
    //     fontSize: normalizeFont(15),
    //     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    //     color: BLACK,
    //     paddingLeft: wp("4%")
    // },
    DreawerusernameText: {
        fontSize: RF(18),
        fontFamily: ROBOTO_LIGHT,
        color: BLACK_ONE,
        // fontWeight: ""
    },

    Drawerstyle: {
        width: wp("80%"),
        flex: 1,
        backgroundColor: WHITE_ONE,
        //    borderTopRightRadius:  10,
    },

    // Imagecontainer: {
    //     height: hp("30%"),
    //     width: wp("80%"),
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor:"yellow"
    // },
    // profileimagestyle: {
    //     width: wp("55%"),
    //     height: hp("15%"),
    //     borderRadius: 100,
    // },
    Drawerscenestyle: {
        width: wp("80%"),
        height: hp("7%"),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: 'row',
        borderBottomWidth: 0.25,
        borderBottomColor: "rgba(98, 91 ,87,0.4)"

        // backgroundColor: "pink"


    },
    Drawertextview: {
        width: wp("65%"),
        alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', height: hp("6%"),

    },
    arrowView: {
        width: wp("15%"),
        alignItems: 'center', flexDirection: 'row', justifyContent: 'center', height: hp("6%"),

    },
    ButtonLayout: {
        width: width * 0.8,
        height: height * 0.05,
        // backgroundColor: LIGHT_GREEN,
        // borderRadius: 25,
        // alignSelf: "center",
        alignItems: "center",
        justifyContent: 'center',
        // paddingVertical: 4,

    },
    HalfButtonLayout: {
        width: width * 0.35,
        height: height * 0.05,
        // backgroundColor: LIGHT_GREEN,
        // borderRadius: 25,
        // alignSelf: "center",
        alignItems: "center",
        justifyContent: 'center',
        // paddingVertical: 4,

    },
    OTPInputLayout: {
        borderBottomWidth: 3,
        borderColor: LIGHT_GREEN,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.12,
        height: height * 0.07,
        // width:90,
        // height:100,
        // backgroundColor: "cyan",
    },
    OTPtextInput: {
        alignItems: 'center',
        fontSize: RF(28),
        height: '100%',
        width: '100%',
        alignSelf:'center',
        textAlign: 'center',
        color: BLACK_ONE,
    },
    OTPErrorLayout: {
        alignSelf: "center",
        // width: width * 0.75,
        // height: height * 0.03,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 4,
        // backgroundColor:'red',
        borderRadius: 4,
        width: '90%',
        paddingVertical:hp(1),
        marginVertical:5,

    },

    // mainContainer: {
    //     alignItems: "center",
    //     flex: 1,
    //     // backgroundColor: 'rgba(0,0,0,0.7)',
    //     justifyContent: 'center',
    // },

    // HedTextLayout: {
    //     width: wp("78%"),
    //     alignItems: "center",
    //     height: hp("4%"),
    //     borderBottomWidth: 0.5,
    //     borderBottomColor: GRAY,
    //     justifyContent: "center",
    //     flexDirection: "row",
    // },
    // HedTextLayoutRating: {
    //     width: wp("70%"),
    //     alignItems: "center",
    //     height: hp("5%"),
    //     borderBottomWidth: 0.5,
    //     borderBottomColor: GRAY,
    //     justifyContent: "center",
    //     flexDirection: "row",

    // },
    // Headtextstyle: {
    //     width: wp("65%"),
    //     marginLeft: wp("6%"),
    //     textAlign: "center",
    //     fontSize: normalizeFont(15),
    //     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    //     color: BLACK,
    //     fontWeight: "bold",
    //     alignSelf: 'center'
    // },
    // HeadtextstyleRating: {
    //     width: wp("45%"),
    //     textAlign: "center",
    //     fontSize: normalizeFont(15),
    //     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    //     color: BLACK,
    //     fontWeight: "bold",
    //     alignSelf: 'center',
    //     marginLeft: wp("2%")

    // },
    // questionBoxlayout: {
    //     width: wp('60%'),
    //     alignContent: 'center',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // marginBottom: hp('2%'),
    //     marginVertical: hp("1%"),

    // },
    // questiontextstyle: {
    //     fontSize: normalizeFont(13),
    //     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    //     color: BLACK,
    //     textAlign: "center",

    // },

    // Logoutquestiontextstyle: {
    //     fontSize: normalizeFont(13),
    //     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    //     color: BLACK,
    //     textAlign: "center",
    //     marginTop: wp("4%")

    // },
    // buttonLayout: {
    //     alignItems: "center",
    //     alignSelf: "center",
    //     width: wp("50%"),
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     marginTop: hp("1%"),
    //     marginVertical: hp("2%")
    // },
    // buttonLayoutLogOut: {
    //     alignItems: "center",
    //     alignSelf: "center",
    //     width: wp("50%"),
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     marginTop: hp("1%"),
    //     marginBottom: wp("4%")
    //     //marginVertical:hp("5%"),

    // },

    // DismisLayout: {
    //     backgroundColor: nevybl,
    //     width: wp("22%"),
    //     height: hp("4%")
    // },
    // submitLayout: {
    //     width: wp("22%"),
    //     height: hp("4%")
    // },
    // buttonTextstyle: {
    //     fontSize: normalizeFont(13),
    //     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    //     color: WHITE
    // },
    // buttonTextstyleLogOut: {
    //     fontSize: normalizeFont(13),
    //     fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    //     color: WHITE,
    //     // marginVertical:10
    // },
    // crossView: {
    //     alignSelf: 'flex-end',
    //     // backgroundColor:"pink",
    //     width: wp("5%"),
    //     marginBottom: hp('2%'),
    //     marginLeft: wp("5%")



    // },

    // countryModalcrossView: {
    //     //alignSelf: 'flex-end',
    //     //  backgroundColor:"pink",
    //     //     width: wp("5%"),
    //     //     marginBottom: hp('0%'),
    //     marginVertical: wp("-5%")




    // },

    // crossViewRateUs: {

    //     marginVertical: wp(-5),
    //     //width: wp("10%"),
    //     //height:wp("9%"),
    //     //marginBottom: hp('9%'),
    //     marginLeft: wp("79%"),

    // },

    // LogoutLayout: {
    //     borderRadius: 8,
    //     marginTop: hp("35%"),
    //     alignItems: "center",
    //     alignSelf: 'center',
    //     width: wp("78%"),
    //     backgroundColor: 'white',
    //     marginBottom: hp("30%")
    // },
    // SearchInputlayout: {
    //     height: hp("5%"),
    //     width: wp("73%"),
    //     padding: 1,
    //     color: WHITE


    // },
    // Searchlayout: {
    //     flexDirection: 'row',
    //     width: wp("85%"),
    //     alignSelf: "center",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     borderWidth: 0.9,
    //     borderColor: BLACK,
    //     borderRadius: 7,
    //     marginVertical: hp("2%"),

    // },
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
    tabbar: {
        width,
        height: height * 0.1,
        // backgroundColor:'red'
    },
 
    tabbarContainer: {
        width: '100%',
        height: height * 0.1,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: WHITE_ONE,
        borderTopRightRadius: height * 0.02,
        borderTopLeftRadius: height * 0.02,
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowColor: GREY_ONE,
        elevation: 9,
        // borderTopColor: "red",
        // backgroundColor:'red',
        borderTopWidth: 0
    },
    tabbarCenterIcon: {
        bottom: height * 0.035
    },
    // dropdownMainContainer: {
    //     height: hp("8%"),
    //     width: wp("75%"),
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     //  paddingLeft:'3%',
    //     borderRadius: 5,
    //     borderWidth: 0.5,
    //     flexDirection: 'row',
    //     // paddingHorizontal: '3%'
    // },
    // dropdownTxtContainer: { flex: 9, paddingLeft: '3%', justifyContent: 'center', },
    // dropdownSelectedTxt: { color: DarkGrey },
    // dropdownImgView: { flex: 1, alignItems: 'center', justifyContent: 'center', },
    // listBox: {
    //     // backgroundColor:'white',
    //     borderRadius: 5,
    //     shadowColor: "rgba(0, 0, 0, 0.3)",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowRadius: 5,
    //     shadowOpacity: 1,
    //     elevation: 2,
    //     zIndex: 99,
    // },
    // QRheader:
    // {
    //     width: wp(80),
    //     alignItems: 'center',
    //     height: hp("6%"),
    //     flexDirection: "row",
    //     // justifyContent: "space-between",
    //     // backgroundColor: "red",
    //     marginBottom: Platform.OS == 'ios' ? null : wp(15)
    //     // border
    // }
})
