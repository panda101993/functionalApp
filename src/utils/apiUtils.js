// import { useDispatch } from 'react-redux';
// import API from "../RestAPI/rest"
// import { hospitalsDataModel, physicianDataModel, facilitiesDataModel } from "../DataModel/models"
// import { LoaderAction } from '../Redux/Action/action';


// //GET AuthToken 
// export const getAuthToken = () => {
//     return API({}, '/api/v1/user/getAuthToken', "GET")
//         .then(res => {
//             if (res.status === 200) {
//                 if (res.data.responseCode === 200) {
//                     console.log("res.data.token",res.data)
//                     return {"data":res.data.token,"status":"success"}
//                 }
//                 else {
//                     return {"data":"","status":"failure"}
//                 }
//             }
//             else {
//                 return {"data":"","status":"failure"}
//             }
//         })
//         .catch((err) => console.log(err))
// }



