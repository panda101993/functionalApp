// import React from 'react';
// import { Linking, Alert, Platform, PermissionsAndroid } from 'react-native';
// import AsyncStorage from "@react-native-community/async-storage";
// import Geolocation from '@react-native-community/geolocation';
// import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
// import { useDispatch, useSelector } from 'react-redux';
// import { FCMTokenAction, clearAction } from '../Redux/Action/action';
// import { useEffect } from 'react';


// //Offset of current country
// export var offset = new Date().getTimezoneOffset() * -1
// //formet date function-
// export const getFormattedDate = (str) => {
//   console.log("Date to formett-->", str)
//   if (str) {
//     try {
//       const d = new Date(str);
//       let day = d.getDate();
//       let month = d.getMonth() + 1;
//       let year = d.getFullYear();
//       if (day < 10) day = "0" + day;
//       if (month < 10) month = "0" + month;
//       return day + "-" + month + "-" + year;
//     } catch (e) {
//       console.log("date parse error ", e);
//       return str;
//     }
//   }
// };

// export const storeToLocal = (payload, Key, type) => {
//   let token = ''
//   return new Promise(async (resolve) => {
//     if (type == 'obj') {
//       try {
//         await AsyncStorage.setItem(Key, JSON.stringify(payload))
//         resolve("Success")
//       } catch (e) {
//         resolve("Failed")
//         console.log("Errror while storing token to local store.")
//       }
//     } else {
//       try {
//         await AsyncStorage.setItem(Key, payload)
//         resolve("Success")
//       } catch (e) {
//         resolve("Failed")
//         console.log("Errror while storing token to local store.")
//       }
//     }
//   })
// }

// export const fetchFromLocal = (Key) => {
//   return new Promise(async (resolve) => {
//     try {
//       await AsyncStorage.getItem(Key)
//         .then((res) => {
//           if (res !== null) {
//             resolve({ "status": "Success", "data": res })
//           } else {
//             resolve({ "status": "Success", "data": null })
//           }
//         })
//     } catch (e) {
//       // error reading value
//       resolve({ "status": "Failed", "data": err })
//       console.log("Error while fetching token from local store.", e)
//     }
//   })
// }

// //For getting Current Location
// export const getCurrentLocation = () => {
//   return new Promise(async (resolve, reject) => {
//     if (Platform.OS === 'ios') {
//       Geolocation.getCurrentPosition(
//         position => { resolve({ "status": "success", payload: position.coords }) },
//         error => { resolve({ "status": "failure", payload: error }) },
//         { enableHighAccuracy: false, timeout: 10000, }
//       );
//     } else {
//       const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         { 'title': 'Know-it App', 'message': 'Know-it App access to your location' })
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 })
//           .then(async data => {
//             if (data == "enabled" || data == "already-enabled") {
//               Geolocation.getCurrentPosition((result) => { resolve({ "status": "success", payload: result.coords }) }, (e) => { console.log("9090->", e) }, { timeout: 20000 });
//             }
//           }).catch(err => resolve({ "status": "failure", payload: err }));
//       } else { resolve({ "status": "permission declined", payload: {} }) }
//     }
//   })
// }

// // Dial Number Component
// export const callNumber = phone => {
//   // console.log('callNumber ----> ', phone);
//   let phoneNumber = phone;
//   if (Platform.OS !== 'android') {
//     phoneNumber = `telprompt:${phone}`;
//   }
//   else {
//     phoneNumber = `tel:${phone}`;
//   }
//   Linking.canOpenURL(phoneNumber)
//     .then(supported => {
//       if (!supported) {
//         Alert.alert('Phone number is not available');
//       } else {
//         return Linking.openURL(phoneNumber);
//       }
//     })
//     .catch(err => console.log(err));
// };

// export const TestReportDataMapping = (payload) => {
//   console.log("PAYLOAD @HELPER -->", payload)
//   if (payload.length > 0) {
//     let latestData = payload[0].testData
//     if (latestData.length > 0) {
//       let reportEntryList = latestData[0].entry
//       if (reportEntryList.length > 0) {
//         // let filterdata = reportEntryList.filter(id=>id.resource)
//         // console.log("Filter Data -->",filterdata)
//         let mappedData = reportEntryList.map((ele, ind) => {
//           ele = ele.resource
//           return {
//             id: ele.id,
//             type: ele.type ? ele.type : "Unknown",
//             status: ele.status ? ele.status : "Unknown",
//             resourceType: ele.resourceType ? ele.resourceType : "Unknown",
//             category: ele.category ? ele.category : "Unknown",
//             recordedDate: ele.recordedDate ? ele.recordedDate : "Unknown",
//             dataType: "APIdata",
//             substance: ele.substance ? typeof (ele.substance) == 'object' ?
//               ele.substance.text : ele.substance.length > 0 ?
//                 ele.substance[0].coding.length > 0 ?
//                   ele.substance[0].coding[0].display ?
//                     ele.substance[0].coding[0].display
//                     : "Unknown" : "Unknown" : "Unknown" : "Unknown"
//           }
//         })
//         return {
//           payload: mappedData,
//           status: true
//         }
//       } else { return { payload: [], status: false, msg: "Not found any latest entries" } }
//     } else { return { payload: [], status: false, msg: "No any latest data found" } }
//   } else { return { payload: [], status: false, msg: "Data not found" } }
// }



// export const routeMeHere = ({ lat, lng, details }) => {
//   const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
//   const latLng = `${lat},${lng}`;
//   const label = details;
//   const url = Platform.select({
//     ios: `${scheme}${label}@${latLng}`,
//     android: `${scheme}${latLng}(${label})`
//   });
//   Linking.openURL(url);
// }
