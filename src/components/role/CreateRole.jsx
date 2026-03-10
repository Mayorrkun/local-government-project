import "../../css/role/rolecomponents.css"
import "../../css/role/roleprocesses.css"
import Close from "../../media/close.png"
import {UsersPlus, ChevronDown} from "@untitled-ui/icons-react";
import {userPermissions, rolePermissions} from "../../js/data.js";

export function CreateRole({handleShow}) {

    function onSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="back-blur">

            <div className="role-container">
                <div className="role-container-header">
                    <p className="role-container-p">
                        <UsersPlus />

                        Create Role
                    </p>
                    <button onClick={handleShow}><img src={Close} alt="" className="close-icon"/></button>


                </div>
                <form onSubmit={onSubmit} className="role-form">
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
                        <details className="permission-container-div">
                            <summary><span>User management</span> <ChevronDown className="arrow-down"/></summary>
                            <p>
                                {
                                    userPermissions.map(permission =>(
                                        <span key={permission.id}><input type="checkbox" className="permission-check" value={permission.title}/>{permission.title}</span>
                                    ))
                                }

                            </p>
                        </details>
                        <details className="permission-container-div">
                            <summary><span>Role management</span> <ChevronDown className="arrow-down"/></summary>
                            <p>
                                {
                                    rolePermissions.map(permission =>(
                                        <span key={permission.id}><input type="checkbox"/>{permission.title}</span>
                                    ))
                                }
                            </p>
                        </details>


                    </div>

                    <div className="button-section">
                        <button className="cancel" type="button" onClick={handleShow}>Cancel</button> <button className="submit" type="submit">Create Role</button>
                    </div>
                </form>

            </div>

        </div>
    )
}