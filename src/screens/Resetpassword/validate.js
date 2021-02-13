let password=""
export function handleValidations(text, type) {
//    console.log("textype=>>",text, type)
if (type === 'password') {
    // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
    if (text === '') {
        return {
            value: text,
            status: false,
            errorText: 'Please enter new password.'
        }
    }else if(text.length<8){
        return {
            value: text,
            status: false,
            errorText: 'Minimum length should be 8 characters.'
        }
    } 
    else {
        password = text
        return {
            value: text,
            status: true,
            errorText: ''
        }
    }
} else if (type === 'confirmpassword') {
    // console.log("Password==>",password,"Confirm Password==>",text)
    if (text === '') {
        return {
            value: text,
            status: false,
            errorText: 'Please enter password again to confirm.'
        }
    } else if (password !== text) {
        return {
            value: text,
            status: false,
            errorText: "Password didn't match."
        }
    } else {
        return {
            value: text,
            status:true,
            errorText: ''
        }
    }
  } 
}

