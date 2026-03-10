import "../../css/auth/login.css"
import Logo from "../../media/logo.png";
import {Link} from "react-router-dom";
import {Validation} from "../../js/Validation.js";

export function Register() {

    const validate = (values) => {
        const errors = {};

        if(!values.full_name){
            errors.full_name = "Full name is required";
        }
        else if(values.full_name.length < 10){
            errors.full_name = "Full name is too short";

        }
        //
        if(!values.email){
            errors.email = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Enter a valid email address";
        }
        //
        if(!values.phone){
            errors.phone = "Phone number is required";
        }
        else if(!/^\d+$/.test(values.phone)){
            errors.phone = "Enter only numbers";
        }
        //

        if(!values.password){
            errors.password = "Password is required";
        }
        else if(values.password.length < 10){
            errors.password = "Password is too short";
        }
        //
        if(!values.password_confirmation){
            errors.password_confirmation = "Password confirmation is required";
        }
        else if(values.password_confirmation !== values.password){
            errors.password_confirmation = "Passwords do not match";
        }


        return errors;

    };

    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = Validation(
        {full_name:'', email:'', phone:'', password:'', password_confirmation:'' }, validate
    )
    return(
        <section className="user-login-section">
            <div className="user-form-container">

                <form className="user-login-form" onSubmit={handleSubmit(data => console.log(data), "/login")}>
                    <img src={Logo} alt="sorry" className="logo"/>

                    <h1>Create an Account</h1>
                    <span className="desc">Welcome back! please enter your details.</span>

                    <p className="input-holder">
                        <label htmlFor="full_name">Full Name</label>
                        <input name="full_name" type="text" id="full_name" value={values.full_name} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.full_name && errors.full_name && <span className="error">{errors.full_name}</span>}

                    </p>

                    <p className="input-holder">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.email && errors.email && <span className="error">{errors.email}</span>}

                    </p>
                    <p className="input-holder">
                        <label htmlFor="phone">Phone number</label>
                        <input name="phone" type="number" id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.phone && errors.phone && <span className="error">{errors.phone}</span>}

                    </p>

                    <p className="input-holder">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.password && errors.password && <span className="error">{errors.password}</span>}

                    </p>

                    <p className="input-holder">
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <input name="password_confirmation" type="password" id="password_confirmation" value={values.password_confirmation} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.password_confirmation && errors.password_confirmation && <span className="error">{errors.password_confirmation}</span>}

                    </p>
                    <p className="misc-p">
                        <label>Have an Account ? <Link to="/login"> Log in</Link> </label>
                    </p>
                    <button className="login-button">Register</button>

                </form>

            </div>


            {/*modern screen mockup*/}
            <div className="screen-mockup">

            </div>

        </section>)

}