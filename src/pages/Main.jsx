import {useState} from "react";
import {Login} from "./auth/Login.jsx";
import {Register} from "./auth/Register.jsx";
import {SuperLogin} from "./super-admin/Login.jsx";
import {Routes, Route} from 'react-router-dom'
import {Onboarding} from "./Onboarding.jsx";
import Home from "./user/Home.jsx";
import UserManagement from "./user/UserManagement.jsx";
import RoleManagement from "./user/RoleManagement.jsx";
export default function Main(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/super-admin/login' element={<SuperLogin/>}/>
            <Route path='/onboarding' element={<Onboarding/>}></Route>
            <Route path='/users-management' element={<UserManagement/>} />
            <Route path='/role-management' element={<RoleManagement/>} />
        </Routes>
   </>)

}