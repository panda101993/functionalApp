// import React, { Component, useState, useEffect } from 'react';
// import { TextInput, View } from 'react-native';
// import { AppView, Touchable, AppText, AppImage,} from "../Components/Atoms/index";
// import style from '../styles';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { normalizeFont } from '../styles/responsive';
// import { BLACK } from '../styles/colors';


// //Google Places Autocomplete  Component
// export const AutoComplete = props => {
//     const {Inputcontainer} = props;
//     const [searchText, setSearchText] = useState("");
//     const handleSearch = (text) => {
//         setSearchText(text);
//         // console.log("Search_text=> ", text);
//         autoCompleteData(text);
//     }
//     const autoCompleteData = (text) => {
//         // console.log("REquest Data -->",text)
//         let myApiKey = "AIzaSyCm8rnRUZU0ecO8hpCF3KVANv9LmAXv0hc"
//         try {
//             fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?key='+ myApiKey + '&input=' + text)
//                 .then(resp => resp.json())
//                 .then(response => {
//                     // console.log("this is autocomplete_response=> ", response);
//                     if (response && response.predictions && response.predictions[0]) {
//                         props.handleAutoComplete({"status":"success","predictions":response.predictions});
//                     }
//                     else {props.handleAutoComplete({"status":"failed","predictions":[]}) }
//                 })
//                 .catch(err => { console.log("autocomplete_err=> ", err) })
//             props.handleAutoComplete({"status":"failed","predictions":[]});
//         }
//         catch (error) {
//             console.log("autocomplete_TRY_CATCh_err=> ", error)
//             props.handleAutoComplete({"status":"failed","predictions":[]});
//         }
//     }

//     return (
//         <View>
//             <TextInput
//                 style={{
//                     top: wp(23), fontSize: normalizeFont(16), left: wp(3),
//                     // fontFamily: "ProximaNova-Regular",
//                     width:wp(80),
//                     borderBottomWidth:1,
//                     borderBottomColor:BLACK
//                 }}
//                 placeholder="Search for area, street name..."
//                 placeholderTextColor="grey"
//                 onChangeText={text => handleSearch(text)}
//             >

//             </TextInput>
//         </View>
//     )
//     // return(
//     //     <AppView style={[style.Inputcontainer, Inputcontainer]}>
//     //         <AppView
//     //             style={[style.inputLayout, props.style]}>
//     //             <AppImage style={props.style} source={props.image} />
//     //             <TextInput
                   
//     //                 style={[style.textInput, props.textInput]}
//     //                 placeholder={"Search for area, street name..."}
//     //                 secureTextEntry={props.secure || false}
//     //                 editable={props.editable}
//     //                 onChangeText={text => handleSearch(text)}
//     //                 value={searchText}
//     //                 {...props}
//     //             />
//     //             {/* <Touchable onPress={props.onPress} >
//     //                 <AppImage style={props.eyestyle} source={props.eyeimage} />
//     //             </Touchable> */}
//     //         </AppView>
//     //         <AppView style={[style.ErrorLayout, props.Errorstyle]}>
//     //             <AppText style={style.Errortextstyle}>
//     //                 {props.errortext}
//     //             </AppText>
//     //         </AppView>
//     //     </AppView>
//     // )
// }

