import {users} from "../../js/data.js";
import SideNav from "../../components/sidenav.jsx";
import "../../css/user/userprocess.css";
import {useState} from "react";
import {CreateUser} from "../../components/user/CreateUser.jsx";
import {EditUser} from "../../components/user/EditUser.jsx";
import {ViewUser} from "../../components/user/ViewUser.jsx";
import {ChevronRight, Copy01, Share04, ChevronSelectorVertical, ArrowRight, ArrowLeft, DotsVertical} from "@untitled-ui/icons-react";

export default function UserManagement() {
    const itemsPerPage = 10;
    const pages = users.length / itemsPerPage;
    const [currentPage, setCurrentPage] = useState(1);
    const [showView, setShowView] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [selected, setSelected] = useState([]);
    const [userShowed, setUserShowed] = useState(null);
    const firstPage = currentPage === 1;
    const lastPage =  currentPage === pages
    function handleprevious(){
        firstPage ? null: setCurrentPage((prevPage) => prevPage - 1);
    }
    function handlenext(){
        lastPage ? null: setCurrentPage( (prevPage) => prevPage + 1);
    }
    function handleSelected(id){
       selected.includes(id) ?
            (
                setSelected(prevSelected => prevSelected.filter(item => item !== id))

            )
            :
            (
                setSelected(prevSelected => [...prevSelected, id ]
            )
            )
    }
    function paginate(){


        return users.slice((currentPage - 1)*itemsPerPage , itemsPerPage*currentPage).map(user => (
            <tr key={user.id}>
                <td style={{color:"#000000", fontWeight:"500"}}><input id="selected-user" value={user.id} onChange={() => handleSelected(user.id)} type="checkbox"/> <span onClick={() => handleShowView(user.id)}>{user.first_name} {user.last_name}</span></td>
                <td >{user.email}</td>
                <td><span>{user.status}</span></td>
                <td><span>{user.role}</span></td>
                <td style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <span>{user.last_login}</span>
                    <button style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}}>
                        <DotsVertical style={{width:"15px",height:"15px"}}/></button></td>
            </tr>
        ))
    }
    function handleShowView(id){
        const foundUser = users.find(user => user.id === id);
        setUserShowed(foundUser);
        setShowView(prev => !prev);
    }

    function handleEditUser(){
        setShowView(false);
        setShowEdit(prevShow => !prevShow);
    }
    function handleShowCreate(){

    }

    console.log(selected)
    return(
        <section className="general-section">
            {showView ? <ViewUser handleShow={handleShowView} handleEditUser={handleEditUser} user={userShowed}/> : null}
            {showEdit ?<EditUser handleEditUser={handleEditUser} user={userShowed} /> : null}
            <SideNav/>
            <main className="main-container">
                <nav className="main-nav">
                    <div>
                        <p>
                            <span></span>
                            Olivia Rhye
                            <ChevronRight className="arrow-right"/>
                            Users management </p>
                        <h2>Users management</h2>
                    </div>

                    <ul className="main-nav-end">
                        <li> <span className="green-dot"></span> What's new ?</li>
                        <li><Copy01 style={{width:"12px", height:"12px"}} />Copy link</li>
                        <li>Visit store <Share04 style={{width:"12px", height:"12px"}} /></li>
                    </ul>
                </nav>
                <div className="main-info"></div>
                <div className="main-table">
                    <div>

                    </div>
                    <table className="users-table">
                       <thead>
                       <tr>
                           <th><div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                               <input type="checkbox" ref={el => {
                                   if (el) el.indeterminate = true;
                               }}/> Selected ({selected.length}) <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/>
                           </div>
                               </th>
                           <th>Email Address <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                           <th>Account status <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                           <th>Role <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                           <th>Last Login <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>

                       </tr>
                       </thead>

                        <tbody>
                        {
                            paginate()
                        }
                        </tbody>
                    </table>

                    <div className="pagination-area">
                        <button onClick={handleprevious} disabled={firstPage}> <ArrowLeft style={{width:"16px", height:"16px"}} /> Previous</button>
                        <div className="pages">
                            {
                                Array.from({length:pages}).map((item, i) =>(
                                    <button disabled={(i+1) === currentPage} onClick={() => {setCurrentPage(i+1)}} >{i+1}</button>
                                ))
                            }
                        </div>
                        <button onClick={handlenext} disabled={lastPage}>Next<ArrowRight style={{width:"16px", height:"16px"}} /></button>
                    </div>
                </div>
            </main>
        </section>
    )
}