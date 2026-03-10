import "../../css/user/usercomponents.css"
import Close from "../../media/close.png"
import {UsersPlus} from "@untitled-ui/icons-react";
import {rolePermissions, userPermissions} from "../../js/data.js";

export function EditRole({handleShow,role}) {

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
                    <button onClick={handleShow}><img src={Close} alt="" className="close-icon"/></button>


                </div>
                <form onSubmit={onSubmit} className="user-form">
                    <p>
                        <label htmlFor="">Role Name</label>
                        <input type="text" placeholder={role.title}/>
                    </p>
                    <p>
                        <label htmlFor="">Description</label>
                        <textarea>{role.description}</textarea>
                    </p>
                    <p>
                        <label htmlFor="">Permissions</label>
                        <span>Users Management</span>
                        <article className="permission-div">
                            {userPermissions.map(
                                permission => (
                                    <span className="permission" style={{display:"flex",alignItems:"center",gap:"5px"}} key={permission.id}>
                                        <input checked type="checkbox"/>
                                        {permission.title}
                                    </span>
                                )
                            )}
                        </article>
                        <span>Role Management</span>
                        <article className="permission-div">
                            {rolePermissions.map(
                                permission => (
                                    <span className="permission" style={{display:"flex",alignItems:"center",gap:"5px"}} key={permission.id}>
                                           <input checked type="checkbox"/> {permission.title}
                                    </span>
                                )
                            )}
                        </article>
                    </p>
                    <div className="button-section">
                        <button className="cancel" type="button" onClick={handleShow}>Cancel</button> <button className="submit" type="submit">Edit</button>
                    </div>
                </form>


            </div>

        </div>
    )
}