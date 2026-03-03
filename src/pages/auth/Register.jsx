import "../../css/user/login.css"
import Logo from "../../media/logo.png";
import {Link} from "react-router-dom";
export function Register() {

    return(
        <section className="user-login-section">
            <div className="user-form-container">

                <form className="user-login-form">
                    <img src={Logo} alt="sorry" className="logo"/>

                    <h1>Create an Account</h1>
                    <span className="desc">Welcome back! please enter your details.</span>

                    <p className="input-holder">
                        <label htmlFor="full_name">Full Name</label>
                        <input name="full_name" type="text" id="full_name"/>

                    </p>

                    <p className="input-holder">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"/>

                    </p>
                    <p className="input-holder">
                        <label htmlFor="phone">Phone number</label>
                        <input type="text" id="phone"/>

                    </p>

                    <p className="input-holder">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password"/>

                    </p>

                    <p className="input-holder">
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <input name="password_confirmation" type="password" id="password_confirmation"/>

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