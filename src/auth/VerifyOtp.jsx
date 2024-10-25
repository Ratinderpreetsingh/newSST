// import { useFormik } from 'formik';
// import React, { useEffect } from 'react';
// import LoaderButton from '../CustomUi/LoaderButton';
// import { otpValidation } from '../Validation/auth';
// import { getCookie, setCookie } from '../utils/Cookies';
// import { useOtpMutation } from '../redux/QueryAPi/auth';
// import { useNavigate } from 'react-router-dom';

// const VerifyOtp = () => {
//     const navigate =useNavigate()
//     const initialValues = {
//         email:'',
//         otp: ''
//     };
// const [otp,{data,isSuccess,isLoading,isError}]=useOtpMutation()
//     const { values, errors, touched, handleSubmit, handleChange, handleBlur,setFieldValue } = useFormik({
//         initialValues,
//         validationSchema: otpValidation,
//         onSubmit: async(values,{resetForm}) => {
//             // OTP submission logic here
//             await otp(values)
//             // resetForm()
//         },
//     });
// useEffect(()=>{
//   const res =   getCookie('email')
// setFieldValue('email',res || '')
// },[])
// useEffect(() => {
//     if (isError) {
//         alert("Invalid");
//     }
// }, [isError]);
// useEffect(()=>{
//     if(isSuccess && data?.result){
//             setCookie('token', data?.access_token);

//         navigate('/dashboard')
//     }
// },[isSuccess,data])
//     return (
//         <>
//             <h2 className="mb-4">Verify OTP</h2>
//             <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
//                         id="email"
//                         placeholder="Your Email"
//                         value={values.email}
//                         onChange={handleChange}
//                         onBlur={handleChange}
//                     />
//                     {touched.email && errors.email && (
//                         <div className="invalid-feedback">{errors.email}</div>
//                     )}
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="otp" className="form-label">OTP</label>
//                     <input
//                         type="text"
//                         name="otp"
//                         className={`form-control ${touched.otp && errors.otp ? 'is-invalid' : ''}`}
//                         id="otp"
//                         placeholder="Your OTP"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.otp}
//                     />
//                     {touched.otp && errors.otp && (
//                         <div className="invalid-feedback">{errors.otp}</div>
//                     )}
//                 </div>
//                 <LoaderButton type="submit" loading={isLoading} label="Verify OTP" />
//             </form>
//         </>
//     );
// }

// export default VerifyOtp;
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import LoaderButton from '../Custom_hooks/LoaderButton';
import { otpValidation } from '../Validation/auth';
import { getCookie, setCookie } from '../utils/Cookies';
import { useOtpMutation } from '../redux/QueryAPi/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerifyOtp = () => {
    const navigate = useNavigate();
    const [otp, { data, isSuccess, isLoading, isError }] = useOtpMutation();

    const initialValues = {
        email: getCookie('email') || '',
        otp: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: otpValidation,
        onSubmit: async (values, { setFieldError, resetForm }) => {
            try {
                await otp(values).unwrap();
                resetForm();
            } catch (error) {
                // Handle error response
                setFieldError('otp', 'Invalid OTP');
                toast.error("Invalid OTP");
            }
        },
    });
    useEffect(() => {
        if (isSuccess && data?.result) {
            console.log(data?.access_token)
            setCookie('token', data?.access_token);
            navigate('/dashboard');
        }
    }, [isSuccess, data, navigate]);

    return (
        <>
            <h2 className="mb-4">Verify OTP</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Your Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        readOnly
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="otp" className="form-label">OTP</label>
                    <input
                        type="text"
                        name="otp"
                        className={`form-control ${formik.touched.otp && formik.errors.otp ? 'is-invalid' : ''}`}
                        id="otp"
                        placeholder="Your OTP"
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.otp && formik.errors.otp && (
                        <div className="invalid-feedback">{formik.errors.otp}</div>
                    )}
                </div>
                <LoaderButton type="submit" loading={isLoading} label="Verify OTP" />
            </form>
        </>
    );
};

export default VerifyOtp;

