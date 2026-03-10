import Logo from "../media/logo.png"
import "../css/sidenav.css"
import {SearchLg, HomeLine,BarChartSquare01,Rows01,Users01,PieChart03,CheckDone01} from "@untitled-ui/icons-react";
import {Link, useLocation} from "react-router-dom";

export default function SideNav() {
    const path = useLocation().pathname;

    function isActive(pathMatch){
        if(pathMatch === "/"){
            return path === "/";
        }
        return path.startsWith(pathMatch);
    }

    return (<nav className="sidenav">
    <div className="sidenav-logo">
        <img src={Logo} alt=""/>
        <div className="sidenav-logo-search">
            <SearchLg className="input-icon"/>
            <input type="search" placeholder="Search"/>
        </div>

    </div>
        <ul className="sidenav-menu">
            <li><Link  className={isActive("/home") ? "active": ""} to="/"><HomeLine/> Home</Link> </li>
            <li><Link  className={isActive("/dashboard") ? "active": ""} to="/"><BarChartSquare01/> Dashboard</Link> </li>
            <li><Link  className={isActive("/user-management") ? "active": ""} to="/user-management"><Users01/> Users management</Link></li>
            <li><Link  className={isActive("/role-management") ? "active": ""} to="/role-management"><Rows01/> Role management</Link> </li>
            <li><Link  className={isActive("/audit-logs") ? "active": ""} to="/audit-logs"><CheckDone01/> Audit Logs</Link> </li>
            <li><Link  className={isActive("/company-management") ? "active": ""} to="/company-management"><PieChart03/> Company management</Link> </li>
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