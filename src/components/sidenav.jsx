import Logo from "../media/logo.png"
import "../css/sidenav.css"
import {SearchLg, HomeLine,BarChartSquare01,Rows01,Users01} from "@untitled-ui/icons-react";
import {Link} from "react-router-dom";

export default function SideNav() {

    return (<nav className="sidenav">
    <div className="sidenav-logo">
        <img src={Logo} alt=""/>
        <div className="sidenav-logo-search">
            <SearchLg className="input-icon"/>
            <input type="search" placeholder="Search"/>
        </div>

    </div>
        <ul className="sidenav-menu">
            <li> <HomeLine/> Home</li>
            <li> <BarChartSquare01/> Dashboard</li>
            <li className="active" > <Users01/> Users management</li>
            <li> <Rows01/> Role management</li>
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