// import Geocoder from 'react-native-geocoding';
// import chalk from 'chalk';
// const mapKey = "AIzaSyCm8rnRUZU0ecO8hpCF3KVANv9LmAXv0hc"
// Geocoder.init(mapKey);  //Google API for geocoding.

// /*
//   1. For getting lat and long Type of req must be string. e.g --> "full address",
//   2. For getting address the type of request must be an array. e.g. --> [lat,long]

//   e.g.
//    1. GetLatLong("61,church-street,Chicago").then(res => if(res.status == 'success'){
//          console.log("Respomse --=>",res.data)
//        })
//    2. GetLatLong([28.62,77.23]).then(res => if(res.status == 'success'){
//         console.log("Respomse --=>",res.data)
//        })
// */

// export const GetLatLong = (req) => {
//     let response = {};
//     // console.log("Request data for geocoding-->", req)
//     return new Promise((resolve) => {
//         if (typeof req == 'string') {
//             Geocoder.from(req)
//                 .then(json => {
//                     response = json.results[0].geometry.location;
//                     resolve({ "data": response, "status": 'success' })
//                 })
//                 .catch(err =>
//                     resolve({ "data": err, "status": 'failure' })
//                 );
//         } else {
//             Geocoder.from(req)
//                 .then(json => {
//                     response = json.results[0].address_components[0];
//                     resolve({ "data": response, "status": 'success' })
//                 })
//                 .catch(err =>
//                     resolve({ "data": err, "status": 'failure' })
//                 );
//         }
//         // console.log('coords Issue :1', resp);
//         return response
//     });
// }

// export const GetLatLongGroup = (addresses,callback) => {
//     var coords = [];
//     for(var i = 0; i < addresses.length; i++) {
//         let currAddress = addresses[i];
//         // console.log('final>1',currAddress);
//         Geocoder.from(currAddress.details).then(resp=>{
//             if (resp.status === 'OK' ) {
//                 callback({...currAddress,"coords":resp.results[0].geometry.location,})
//             }
//         })
//         }
     
//   }


// export default function AddressExtracter(myLat, myLong) {  //Address Component It provides formetted address by taking lat long.
//     return new Promise((resolve, reject) => {

//         // let myApiKey = "AIzaSyCm8rnRUZU0ecO8hpCF3KVANv9LmAXv0hc";
//         fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + myLat + ',' + myLong + '&key=' + mapKey)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 let autoFormettedAddress = responseJson.results[0].formatted_address
//                 if (responseJson && responseJson.results && responseJson.results[0]) {
//                     let len = responseJson.results[0].address_components.length;
//                     var zip = "";
//                     let state = "";
//                     let country1 = "";
//                     let countryIsoCode = "";
//                     let city1 = "";
//                     let locality = "";
//                     let street_number = "";
//                     let route = "";
//                     for (let i = 0; i < len; i++) {
//                         let component = responseJson.results[0].address_components[i];
//                         if (component) {
//                             if (component.types.includes("administrative_area_level_1")) {
//                                 state = component.long_name;
//                             } else if (component.types.includes("country")) {
//                                 country1 = component.long_name;
//                                 countryIsoCode = component.short_name;
//                             } else if (component.types.includes("postal_code")) {
//                                 zip = component.long_name;
//                             } else if (component.types.includes("administrative_area_level_2")) {
//                                 city1 = component.long_name;
//                             } else if (component.types.includes("locality")) {
//                                 city1 = component.long_name;
//                                 locality = component.long_name;
//                             } else if (component.types.includes("sublocality")) {
//                                 city1 = component.long_name;
//                             } else if (component.types.includes("street_number")) {
//                                 street_number = component.long_name;
//                             } else if (component.types.includes('route')) {
//                                 route = component.long_name;
//                             }
//                             let formettedAddress = {  //Custom Address 
//                                 "state": state,
//                                 "country": country1,
//                                 "countryIsoCode": countryIsoCode,
//                                 "city1": city1,
//                                 "locality": locality,
//                                 "postal_code": zip,
//                                 "street_number": street_number,
//                                 "route": route
//                             }
//                             if (i == len - 1) {
//                                 resolve({ "status": "Success", data: { "CustomAddress": formettedAddress, "AutoFormetted": autoFormettedAddress } })
//                             }
//                         } else { //Formetted Address 
//                             let formettedAddress = {
//                                 "state": state,
//                                 "country": country1,
//                                 "countryIsoCode": countryIsoCode,
//                                 "city1": city1,
//                                 "locality": locality,
//                                 "postal_code": zip,
//                                 "street_number": street_number,
//                                 "route": route
//                             }
//                             if (i == len - 1) {
//                                 reject({ "status": "failed", data: { "CustomAddress": formettedAddress, "AutoFormetted": autoFormettedAddress } })
//                             }
//                         }
//                     }
//                 } else { reject({ "status": "failed", data: { "CustomAddress": null, "AutoFormetted": null } }) }
//             })
//     })

// }




