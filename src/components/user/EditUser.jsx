import "../../css/user/usercomponents.css"
import Close from "../../media/close.png"
import {UsersPlus} from "@untitled-ui/icons-react";
import{roles} from "../../js/data.js";

export function EditUser({handleEditUser, user}) {

    function onSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="back-blur">

            <div className="user-container">
                <div className="user-container-header">
                    <p className="user-container-p">
                        <UsersPlus />

                        Edit User
                    </p>
                    <button onClick={handleEditUser}><img src={Close} alt="" className="close-icon"/></button>


                </div>
                <form onSubmit={onSubmit} className="user-form">
                    <p>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder={user.first_name}/>
                    </p>
                    <p>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder={user.last_name}/>
                    </p>
                    <p>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder={user.email}/>
                    </p>
                    <p>
                        <label htmlFor="">Phone Number</label>
                        <input type="number" placeholder="Enter Phone Number"/>
                    </p>
                    <p>
                        <label htmlFor="">Role</label>
                        <select name="" id="">
                            <option selected value={user.role}>{user.role}</option>
                            {roles.filter(role => role.title !== user.role)
                                .map((role, index) => (
                                <option key={index} value={role.title}>{role.title}</option>
                            ))}
                        </select>
                    </p>
                    <p>
                        <label htmlFor="">Status</label>
                        <select name="" id="">
                            <option disabled selected value="">{user.status}</option>
                        </select>
                    </p>

                    <div className="button-section">
                        <button className="cancel" type="button" onClick={handleEditUser}>Cancel</button> <button className="submit" type="submit">Save</button>
                    </div>
                </form>

            </div>

        </div>
    )
}