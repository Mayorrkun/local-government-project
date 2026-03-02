import Logo from "../../media/logo.png";
import Close from "../../media/close.png";
import "../../css/super-admin/Login.css"
export function SuperLogin() {
    return <section className="super-admin-login-section">
        <div className="super-admin-form-container">
            <button className="close"><img src={Close} alt="nope"/></button>
            <form action="" className="super-admin-login-form">
                <img src={Logo} alt="sorry" className="super-logo"/>

                <h1>Log in to your Account</h1>
                <span className="super-desc">Welcome back! please enter your details.</span>

                <p className="super-input-holder">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>

                </p>

                <p className="super-input-holder">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>

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