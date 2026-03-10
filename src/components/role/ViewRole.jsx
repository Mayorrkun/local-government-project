import "../../css/user/usercomponents.css"
import Close from "../../media/close.png"
import {UsersPlus} from "@untitled-ui/icons-react";
import {userPermissions,rolePermissions} from "../../js/data.js";

export function ViewRole({handleShow, role, handleEdit}) {

    function onSubmit(e){
        e.preventDefault();
        handleEdit(role);

    }
    return(
        <div className="back-blur">

            <div className="user-container">
                <div className="user-container-header">
                    <p className="user-container-p">
                        <UsersPlus />

                        Role Details
                    </p>
                    <button onClick={handleShow}><img src={Close} alt="" className="close-icon"/></button>


                </div>
                <form onSubmit={onSubmit} className="user-form">
                    <p>
                        <label htmlFor="">Role Name</label>
                        <span>{role.title}</span>
                    </p>
                    <p>
                        <label htmlFor="">Description</label>
                        <span>{role.description}</span>
                    </p>
                    <p>
                        <label htmlFor="">Permissions</label>
                        <span>Users Management</span>
                        <article className="permission-div">
                            {userPermissions.map(
                                permission => (
                                    <span className="permission" key={permission.id}>
                                        {permission.title}
                                    </span>
                                )
                            )}
                        </article>
                        <span>Role Management</span>
                        <article className="permission-div">
                            {rolePermissions.map(
                                permission => (
                                    <span className="permission" key={permission.id}>
                                        {permission.title}
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