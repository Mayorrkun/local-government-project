import "../../css/user/userprocess.css"
export function CreateUser() {

    function onSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="back-blur">

            <div className="user-container">
                <p>

                </p>
                <form onSubmit={onSubmit} className="user-form">

                </form>

            </div>

        </div>
    )
}