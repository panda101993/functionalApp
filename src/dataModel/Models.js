// import { isNull } from "lodash";

// export const userDataModel = (data) => {
//     const {
//         email,firstName,lastName,profilePic,otpVerification,passCodeStatus,patientId,
//         phoneNumber,status,updatedAt,userAppId,userType,_id,addressLine1,addressLine2,
//         birthday,city,gender,notificationStatus,setPasscodeStatus,state,userId,zipCode,qrCode
//     } = data;
//     return {
//         email: email,
//         firstName: firstName,
//         lastName: lastName,
//         profilePicture: profilePic ? profilePic : "",
//         otpVerification: otpVerification,
//         passCodeStatus: passCodeStatus,
//         setPasscodeStatus:setPasscodeStatus,
//         notificationStatus:notificationStatus,
//         patientId: patientId,
//         phoneNumber: phoneNumber,
//         status: status,
//         updatedAt: updatedAt,
//         userAppId: userAppId,
//         userType: userType,
//         _id: _id,
//         addressLine1: addressLine1,
//         addressLine2: addressLine2,
//         birthday: birthday,
//         city: city,
//         gender: gender,
//         state: state,
//         userId: userId,
//         zipCode: zipCode,
//         qr: qrCode,
//     }
// }

// export const hospitalsDataModel = (item) => {
//     let hospitals = []
//     // console.log("item", item)
//     item.forEach(item => {
//         // console.log("asdasd",item,item.value[0])
//         let obj = {
//             id: item.key,
//             // logo: item[1].logo,
//             name: item.value[0].resource.name,
//             title: item.value[0].resource.name,
//             address: item.value[0].resource.address,
//             // // resource_url: item[1].resource_url,
//             city: item.value[0].resource.address[0].city,
//             details: `${item.value[0].resource.address[0].city, item.value[0].resource.address[0].line[0]}`,
//             line: item.value[0].resource.address[0].line[0],
//             postalCode: item.value[0].resource.address[0].postalCode,
//             state: item.value[0].resource.address[0].state
//         }
//         hospitals.push(obj);
//     });

//     // console.log(">>>>",hospitals)
//     return hospitals
// }


// const getAddressLine = (adr_data)=>{
//   if(typeof(adr_data) == 'string'){
//       return adr_data
//   }else{
//     return adr_data.join()
//   }
// }


// const getFullAddress = (_line, _city, _state, _country) => {
//     let rtnAdrArr = [_line, _city, _state, _country]
//     let rtnAdrStr = ''
//     let tmpArr = []
//     // console.log("rtnAdrArr-->",rtnAdrArr)
//     rtnAdrArr.forEach((ele) => {
//         if (ele == "" || ele == ","){
//         }else{
//             tmpArr.push(ele)
//         }
//     })
//     rtnAdrStr = tmpArr.length > 0 ? tmpArr.join(',') : ''
//     return rtnAdrStr;
// }

// const getImg = (ImgObj)=>{
//    if(!isNull(ImgObj) && ImgObj.extension && ImgObj.extension.length >0){
//        console.log("Image Object -->",ImgObj)
//        return {"uri":ImgObj.extension[0].valueUri}
//    }else{
//        return null
//    }
// }

// export const facilitiesDataModel = (data) => {
//     let hospitals = []
//     console.log("facilitiesDataModel", data)
//     // let withoutDuplicatedResults = []
//     // withoutDuplicatedResults.push(data[0])
//     // if(hospitals.length > 0){
//     //     hospitals.filter((ele)=> ele.ind != withoutDuplicatedResults[])
//     // }
//     data.map((ele,i) => {
//         let object = {}
//         const _city = ele.value[0].resource.address[0].city ? ele.value[0].resource.address[0].city : ""
//         const _address_line =  getAddressLine(ele.value[0].resource.address[0].line ? ele.value[0].resource.address[0].line:"")
//         const _state= ele.value[0].resource.address[0].state  ? ele.value[0].resource.address[0].state: ""
//         const _country= "USA"
//         // const _country
//         object.id = ele.key ? ele.key.toString() : ""
//         object.name = ele.value[0].resource.name ? ele.value[0].resource.name :""
//         object.city= _city
//         object.details = getFullAddress(_address_line,_city,_state,_country)
//         object.img =getImg(ele.value[0].resource ? ele.value[0].resource:null)
//         if (hospitals.length <= 10) {
//             hospitals[i]=object;
//         }
//         // console.log("--->",hospitals)
//     });
   
//     return hospitals
// }




// export const physicianDataModel = (data) => {
//     // console.log("physicianDataModel-->",data)
//     let physician = []
//     // console.log("item",item)
//     data.forEach(item => {
//         let telecom = Object.entries(item.resource.telecom)
//         let tempNumber = telecom.filter(item => item[1].system === "phone" && item[1].use === "work")
//         let obj = {
//             id: item.resource.id,
//             name: `${item.resource.name.given} ${item.resource.name.family}`,
//             fname: item.resource.name.given,
//             lname: item.resource.name.family,
//             state: item.resource.address[0].state,
//             city: item.resource.name.given,
//             line: `${item.resource.address[0].line[0]} ${item.resource.address[0].city}`,
//             country: item.resource.address[0].country,
//             phoneNumber: tempNumber[0][1]
//         }
//         physician.push(obj);
//     });
//     // console.log("physician", physician)
//     return physician
// }