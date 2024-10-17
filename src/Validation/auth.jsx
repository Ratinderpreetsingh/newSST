// import {z} from 'zod'

// export const loginValidation =z.object({
//     email:z.string()
//             .email("Invalid email"),
//     password:z.string()
//             .min(6,"Password must be at least 6 characters long")
// })

import * as Yup from "yup"
export const loginValidation =Yup.object({
    email:Yup.string()
            .email("Invalid email")
            .required("Email is required"),
    password:Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .required("Password is required")
})

export const forgotValidation =Yup.object({
    email:Yup.string()
            .email("Invalid email")
            .required("Email is required"),

})

export const changePasswordValidation =Yup.object({
    
    password:Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .required("Password is required"),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'),null],"Password must match")
    .required("Please confirm your password")
})


export const otpValidation = Yup.object({
    otp: Yup.number()
        .typeError("Invalid OTP") // Use typeError for non-numeric values
        .required("OTP is required")
});
