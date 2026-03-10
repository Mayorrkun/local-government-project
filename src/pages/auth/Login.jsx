import {useAuth} from "./AuthContext.jsx";
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import "../../css/auth/login.css"
import Logo from "../../media/logo.png"
import {Validation} from "../../js/Validation.js";

export function Login(){
    const validate = (values) => {
        const errors = {};
        if(!values.email){
            errors.email = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Enter a valid email address";
        }

        if(values.password.length < 8){
            errors.password = "Minimum of 8 characters long";
        }
        return errors;
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit} = Validation(
        {email: '', password: ''}, validate);


return(
    <section className="user-login-section">
        <div className="user-form-container">

            <form className="user-login-form" onSubmit={handleSubmit(data => console.log(data), "/user-management")}>
                <img src={Logo} alt="sorry" className="logo"/>

                <h1>Log In</h1>
                <span className="desc">Welcome back! please enter your details.</span>

                <p className="input-holder">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email"/>
                    {touched.email && errors.email && <span className="error">{errors.email}</span>}

                </p>

                <p className="input-holder">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {touched.password && errors.password && <span className="error">{errors.password}</span>}

                </p>

                <p className="misc-p">
                    <label> <input type="checkbox"/>Remember for 30 days </label>

                    <a href="">Forgot password</a>

                </p>
                <p className="misc-p">
                    <label>Dont Have an Account ? <Link to="/register"> Register Here</Link> </label>
                </p>
                <button className="login-button">Sign in</button>

            </form>

        </div>


        {/*modern screen mockup*/}
        <div className="screen-mockup">

        </div>

</section>)

}