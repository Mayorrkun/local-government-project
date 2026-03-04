import SideNav from "../../components/sidenav.jsx";
import "../../css/user/userprocess.css";
import {useState} from "react";
import{CreateRole} from "../../components/role/CreateRole.jsx";

export default function RoleManagement() {

    const [show, setShow] = useState(true);

    function handleShow(){
        setShow(prevshow => !prevshow);
    }
    return(
        <section className="general-section">
            {show ? <CreateRole handleShow={handleShow} /> : null}
            <SideNav/>
            <main className="main-container">

            </main>
        </section>
    )
}