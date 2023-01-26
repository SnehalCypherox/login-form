export const fnmValidator = (fnm) => {
    if (!fnm) {
        return 'Firstname is required'
    }
    return ''
}


export const lnmValidator = (lnm) => {
    if (!lnm) {
        return 'Lastname is required'
    }
    return "";
};

export const emailValidator = (email) => {
    if (!email) {
        return 'Email is required'
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return 'Incorrect Email Formate'
    }
    return "";
};

export const mobileValidator = (mobile) => {
    if (!mobile) {
        return 'Mobile Number is required'
    } 
    // else if (mobile.target.value.length > 10) {
    //     return 'Enter 10 digit number'
    // }
    return "";
};

export const pwdValidator = (pwd) => {
    if (!pwd) {
        return 'Email is required'
    } else if (pwd.target.value.length > 8) {
        return 'Password must be 8 character'
    }
    return "";
};