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

                </form>

            </div>

        </div>
    )
}