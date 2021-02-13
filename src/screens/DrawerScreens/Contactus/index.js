import React, { useState, useEffect } from 'react';
import { Platform, Dimensions, Linking } from 'react-native';
import { Container } from '../../../components/Containers/index';
import { useSelector, useDispatch } from 'react-redux';
import { AppView, AppText, AppImage, Touchable, AppbackgraoundImage } from '../../../components/Atoms';
import styles from './style';
import { BORDER_GREY, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE, BLUE_LIGHT, GREY_ONE } from '../../../global/Colors';
import { App_store, Checkout_banner, dial, messagebox, play_store } from '../../../assets/Icon';
import { RF } from '../../../global/Responsive';
import { ROBOTO_BOLD, ROBOTO_REGULAR } from '../../../global/FontFamilies';
import { TextInput } from 'react-native-gesture-handler';
import { SubmitButton } from '../../../components/Molecules';
const { height, width } = Dimensions.get('window');

export default ContactUs = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state).reducer
    const {
        Contactus_status,
        Write_something,
        Contactus,
        SEND

    } = state.language.CONTACTUS
const[inbuilstate,setState]=useState({
comment:""

})


    const openLink = (type, ID) => {
        if (type == "Email") {
            Linking.openURL(`mailto:${ID}`)
        }
        else {
            Linking.openURL(`tel:${ID}`)
        }

    }
    const handleValidate = (text) => {
        if (text != "") {
            setState({
                ...inbuilstate, comment: text
            })
        }
        else {
            setState({
                ...inbuilstate, comment: ""
            })
        }

    }
    return (
        <Container scrollable backOnly title={Contactus} Containerlayout={[styles.containerLayout]} header={true} >
            <AppView style={styles.mainView}>

                <AppText style={[styles.defaultText, { textAlign: "center", fontSize: RF(17), fontFamily: ROBOTO_REGULAR, marginTop: 10, }]}>
                    {Contactus_status}
                </AppText>
            </AppView>
            <AppView style={[styles.defaultView, {
                flexDirection: 'column', marginTop: width * 0.08, justifyContent: 'space-between',
            }]}>
                <Touchable onPress={() => openLink("Email", "www.alafiame.com")} style={styles.defaultView}>
                    <AppView style={{ width: width * 0.12, }}>
                        <AppImage resizeMode="contain" style={{ width: width * 0.08, height: height * 0.03 }} source={messagebox} />
                    </AppView>

                    <AppText style={[styles.defaultText,]}>
                        www.alafiame.com
                    </AppText>
                </Touchable>
                <Touchable onPress={() => openLink("mobile", "9999999999999")} style={[styles.defaultView, { marginTop: 20, }]}>
                    <AppView style={{ width: width * 0.12, }}>
                        <AppImage resizeMode="contain" style={{ width: width * 0.08, height: height * 0.03 }} source={dial} />
                    </AppView>
                    <AppText style={[styles.defaultText]}>
                        9999999999999
                    </AppText>
                </Touchable>
            </AppView>

            <AppView>
                <TextInput style={{
                    borderWidth: 0.5,
                    borderColor: BORDER_GREY,
                    height: height * 0.18,
                    padding: 10,
                    width: width * 0.8,
                    alignSelf: 'center',
                    marginTop: width * 0.1,
                    color: BLACK_ONE
                }}
                    multiline={true}
                    value={inbuilstate.comment}
                    placeholder={Write_something}
                    placeholderTextColor={BORDER_GREY}
                    onChangeText={(text)=>handleValidate(text)}

                >
                </TextInput>
            </AppView>
            <AppView style={{
                height: height * 0.18,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'flex-end',
                // backgroundColor: "pink",

            }}
            >
                <SubmitButton
                btnLayout={{
                    opacity:inbuilstate.comment?null:0.5
                }}
                name={SEND}
                onPress={()=>alert("Sent successfully")}
                disabled={inbuilstate.comment?false:true}
                />
            </AppView>

        </Container>
    )
}