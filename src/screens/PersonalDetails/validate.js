

export function handleValidations(text, type) {
//    console.log("textype=>>",text, type)
    if (type === 'email') {
        let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,5})+$/i;
        if (text === '') {
            return {
                status: false,
                value: text,
                errorText: 'Please enter email.'
            }
        }
        else if (!emailRegex.test(text)){
            return {
                status: false,
                value: text,
                errorText:'Please enter valid email address.'
            }
        }
        else {
            // console.log("else case")
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    }else if (type === 'name') {
        let nameReg = /^[a-zA-Z ]+$/;
        if (text === '') {
            // console.log("ifelse case")
            return {
                value: text,
                status: false,
                errorText: 'Please enter name.'
            }
        }
        else if(!nameReg.test(text)){
            return {
                value: text,
                status: false,
                errorText: 'Special characters are not allowed.'
            }
        } 
        else if(text.length<2){
            return {
                value: text,
                status: false,
                errorText: 'Minimum length should be 2 characters.'
            }
        } 
        else {
            // console.log("else case")
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    }
    else if (type === 'phonenumber') {
        //var numberRegex = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
        //var numberRegex = /^[1-9][0-9]{9,12}$/;
        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter phone number.'
            }
        }
        // else if (!numberRegex.test(text)) {
        //     return {
        //         status: false,
        //         value: text,
        //         errorText:'Please enter valid phone number .'
        //     }
        // }
        else if(text.length<10){
            return {
                value: text,
                status: false,
                errorText: 'Minimum length should be 10 digits.'
            }
        } 
        else {
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    }else  if (type === 'password') {
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
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    } 
}