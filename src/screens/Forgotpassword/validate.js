
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
    }
}

