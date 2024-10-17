import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import LoaderButton from '../CustomUi/LoaderButton';
import { changePasswordValidation } from '../Validation/auth';
import { useChangepasswordMutation } from '../redux/QueryAPi/auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ChangePassword = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token'); // Get the token from the URL
    const initialValues = {
        password: '',
        confirmPassword: '' ,
        token:token
    };
  
 const[changepassword,{isSuccess,data,isLoading}]=useChangepasswordMutation()
    const { values, errors, handleChange, handleSubmit, handleBlur, touched, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: changePasswordValidation,
        onSubmit: async(values) => {
            console.log(values);
           await changepassword(values)
            resetForm();  // Fixed typo from resetform to resetForm
            navigate('/auth/login')

        }
    });
//   useEffect(()=>{
//     navigate('/auth/login')
//   },[isSuccess,data?.status])
    return (
        <>
            <h2 className="mb-4">Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>  
                    <input
                        type="password"  // Fixed input type from 'passowrd' to 'password'
                        name="password"  // Fixed name from 'passowrd' to 'password'
                        className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`} // Added conditional class for invalid feedback
                        id="password"  // Fixed id
                        placeholder="Your Password"  // Fixed placeholder
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {touched.password && errors.password ? (
                        <div className="invalid-feedback">{errors.password}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>  
                    <input
                        type="password"
                        name="confirmPassword"  // Fixed name from 'confirmPassowrd' to 'confirmPassword'
                        className={`form-control ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''}`} // Added conditional class for invalid feedback
                        id="confirmPassword"  // Fixed id
                        placeholder="Your Confirm Password"  // Fixed placeholder
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}  // Fixed value reference
                    />
                    {touched.confirmPassword && errors.confirmPassword ? (  // Added error message for confirm password
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                    ) : null}
                </div>
                <LoaderButton type={'submit'} label={'Submit'} loading={isLoading}/>
                {/* <button type="submit" className="btn btn-login">
                    Submit
                </button> */}
            </form>
        </>
    );
}

export default ChangePassword;
