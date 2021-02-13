
export function handleValidations(text, type) {

    if (type === 'email') {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
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
                errorText: 'Please enter email address.'
            }

        }
        else {

            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    } else if (type === 'firstname') {

        if (text === '') {

            return {
                value: text,
                status: false,
                errorText: 'Please enter name.'
            }
        }
        else if (text.length < 3) {
            return {
                value: text,
                status: false,
                errorText: 'Minimum length should be two.'
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
    else if (type === 'mobilenumber') {

        let phoneRegex = /^((?!(0))[0-9]{10})$/i;

        if (text === '') {
            return {
                value: text,
                status: false,
                errorText: 'Please enter mobile number.'
            }
        }
        else if (!phoneRegex.test(text)) {
            return {
                status: false,
                value: text,
                errorText: 'Please enter valid mobile number.'
            }

        }
        else {
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    }else if (type === 'address') {

        if (text === '') {

            return {
                value: text,
                status: false,
                errorText: 'Please enter address.'
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
    // else if (type === 'street') {

    //     if (text === '') {

    //         return {
    //             value: text,
    //             status: false,
    //             errorText: 'Please enter street.'
    //         }
    //     }
      

    //     else {

    //         return {
    //             value: text,
    //             status: true,
    //             errorText: ''
    //         }
    //     }
    // }
    // else if (type === 'city') {

    //     if (text === '') {

    //         return {
    //             value: text,
    //             status: false,
    //             errorText: 'Please enter city.'
    //         }
    //     }
      

    //     else {

    //         return {
    //             value: text,
    //             status: true,
    //             errorText: ''
    //         }
    //     }
    // }
    else   {

        if (text === '') {

            return {
                value: text,
                status: false,
                errorText: 'Please enter name address.'
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