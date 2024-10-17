import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import LoaderButton from '../CustomUi/LoaderButton';
import { otpValidation } from '../Validation/auth';
import { getCookie, setCookie } from '../utils/Cookies';
import { useOtpMutation } from '../redux/QueryAPi/auth';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
    const navigate =useNavigate()
    const initialValues = {
        email:'',
        otp: ''
    };
const [otp,{data,isSuccess,isLoading,isError}]=useOtpMutation()
    const { values, errors, touched, handleSubmit, handleChange, handleBlur,setFieldValue } = useFormik({
        initialValues,
        validationSchema: otpValidation,
        onSubmit: async(values,{resetForm}) => {
            // OTP submission logic here
            console.log('Submitted OTP:', values);
            await otp(values)
            // resetForm()
        },
    });
useEffect(()=>{
  const res =   getCookie('email')
setFieldValue('email',res || '')
},[])
useEffect(() => {
    if (isError) {
        alert("Invalid");
    }
}, [isError]);
useEffect(()=>{
    if(isSuccess && data?.result){
            setCookie('token', data?.access_token);

        navigate('/dashboard')
    }
},[isSuccess,data])
    return (
        <>
            <h2 className="mb-4">Verify OTP</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Your Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {touched.email && errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="otp" className="form-label">OTP</label>
                    <input
                        type="text"
                        name="otp"
                        className={`form-control ${touched.otp && errors.otp ? 'is-invalid' : ''}`}
                        id="otp"
                        placeholder="Your OTP"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.otp}
                    />
                    {touched.otp && errors.otp && (
                        <div className="invalid-feedback">{errors.otp}</div>
                    )}
                </div>
                <LoaderButton type="submit" loading={isLoading} label="Verify OTP" />
            </form>
        </>
    );
}

export default VerifyOtp;
