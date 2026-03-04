import SideNav from "../../components/sidenav.jsx";
import "../../css/user/userprocess.css";
import {useState} from "react";
import {CreateUser} from "../../components/user/CreateUser.jsx";
import {EditUser} from "../../components/user/EditUser.jsx";
import {ViewUser} from "../../components/user/ViewUser.jsx";
import {ChevronRight} from "@untitled-ui/icons-react";

export default function UserManagement() {

    const [show, setShow] = useState(true);

    function handleShow(){
        setShow(prevshow => !prevshow);
    }
    return(
        <section className="general-section">
            {show ? <ViewUser handleShow={handleShow} /> : null}
            <SideNav/>
            <main className="main-container">
                <nav className="main-nav">
                    <div>
                        <p><span></span>Olivia Rhye <ChevronRight/> Users management </p>
                        <h1>Users management</h1>
                    </div>
                </nav>
            </main>
        </section>
    )
}