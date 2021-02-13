import React, { useState, useEffect } from "react";
import { BackHandler, Alert } from "react-native";
import { AppView, Touchable, AppImage, AppText } from "../components/Atoms/index"
import styles from "../global/Style"
import { Actions } from "react-native-router-flux";
import { useSelector } from 'react-redux';
import { LIGHT_BROWN, LIGHT_GREEN } from "../global/Colors";
import { activebooking, activehome, activenotification, activeprofile, activerequest, inactivebooking, inactivehome, inactivenotification, inactiveprofile, inactiverequest } from "../assets/Icon";
import { widthPercentageToDP as wp} from "react-native-responsive-screen";
export default tabbar = () => {
    const state = useSelector(state => state).reducer;
    const {
        Your_Status,
        Donate_Plasma,
        Covid_19,
        Assess_Again


    } = state.language

    let [current, setCurrent] = useState(0);
    useEffect(() => {
        const backAction = () => {
            setCurrent(0), Actions.Home()
            // Alert.alert("Hold on!", "Are you sure you want to go back?", [
            //   {
            //     text: "Cancel",
            //     onPress: () => null,
            //     style: "cancel"
            //   },
            //   { text: "YES", onPress: () => BackHandler.exitApp() }
            // ]);

            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [])

    return (
        <AppView style={styles.tabbar}>
            <AppView style={styles.tabbarContainer}>
                <Touchable style={{ alignItems: 'center',width:wp("20%"), }}
                    onPress={() => { setCurrent(0), Actions.Home() }}
                >
                    <AppImage resizeMode="contain" source={current === 0 ? activehome : inactivehome} />
                    <AppText style={{ marginTop: 10, color: current === 0 ? LIGHT_GREEN : LIGHT_BROWN, fontSize: 14, }}>
                        Home
                   </AppText>
                </Touchable>
                <Touchable style={{ alignItems: 'center',width:wp("20%"),  }}
                    onPress={() => { setCurrent(1),Actions.Bookings() }}
                >
                    <AppImage resizeMode="contain" source={current === 1 ? activebooking : inactivebooking} />

                    <AppText style={{ marginTop: 10, color: current === 1 ? LIGHT_GREEN : LIGHT_BROWN, fontSize: 13, }}>
                        Bookings
                   </AppText>
                </Touchable>
                <Touchable style={{ alignItems: 'center',width:wp("20%"),  }}
                    onPress={() => { setCurrent(2), Actions.Requests() }}
                >
                    <AppImage resizeMode="contain" source={current === 2 ? activerequest : inactiverequest} />
                    <AppText style={{ marginTop: 10, color: current === 2 ? LIGHT_GREEN : LIGHT_BROWN, fontSize: 13, }}>
                        Requests
                   </AppText>
                </Touchable>
                <Touchable style={{ alignItems: 'center',width:wp("20%"),  }}
                    onPress={() => { setCurrent(3), Actions.Notifications() }}
                >
                    <AppImage resizeMode="contain" source={current === 3 ? activenotification : inactivenotification} />
                    <AppText style={{ marginTop: 10, color: current === 3 ? LIGHT_GREEN : LIGHT_BROWN, fontSize: 13, }}>
                        Notifications
                   </AppText>

                </Touchable>
                <Touchable style={{ alignItems: 'center',width:wp("20%"),  }}
                    onPress={() => { setCurrent(4), Actions.Profile() }}
                >
                    <AppImage resizeMode="contain" source={current === 4 ? activeprofile : inactiveprofile} />
                    <AppText style={{ marginTop: 10, color: current === 4 ? LIGHT_GREEN : LIGHT_BROWN, fontSize: 13, }}>
                        My profile
                   </AppText>

                </Touchable>
            </AppView>
        </AppView>
    )
}