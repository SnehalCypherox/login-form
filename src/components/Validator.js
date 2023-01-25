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

export const mobile = (mobile) => {
    if (!mobile) {
        return 'Mobile Number is required'
    } else if (!new /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(email)) {
        return 'Incorrect Mobile Formate'
    } else if (length.toFixed(10)) {
        return "mobile number must be in 10 digits"
    }
    return "";
};

export const pwd = (pwd) => {
    if (!pwd) {
        return 'Email is required'
    } else if (length.toFixed(8)) {
        return 'Enter 8 digit password'
    }
    return "";
};