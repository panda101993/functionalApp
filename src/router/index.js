
import React, { useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';
import { Router, Stack, Scene, Drawer, } from 'react-native-router-flux';
const { height, width } = Dimensions.get('window');

//Auth Screens 
import Tutorial from '@Screen/Tutorials';
import Login from "@Screen/Login";
import Options from "@Screen/Options";
// import CreateAccount from "@Screen/CreateAccount";
import EmailVerify from "@Screen/EmailVerify";
import ForgotPassword from "@Screen/Forgotpassword";
import ResetPassword from "@Screen/Resetpassword";
import Qualification from '../screens/Qualification/index';
import PersonalDetails from "@Screen/PersonalDetails";
import RegistrationDetails from "@Screen/RegistrationDetails";
import RequestSent from "@Screen/RequestSent";




//Drawer Screens 
import Drawernav from "./Drawer";
import Checkout from "../screens/DrawerScreens/Checkout/index"
import PrivacyPolicy from '../screens/DrawerScreens/Privacypolicy/index';
import Termscondition from '../screens/DrawerScreens/Termscondition/index';
import FAQ from '../screens/DrawerScreens/FAQ/index';
import Contactus from '../screens/DrawerScreens/Contactus/index';
import MessageInbox from '../screens/DrawerScreens/Messages/Messageinbox/index';
import Chatscreen from '../screens/DrawerScreens/Messages/Chatscreen/index';
import ChangePassword from '../screens/DrawerScreens/Changepassword/index';
import Earnings from '../screens/DrawerScreens/Earnings/index';


//Tabs
import tabBar from './tabBar';
import Notifications from '../screens/Tabs/Notifications/index';
import Home from "../screens/Tabs/Home/index";
import OnWayTrack from "../screens/Tabs/OnWayTrack/index";
import Profile from '../screens/Tabs/Profile/index';
import Requests from '../screens/Tabs/Requests/index';
import Bookings from '../screens/Tabs/Bookings/index';
import Details from "../screens/Tabs/Commondetails/index"

import { useDispatch } from 'react-redux';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';




let notificationData = {}

const Navigation = (props) => {
    const dispatch = useDispatch()

    return (
        <>
            <Router >
                <Stack>
                    <Scene panHandlers={null} hideNavBar key="Tutorial" component={Tutorial} />
                    <Scene panHandlers={null} hideNavBar key="Options" component={Options} />
                    <Scene panHandlers={null} hideNavBar key="Qualification" component={Qualification} />
                    <Scene panHandlers={null} hideNavBar key="Login" component={Login} />
                    <Scene panHandlers={null} hideNavBar key="PersonalDetails" component={PersonalDetails} />
                    <Scene panHandlers={null} hideNavBar key="RegistrationDetails" component={RegistrationDetails} />
                    <Scene panHandlers={null} hideNavBar key="ForgotPassword" component={ForgotPassword} />
                    <Scene panHandlers={null} hideNavBar key="EmailVerify" component={EmailVerify} />
                    <Scene panHandlers={null} hideNavBar key="ResetPassword" component={ResetPassword} />
                    <Scene panHandlers={null} hideNavBar key="RequestSent" component={RequestSent} />



                    <Scene panHandlers={null} hideNavBar key="Checkout" component={Checkout} />
                    <Scene panHandlers={null} hideNavBar key="PrivacyPolicy" component={PrivacyPolicy} />
                    <Scene panHandlers={null} hideNavBar key="TermsCondition" component={Termscondition} />
                    <Scene panHandlers={null} hideNavBar key="FAQ" component={FAQ} />
                    <Scene panHandlers={null} hideNavBar key="ContactUs" component={Contactus} />
                    <Scene panHandlers={null} hideNavBar key="MessageInbox" component={MessageInbox} />
                    <Scene panHandlers={null} hideNavBar key="Chatscreen" component={Chatscreen} />
                    <Scene  panHandlers={null} hideNavBar key="ChangePassword" component={ChangePassword} />
                    <Scene panHandlers={null} hideNavBar key="Earnings" component={Earnings} />


                    {/* <Scene panHandlers={null} hideNavBar key="OnWayTrack" component={OnWayTrack} /> */}


                    <Scene panHandlers={null} hideNavBar key="Details" component={Details} />


                    <Scene initial drawer panHandlers={null} key='drawer' contentComponent={Drawernav}
                        hideNavBar onClose={() => closeDrawer()}
                        panHandlers={null}
                        panHandlers={null}
                        openDrawerOffset={0.2}
                        panOpenMask={0.20}
                        drawerWidth={wp("80%")}
                    >

                        <Scene panHandlers={null} key='tabBar' tabs hideNavBar
                            tabBarComponent={tabBar}
                        >

                            <Scene panHandlers={null} hideNavBar key="Home" component={Home} />
                            <Scene panHandlers={null} hideNavBar key="Bookings" component={Bookings} />
                            <Scene panHandlers={null} hideNavBar key="Requests" component={Requests} />
                            <Scene panHandlers={null} hideNavBar key="Notifications" component={Notifications} />
                            <Scene panHandlers={null} hideNavBar key="Profile" component={Profile} />
                        </Scene>
                    </Scene>
                </Stack>

            </Router>
        </>
    )

}

export default Navigation
