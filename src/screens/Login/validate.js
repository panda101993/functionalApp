
export function handleValidations(text, type) {
//    console.log("textype=>>",text, type)
    if (type === 'email') {
         let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,5})+$/i;
        if (text === '') {
            return {
                status: false,
                value: text,
                errorText: 'Please enter email address.'
            }
        }
        else if (!emailRegex.test(text)) {
            return {
                status: false,
                value: text,
                errorText:'Please enter valid email address'
            }  
        }
        else {
            // console.log("else case--->",(text).trim)
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    }else if(type === 'password') {
        // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: ' Please enter password.'
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
    } 
}
export function handleOTPValidations(text, type,index,prevInputRef,nextInputRef) {
    console.log("type of ",text, type,index,prevInputRef,nextInputRef)
    if (text === '') {
        prevInputRef.focus();
        return {
            status: false,
            value: text,
            errorText: '*required.'
        }
    } else {
        if (nextInputRef){
            nextInputRef.focus()
            return {
                value: text,
                status: true,
                errorText: ''
            }
        } else {
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
       
    }

}
