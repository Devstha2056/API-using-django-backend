const Validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name === "") {
        errors.name = "! Please fill in this field"
    }
    if (!values.email === "") {
        errors.email = "! Please fill in this field"

    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
    }


    if (!values.password === "") {
        errors.password = "! Please fill in this field"
    }

    else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(values.password)) {
        errors.password = "Password must contain at least one special character";
    }
    return errors;
}

export default Validate;