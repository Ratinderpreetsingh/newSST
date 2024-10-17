import { Link, useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import { useFormik } from "formik";
import { loginValidation } from "../Validation/auth";
import { getCookie, removeCookie, setCookie } from "../utils/Cookies";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../redux/QueryAPi/auth";
import LoaderButton from "../CustomUi/LoaderButton";

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [isShow,setShow]=useState(false)
    const [login, { isSuccess, isLoading, isError, data }] = useLoginMutation();

    const initialValues = {
        email: '',
        password: '',
    };
    console.log(data, "data")
    const navigate = useNavigate();

    const { values, errors, touched, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues,
        validationSchema: loginValidation,
        onSubmit: (values) => {
            if (!values.email || !values.password) {
                alert("Fill Credentials ")
                return
            }
            login(values);
        },
    });
    useEffect(() => {
        if (data?.result === false) {
            alert("Invalid");
        }
    }, [data]);

    useEffect(() => {
        const authData = JSON.parse(getCookie('auth'));
        if (authData) {
            setFieldValue('email', authData.email || '');
            setFieldValue('password', authData.password || '');
        }
    }, [setFieldValue]);

    useEffect(() => {

        if (isSuccess && data?.status) {
            // setCookie('token', data?.access_token);
            setCookie('email', values?.email);

            if (rememberMe) {
                setCookie('auth', JSON.stringify(values));
            } else {
                removeCookie('auth');
            }
            navigate('/auth/verify-otp');
        }
    }, [isSuccess, data, rememberMe, navigate, values]);

    return (
        <>
            <h2 className="mb-4">Log In to PSG</h2>
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
                <div className="mb-3" style={{position:'relative'}}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type={isShow ? 'text':'password' }
                        name="password"
                        className={`form-control   ${touched.password && errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                  { values.password&& <i className={`bi ${isShow?"bi-eye" : "bi-eye-slash"}`} onClick={()=>setShow(!isShow)} style={{position:'absolute',top:'39px',right:'15px',cursor:'pointer'}}></i>}
                    {touched.password && errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                    )}
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="keepLoggedIn"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label className="form-check-label" htmlFor="keepLoggedIn">Keep me logged in</label>
                    <Link to="/auth/forgot" className="float-end">Forgot Password</Link>
                </div>
                {/* <button type="submit" className=" btn-login" style={{padding:'5px',border:'none'}} disabled={isLoading}>
                    { isLoading ? "Logging in..." : "Login"}
                </button> */}
                <LoaderButton type={"submit"} loading={isLoading} label={"Login"}/>
                {isError && (
                    <div className="alert alert-danger mt-3">Login failed. Please try again.</div>
                )}
            </form>
        </>
    );
};

export default Login;
