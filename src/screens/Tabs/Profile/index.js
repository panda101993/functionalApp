import React, { useState, useEffect, useRef } from 'react';
import { Platform, Dimensions } from 'react-native';
import { Container, } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, List, BottomSheet } from '../../../components/Atoms';
import styles from './style';
import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BORDER_GREY, BLUE_LIGHT } from '../../../global/Colors';
import { RF } from "../../../global/Responsive";
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ROBOTO_BOLD } from '../../../global/FontFamilies';
import { Actions } from 'react-native-router-flux';
import { profilePicture, Edit_icon, camera_icon, cross_icon } from '../../../assets/Icon';
import { Input, SubmitButton } from '../../../components/Molecules';
import { handleValidations } from './validate';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Maplist from '../../../components/Map';


export default Profile = (props) => {


    const state = useSelector(state => state).reducer
    const {
        My_Profile,
        Name,
        Name_error,
        Email_error,
        Enter_mobile_number,
        Email_address,
        Mobile_Number,
        Enter_mobile,
        Enter_email,
        Enter_name,
        Location,
        Save,
        Add_more,
        Edit_Profile,
        location_details,
        Address,
        Name_Address,
        AddressError,
        NameaddressError

    } = state.language.PROFILE
    const refBottomSheetStatic = useRef();
    let [inbuiltstate, setState] =
        useState({
            email: "Deep@gmail.com",
            emailError: "",
            emailStatus: true,
            imagepath: "",
            firstname: "Matrina",
            firstnameStatus: true,
            firstnameError: "",
            mobilenumber: "7438966177",
            mobilenumberStatus: true,
            mobilenumberError: "",
            address: "",
            addressError: "",
            addressStatus: false,
            // street: "",
            // streetStatus: false,
            // streetError: "",
            // city: "",
            // cityStatus: false,
            // cityError: "",
            nameaddress: "",
            nameaddressStatus: false,
            nameaddressError: "",
            EditProfile: false,
            imagepath: "",
            Locationarray: [{
                type: "Home",
                address: "d-115, Mobiloitte street, 244001"
            },
            {
                type: "Work",
                address: "d-115, Mobiloitte street, 244001"
            }

            ]



        });
    const handlevalidate = async (text, type) => {
        let status = `${type}Status`;
        let errorText = `${type}Error`;
        let resp = handleValidations(text, type)
        await setState({
            ...inbuiltstate,
            [type]: resp.value,
            [errorText]: resp.errorText,
            [status]: resp.status,
        })

    }
    const openImage = (type) => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            includeBase64: true,
            cropping: true
        }).then(async (image) => {
            console.log("image", image.sourceURL)
            setState({ ...inbuiltstate, imagepath: image.path })
        });
    }
    const Submit = () => {
        //Actions.Userinfo()
        if (inbuiltstate.firstnameStatus) {
            if (inbuiltstate.emailStatus) {
                if (inbuiltstate.mobilenumberStatus) {



                }
                else { setState({ ...inbuiltstate, mobilenumberstatus: false, mobilenumberError: Enter_mobile_number, }) }
            }
            else { setState({ ...inbuiltstate, emailstatus: false, emailError: Email_error, }) }


        }
        else { setState({ ...inbuiltstate, firstnamestatus: false, firstnameError: Name_error, }) }



    }
    const SubmitLocationDetails = () => {
        if (inbuiltstate.addressStatus) {
            if (inbuiltstate.nameaddressStatus) {


                refBottomSheetStatic.current.close()

            }
            else { setState({ ...inbuiltstate, nameaddressStatus: false, nameaddressError: NameaddressError, }) }


        }
        else { setState({ ...inbuiltstate, addressStatus: false, addressError: AddressError, }) }
    }
    return (
        <Container
            scrollable
            drawer_open
            title={inbuiltstate.EditProfile ? Edit_Profile : My_Profile}
            right_firstclik={() => setState({ ...inbuiltstate, EditProfile: true })}
            right_first={Edit_icon}
            Containerlayout={[styles.containerLayout]}
            header={true} >

            <AppView style={styles.profileView}>
                <AppView style={{
                    width: width * 0.6,

                }}>
                    <AppText style={[styles.defaultText, { color: BLACK_ONE, fontSize: RF(22), }]}>
                        Matrina John
</AppText>
                    <AppText style={[styles.defaultText, { fontSize: RF(16) }]}>
                        deep@gmail.com
</AppText>
                </AppView>
                <AppImage style={{ left: inbuiltstate.EditProfile ? 15 : 0, width: 100, height: 100, borderRadius: 50, }} source={inbuiltstate.imagepath ? { uri: inbuiltstate.imagepath } : profilePicture} />
                {inbuiltstate.EditProfile ?
                    <Touchable
                        onPress={() => openImage("profilechange")}
                    >
                        <AppImage style={{
                            width: 50,
                            height: 50,
                            marginTop: 70,
                            zIndex: 2,
                            right: 25,
                            // position: "absolute",
                            // backgroundColor: "red",
                            //  marginLeft: ,
                        }} source={camera_icon} />
                    </Touchable>
                    :
                    null
                }
            </AppView>

            <AppView style={[styles.defaultView,]}>
                <AppText style={[styles.defaultText, { fontSize: RF(18), textAlign: "left" }]}>
                    {Name}
                </AppText>
                <Input
                    placeholder={Enter_name}
                    maxLength={30}
                    errortext={inbuiltstate.firstnameError}
                    onChangeText={(text) => handlevalidate(text, "firstname")}
                    Inputcontainer={{
                        height: inbuiltstate.firstnameError ? height * 0.08 : height * 0.07,
                        marginTop: 10,
                    }}
                    value={inbuiltstate.firstname}
                    editable={inbuiltstate.EditProfile ? true : false}
                />
            </AppView>

            <AppView style={[styles.defaultView,]}>
                <AppText style={[styles.defaultText, { fontSize: RF(18), textAlign: "left" }]}>
                    {Email_address}
                </AppText>
                <Input
                    placeholder={Enter_email}
                    maxLength={255}
                    errortext={inbuiltstate.emailError}
                    onChangeText={(text) => handlevalidate(text, "email")}
                    Inputcontainer={{
                        height: inbuiltstate.emailError ? height * 0.08 : height * 0.07,
                        marginTop: 10,
                    }}
                    value={inbuiltstate.email.trim()}
                />
            </AppView>

            <AppView style={[styles.defaultView,]}>
                <AppText style={[styles.defaultText, { fontSize: RF(18), textAlign: "left" }]}>
                    {Mobile_Number}
                </AppText>
                <Input
                    placeholder={Enter_mobile}
                    maxLength={12}
                    errortext={inbuiltstate.mobilenumberError}
                    onChangeText={(text) => handlevalidate(text, "mobilenumber")}
                    Inputcontainer={{
                        height: inbuiltstate.mobilenumberError ? height * 0.08 : height * 0.07,
                        marginTop: 10,
                    }}
                    value={inbuiltstate.mobilenumber.trim()}
                />
            </AppView>
            <AppView style={{ width: width * 0.8, alignSelf: 'center', marginVertical: 5, }}>
                <AppText style={[styles.defaultText, { paddingBottom: 10, fontSize: RF(20), textAlign: "left", fontFamily: ROBOTO_BOLD, }]}>
                    {Location}
                </AppText>
            </AppView>
            <AppView style={{
                width: width * 0.8,
                alignSelf: 'center',
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginBottom: 30,
            }}>
                {
                    inbuiltstate.Locationarray.map(location => {
                        return (
                            <AppView style={[styles.defaultView,]}>
                                <AppText style={[styles.defaultText, { fontSize: RF(18), textAlign: "left" }]}>
                                    {location.type}
                                </AppText>
                                <Input
                                    value={location.address}

                                    Inputcontainer={{
                                        height: height * 0.07,
                                        marginTop: 10,
                                        // color:LIGHT_BROWN

                                    }}
                                    editable={false}
                                />
                            </AppView>

                        )
                    })

                }
            </AppView>

            {inbuiltstate.EditProfile ?
                <AppView style={{
                    width: width * 0.8,
                    alignSelf: 'center',
                    // marginVertical: 5,
                    alignItems: 'flex-end',
                }} >
                    <Touchable onPress={() => refBottomSheetStatic.current.open()} >
                        <AppText style={[styles.defaultText, { fontSize: RF(16), color: BLUE_LIGHT, textDecorationLine: "underline", }]}>
                            {Add_more}
                        </AppText>
                    </Touchable>

                </AppView>
                :
                null
            }
            {inbuiltstate.EditProfile ?
                <AppView style={{
                    width: width * 0.8,
                    alignSelf: 'center',
                    height: height * 0.2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: "pink",
                }} >
                    <SubmitButton
                        onPress={() => Submit()}
                        name={Save}
                    />

                </AppView>
                :

                null}


            {/* //******************  Bottom Sheet  *************************************/}

            <BottomSheet adr={refBottomSheetStatic} sheetHeight={hp(60)}>
                <AppView style={styles.staticContainerLayout}>
                    <AppView style={styles.staticHeaderWrapper}>
                        <AppView />
                        <AppText style={[styles.staticHeaderTxt]}>{location_details}</AppText>
                        <Touchable onPress={() => refBottomSheetStatic.current.close()}>
                            <AppImage source={cross_icon} resizeMode="contain"
                                style={{ width: wp(3), height: hp(2), }} />
                        </Touchable>
                    </AppView>
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <AppView style={[styles.defaultView, { marginTop: 20, }]}>
                            <Input
                                placeholder={Address}
                                maxLength={300}
                                errortext={inbuiltstate.addressError}
                                onChangeText={(text) => handlevalidate(text, "address")}
                                Inputcontainer={{
                                    height: inbuiltstate.addressError ? height * 0.08 : height * 0.07,
                                    marginTop: 10,
                                }}
                                value={inbuiltstate.address}

                            />
                        </AppView>
                        <AppView style={styles.mapView}>
                            <Maplist
                                mapstyle={styles.mapView}
                            />
                        </AppView>
                        <AppView style={[styles.defaultView,]}>

                            <Input
                                placeholder={Name_Address}
                                maxLength={30}
                                errortext={inbuiltstate.nameaddressError}
                                onChangeText={(text) => handlevalidate(text, "nameaddress")}
                                Inputcontainer={{
                                    height: inbuiltstate.nameaddressError ? height * 0.08 : height * 0.07,
                                    marginTop: 10,
                                }}
                                value={inbuiltstate.nameaddress}

                            />
                        </AppView>
                        <AppView style={{
                            width: width * 0.8,
                            alignSelf: 'center',
                            height: height * 0.15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // backgroundColor: "pink",
                        }} >
                            <SubmitButton
                                onPress={() => SubmitLocationDetails()}
                                name={Save}
                            />

                        </AppView>
                    </KeyboardAwareScrollView>
                </AppView>
            </BottomSheet>
        </Container>
    )



}