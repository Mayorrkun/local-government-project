import Logo from "../../media/logo.png";
import Close from "../../media/close.png";
import "../../css/super-admin/Login.css"
import {Validation} from "../../js/Validation.js";
export function SuperLogin() {
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


    return <section className="super-admin-login-section">
        <div className="super-admin-form-container">
            <button className="close"><img src={Close} alt="nope"/></button>
            <form action="" className="super-admin-login-form"  onSubmit={handleSubmit(data => console.log(data), "/user-management")}>
                <img src={Logo} alt="sorry" className="super-logo"/>

                <h1>Log in to your Account</h1>
                <span className="super-desc">Welcome back! please enter your details.</span>

                <p className="super-input-holder">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email"/>
                    {touched.email && errors.email && <span className="error">{errors.email}</span>}

                </p>

                <p className="super-input-holder">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {touched.password && errors.password && <span className="error">{errors.password}</span>}

                </p>

                <p className="misc-p">
                    <label> <input type="checkbox"/>Remember for 30 days </label>

                    <a href="">Forgot password</a>

                </p>
                <button className="login-button">Sign in</button>

            </form>

        </div>
    </section>
}