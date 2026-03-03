import "../../css/user/usercomponents.css"
import Close from "../../media/close.png"
export function CreateUser({handleShow}) {

    function onSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="back-blur">

            <div className="user-container">
                <div className="user-container-header">
                    <p className="user-container-p">
                    <span className="icon">

                    </span>
                        Create User
                    </p>
                    <button onClick={handleShow}><img src={Close} alt="" className="close-icon"/></button>


                </div>
                <form onSubmit={onSubmit} className="user-form">
                    <p>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="Enter First name"/>
                    </p>
                    <p>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Enter Last name"/>
                    </p>
                    <p>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter Email"/>
                    </p>
                    <p>
                        <label htmlFor="">Phone Number</label>
                        <input type="number" placeholder="Enter Phone Number"/>
                    </p>
                    <p>
                        <label htmlFor="">Role</label>
                        <select name="" id="">
                            <option disabled selected value="">Select Role</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="">Status</label>
                        <select name="" id="">
                            <option disabled selected value="">Select Status</option>
                        </select>
                    </p>

                    <div className="button-section">
                        <button className="cancel" type="button" onClick={handleShow}>Cancel</button> <button className="submit" type="submit">Create User</button>
                    </div>
                </form>

            </div>

        </div>
    )
}