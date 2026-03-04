import "../../css/user/usercomponents.css"
import Close from "../../media/close.png"
import {UsersPlus} from "@untitled-ui/icons-react";

export function CreateRole({handleShow}) {

    function onSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="back-blur">

            <div className="user-container">
                <div className="user-container-header">
                    <p className="user-container-p">
                        <UsersPlus />

                        Create Role
                    </p>
                    <button onClick={handleShow}><img src={Close} alt="" className="close-icon"/></button>


                </div>
                <form onSubmit={onSubmit} className="user-form">
                    <p>
                        <label htmlFor="">Role Name</label>
                        <input type="text" placeholder="Enter Role name"/>
                    </p>
                    <p>
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" cols="30" rows="3" placeholder="Enter description"></textarea>
                    </p>

                    <div className="permission-container">
                        <span>Select Permissions</span>
                        <p className="permission-container-p">

                        </p>


                    </div>

                    <div className="button-section">
                        <button className="cancel" type="button" onClick={handleShow}>Cancel</button> <button className="submit" type="submit">Create User</button>
                    </div>
                </form>

            </div>

        </div>
    )
}