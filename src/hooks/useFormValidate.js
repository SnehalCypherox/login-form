import { useState } from "react"
import { fnmValidator, lnmValidator, emailValidator, pwdValidator, mobileValidator } from "../components/Validator"

const touchError = errors => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty: true,
        };
        return acc;
    }, {});
}

export const useFormValidate = (form) => {
    const [errors, setError] = useState(
        {
            fnm: { dirty: false, error: false, message: "" },
            lnm: { dirty: false, error: false, message: "" },
            email: { dirty: false, error: false, message: "" },
            mobile: { dirty: false, error: false, message: "" },
            pwd: { dirty: false, error: false, message: "" },

        });

    const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        let nextError = JSON.parse(JSON.stringify(errors));

        // force validate all fields
        if (forceTouchErrors) {
            nextError = touchError(errors);
        }

        const { fnm, lnm, email, mobile, pwd } = form;

        if (nextError.fnm.dirty && (field ? field === "fnm" : true)) {
            const fnmMsg = fnmValidator(fnm, form);
            nextError.fnm.error = !fnmMsg;
            nextError.fnm.message = fnmMsg;
            if (!fnmMsg) isValid = false;
        }

        if (nextError.lnm.dirty && (field ? field === "lnm" : true)) {
            const lnmMsg = lnmValidator(lnm, form);
            nextError.lnm.error = !lnmMsg;
            nextError.lnm.message = lnmMsg;
            if (!lnmMsg) isValid = false;
        }

        if (nextError.email.dirty && (field ? field === "email" : true)) {
            const emailMsg = emailValidator(email, form);
            nextError.email.error = !emailMsg;
            nextError.email.message = emailMsg;
            if (!emailMsg) isValid = false;
        }

        if (nextError.mobile.dirty && (field ? field === "mobile" : true)) {
            const mobileMsg = mobileValidator(mobile, form);
            nextError.mobile.error = !mobileMsg;
            nextError.mobile.message = mobileMsg;
            if (!mobileMsg) isValid = false;
        }

        if (nextError.pwd.dirty && (field ? field === "pwd" : true)) {
            const pwdMsg = pwdValidator(pwd, form);
            nextError.pwd.error = !pwdMsg;
            nextError.pwd.message = pwdMsg;
            if (!pwdMsg) isValid = false;
        }

        setError(nextError);

        return {
            isValid,
            errors: nextError,
        }
    }

    const onBlurField = (e) => {
        const field = e.target.name;

        const fieldError = errors[field];
        if (fieldError.dirty) return;

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };

        validateForm({ form, field, errors: updatedErrors });
    }

    return {
        validateForm,
        onBlurField,
        errors,
    }
}

