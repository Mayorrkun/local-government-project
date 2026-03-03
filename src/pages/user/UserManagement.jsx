import SideNav from "../../components/sidenav.jsx";
import "../../css/user/userprocess.css";
import {useState} from "react";
import {CreateUser} from "../../components/user/CreateUser.jsx";
export default function UserManagement() {

    const [show, setShow] = useState(true);

    function handleShow(){
        setShow(prevshow => !prevshow);
    }
    return(
        <section className="general-section">
            {show ? <CreateUser handleShow={handleShow} /> : null}
            <SideNav/>
            <main className="main-container">

            </main>
        </section>
    )
}