import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useForgotMutation } from '../redux/QueryAPi/auth';
import { forgotValidation } from '../Validation/auth';
import LoaderButton from '../CustomUi/LoaderButton';
import Toaster from '../CustomUi/Toaster';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [forgot,{isLoading,isError,isSuccess,data}]=useForgotMutation()
    const {values,errors,handleChange,handleSubmit,touched,handleBlur} = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: forgotValidation,
        onSubmit:async (values, { resetForm }) => {
            console.log(values);
            // Navigate to change password page or handle API request here
            await forgot(values)
            resetForm()
            // navigate('/auth/changepassword');
          
        }
    });

    useEffect(()=>{
        if(isSuccess && data?.status){
            toast.success(data?.message, {
                position: "bottom-right"
              })
        }
       
    },[data,isSuccess])
   
    return (
        <>
        
            <h2 className="mb-4">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email ? (
                        <div className="invalid-feedback">{errors.email}</div>
                    ) : null}
                </div>
                <LoaderButton type={'submit'} loading={isLoading} label={'submit'}/>
                {/* <button type="submit" className="btn btn-login" >
                    Submit
                </button> */}
                  {isError && (
                    <div className="alert alert-danger mt-3"> Please try again.</div>
                )}
            </form>
        </>
    );
};

export default ForgotPassword;
