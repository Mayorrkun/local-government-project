import Logo from "../media/logo.png"
import "../css/sidenav.css"
import Search from "../media/search.png"
import {Link} from "react-router-dom";

export default function SideNav() {

    return (<nav className="sidenav">
    <div className="sidenav-logo">
        <img src={Logo} alt=""/>
        <input type="search" placeholder="Search"/>
    </div>
        <ul className="sidenav-menu">
            <li>Home</li>
            <li>Dashboard</li>
            <li className="active" >Users management</li>
            <li>Role management</li>
        </ul>

        <div className="sidenav-end">
            <ul>
                <li>Settings</li>
                <li className="support">Support    <div className="online-status"><span></span>Online</div></li>
            </ul>
            <div className="nav-profile">
                <div>
                    <div className="pfp"></div>
                    <p>
                        <strong>Olivia Rhye</strong>
                        <span>olivia@Produqtedge.com</span>
                    </p>
                </div>
            </div>
        </div>
    </nav>)
}