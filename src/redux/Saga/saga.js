import { takeLatest, put } from 'redux-saga/effects';
import API from "../../restAPI/REST"
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOADER,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD,
  SAVE_USERINFO,
  SAVE_USERINFO_FAILURE,
  SAVE_USERINFO_SUCCESS,
  PHISICIAN_DATA,
} from '../Action/types';

// import { userDataModel } from '../../DataModel/models';
// import { GetUserProfileData, saveTestReportData, getTestReportData } from '../../utils/apiUtils';
// import { TestReportDataMapping } from '../../utils/helpers';

// Login
export function* signin(params) {
  yield put({ type: LOADER, loading: true })
  const res = yield API(params.payload, "/api/v1/user/login", 'POST')
//   if (res.status === 200) {
//     if (res.data.responseCode === 200) {
//       if (res.data.result._id !== undefined) {
//         const physicianData = yield API({ userId: res.data.result._id, limit: 50 }, "/api/v1/user/providerList", 'POST')
//         yield put({ type: PHISICIAN_DATA, payload: physicianData.data.cuponData })
//         yield put({ type: LOADER, loading: false })
//         yield put({ type: LOGIN_SUCCESS, payload: userDataModel(res.data.result), message: res.data.message, passCodeStatus: res.data.result.passCodeStatus })
//       }
//       else {
//         yield put({ type: LOADER, loading: false })
//         yield put({ type: LOGIN_PASSCODE, message: res.data.result })
//       }
//     }
//     else {
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: LOGIN_FAILURE, message: "Invalid credentials!" })
//     }
//   }
//   else {
//     yield put({ type: LOADER, loading: false })
//     yield put({ type: LOGIN_FAILURE, message: "User doesn't exist!" })
//   }
}

export function* Login() {
  try {
    yield takeLatest(LOGIN, signin);
  }
  catch (ex) {
    yield put({ type: LOGIN_FAILURE, message: ex })
  }
}

// verifyPasscode
// export function* verifyAndLogin(params) {
//   yield put({ type: LOADER, loading: true })
//   const res = yield API(params.payload, "/api/v1/user/verifyPassCode", 'POST')
//   if (res.status === 200) {
//     if (res.data.responseCode === 200) {
//       const physicianData = yield API({ userId: res.data.result._id, limit: 50 }, "/api/v1/user/providerList", 'POST')
//       yield put({ type: PHISICIAN_DATA, payload: physicianData.data.cuponData })
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: LOGIN_SUCCESS, payload: userDataModel(res.data.result), message: res.data.message, passCodeStatus: res.data.result.passCodeStatus })
//     }
//     else {
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: LOGIN_FAILURE, message: "Invalid credentials!" })
//     }
//   }
//   else {
//     yield put({ type: LOADER, loading: false })
//     yield put({ type: LOGIN_FAILURE, message: "User doesn't exist!" })
//   }
// }

// export function* VerifyAndLogin() {
//   try {
//     yield takeLatest(VERIFY_LOGIN_PASSCODE, verifyAndLogin);
//   }
//   catch (ex) {
//     yield put({ type: LOGIN_FAILURE, message: ex })
//   }
// }

// // Signup
// export function* signup(params) {
//   yield put({ type: LOADER, loading: true })
//   const res = yield API(params.payload, "/api/v1/user/user_signup", 'POST')
//   if (res.status === 200) {
//     if (res.data.responseCode === 200) {
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: SIGNUP_SUCCESS, payload: res.data.result, message: res.data.responseCode })
//     }
//     else {
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: SIGNUP_FAILURE, message: res.data.responseCode })
//     }
//   }
//   else {
//     yield put({ type: LOADER, loading: false })
//     yield put({ type: SIGNUP_FAILURE, message: res.data.responseCode ? res.data.responseCode : "" })
//   }
// }
// export function* SignUp() {
//   try {
//     yield takeLatest(SIGNUP, signup);
//   }
//   catch (ex) {
//     yield put({ type: SIGNUP_FAILURE, message: ex })
//   }

// }

// // Forgot password
// export function* forgotpassword(params) {
//   yield put({ type: LOADER, loading: true })
//   const res = yield API(params.payload, "/api/v1/user/forgotPassword", 'POST')
//   if (res.status === 200) {
//     if (res.data.responseCode === 200) {
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: FORGOT_PASSWORD_SUCCESS, message: res.data.responseMessage, payload: res.data.result })
//     }
//     else {
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: FORGOT_PASSWORD_FAILURE, message: res.data.responseMessage })
//     }
//   }
//   else {
//     yield put({ type: LOADER, loading: false })
//     yield put({ type: FORGOT_PASSWORD_FAILURE, message: res.data.responseMessage })
//   }
// }
// export function* ForgotPassword() {
//   try {
//     yield takeLatest(FORGOT_PASSWORD, forgotpassword);
//   }
//   catch (ex) {
//     yield put({ type: FORGOT_PASSWORD_FAILURE, message: ex })
//   }

// }

// //Saving New users Info
// export function* saveUserInfo(params) {
//   yield put({ type: LOADER, loading: true })
//   const res = yield API(params.payload, "/api/v1/user/addUserDetails", 'POST')
//   if (res.status === 200) {
//     if (res.data.responseCode === 200) {
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: SAVE_USERINFO_SUCCESS, payload: res.data.result, message: res.data.responseCode })
//     }
//     else {
//       yield put({ type: LOADER, loading: false })
//       yield put({ type: SAVE_USERINFO_FAILURE, message: res.data.responseCode })
//     }
//   }
//   else {
//     yield put({ type: LOADER, loading: false })
//     yield put({ type: SAVE_USERINFO_FAILURE, message: res.data.responseCode ? res.data.responseCode : "" })
//   }
// }
// export function* SaveUserInfo() {
//   try {
//     yield takeLatest(SAVE_USERINFO, saveUserInfo);
//   }
//   catch (ex) {
//     yield put({ type: SAVE_USERINFO_FAILURE, message: ex })
//   }
// }




