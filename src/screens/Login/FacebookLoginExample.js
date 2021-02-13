//***********Facebook Example Using Facebook Services **********************/



// import React, { useState, useEffect, useRef } from 'react';
// import { Platform, Dimensions } from 'react-native';

// import { Container, } from '../../components/Containers/index';

// import { useSelector, useDispatch } from 'react-redux';

// import AppIntroSlider from 'react-native-app-intro-slider';

// import { logo, banner_signup, tw_img, mail_img, fb_img } from "@Image/Icon"
// import { AppView, AppText, AppImage, Touchable, BottomSheet, SilentTouchable } from '../../components/Atoms';
// import { ShortButton, SubmitButton } from '@Component/Molecules';
// import {facebookService} from '../../services/FacebookService'
// import styles from './style';

// import { LIGHT_GREEN, LIGHT_BROWN, BLACK_ONE, LIGHT_YELLOW, WHITE_ONE } from '../../global/Colors';
// // import {  } from '../../Assets/Icon';

// // import { RF } from "@Global/Responsive";
// import { RF } from "../../global/Responsive";
// import { color } from 'react-native-reanimated';
// // import { BUTTON_SHORT } from '../../components/Molecules';
// const { height, width } = Dimensions.get('window');







// export default Signup = (props) => {
//   const dispatch = useDispatch()
//   const refBottomSheet = useRef();
//   const [profileDetails , setProfileDetails] = useState()
//   useEffect(()=>{loadData()},[])
//   // const state = useSelector(state => state).reducer
//   // const { } = state.language

//   async function loadData() {
//     const profile = await facebookService.fetchProfile()
//     setProfileDetails(profile)
//     console.log("Facebook Profile Details ==>",profile)
//   }
  
//   return (
//     <Container Containerlayout={[styles.containerLayout]} scrollable header={false} >
//       <AppView style={[styles.mainLayout]}>
//         <AppView style={styles.headerLayout}>
//           <AppView style={[styles.logoLayout]}>
//             <AppImage source={logo} style={[styles.logo]} resizeMode='contain' />
//           </AppView>
//           <AppView style={[styles.headerTitleLayout]}>
//             <AppText style={[styles.headerTxt]}>{"Continue as a guest"}</AppText>
//           </AppView>
//         </AppView>
//         <AppView style={[styles.bannerLayout]}>
//           <AppImage source={banner_signup} style={[styles.bannerImg]} />
//         </AppView>
//         <AppView style={[styles.pageMsgView]}>
//           <AppText style={[styles.pageMsgTxt]}>{"Glad to meet you"}</AppText>
//         </AppView>
//         <AppView style={[styles.btnView]}>
//           <SubmitButton
//             name='Sign up with Twitter'
//             enableImgLeft
//             // enableImgRight
//             source_one={tw_img}
//           // source_two={}
//           // onPress={() => alert("Skip")}
//           />
//         </AppView>
//         <AppView style={[styles.btnView]}>
//           <SubmitButton
//             name='Sign up with Facebook'
//             enableImgLeft
//             // enableImgRight
//             source_one={fb_img}
//           // source_two={}
//           // onPress={() => alert("Skip")}
//           />
//         </AppView>
//         <AppView style={[styles.otherSignupTxtLayout]}>
//           <AppText style={[styles.orTxt]}>{"or with Email"}</AppText>
//         </AppView>
//         <AppView style={[styles.btnView]}>
//           <SubmitButton
//             name='Sign up with Email'
//             enableImgLeft
//             // enableImgRight
//             source_one={mail_img}
//             // source_two={}
//             onPress={() => refBottomSheet.current.open()}
//           />
//         </AppView>
//         <AppView style={{
//           // backgroundColor: 'red',
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//           <AppView style={[styles.alreadyTxtLayout]}>
//             <AppText style={[styles.alreadyTxt]}>{'Already a member ?'}</AppText>
//           </AppView>
//           <SilentTouchable>
//             <AppText style={[styles.signinTxt]}>{" Sign in"}</AppText>
//           </SilentTouchable>
//         </AppView>
//         <BottomSheet adr={refBottomSheet}>
//           <AppView style={{}}>
//             <AppText>dsahdgjh</AppText>
//           </AppView>
//         </BottomSheet>

//     <AppView style={styles.container}>
//         {facebookService.makeLoginButton((accessToken) => {
//           console.log(accessToken)
//         })}
//       </AppView>
//       </AppView>

//     </Container>
//   )