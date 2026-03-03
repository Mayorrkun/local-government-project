import {useAuth} from "./AuthContext.jsx";
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import "../../css/auth/login.css"
import Logo from "../../media/logo.png"
export function Login(){
    const {login} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
    }

return(
    <section className="user-login-section">
        <div className="user-form-container">

            <form className="user-login-form">
                <img src={Logo} alt="sorry" className="logo"/>

                <h1>Log In</h1>
                <span className="desc">Welcome back! please enter your details.</span>

                <p className="input-holder">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>

                </p>

                <p className="input-holder">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>

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