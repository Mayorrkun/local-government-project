import "../../css/user/usercomponents.css"
import Close from "../../media/close.png"
import {UsersPlus} from "@untitled-ui/icons-react";

export function ViewUser({handleShow}) {

    function onSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="back-blur">

            <div className="user-container">
                <div className="user-container-header">
                    <p className="user-container-p">
                        <UsersPlus />

                        User Details
                    </p>
                    <button onClick={handleShow}><img src={Close} alt="" className="close-icon"/></button>


                </div>
                <form onSubmit={onSubmit} className="user-form">
                    <p>
                        <label htmlFor="">First Name</label>
                        <span>Jane</span>
                    </p>
                    <p>
                        <label htmlFor="">Last Name</label>
                        <span>Doe</span>
                    </p>
                    <p>
                        <label htmlFor="">Email</label>
                        <span>janedoe@email.com</span>
                    </p>
                    <p>
                        <label htmlFor="">Phone Number</label>
                        <span>09090909090</span>
                    </p>
                    <p>
                        <label htmlFor="">Role</label>
                        <span>Staff</span>
                    </p>
                    <p>
                        <label htmlFor="">Status</label>
                        <span>Active</span>
                    </p>

                    <div className="button-section">
                        <button className="cancel" type="button" onClick={handleShow}>Cancel</button> <button className="submit" type="submit">Save</button>
                    </div>
                </form>

            </div>

        </div>
    )
}