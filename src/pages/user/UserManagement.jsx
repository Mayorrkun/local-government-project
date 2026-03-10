import {users} from "../../js/data.js";
import SideNav from "../../components/sidenav.jsx";
import "../../css/user/userprocess.css";
import {useState} from "react";
import {CreateUser} from "../../components/user/CreateUser.jsx";
import {EditUser} from "../../components/user/EditUser.jsx";
import {ViewUser} from "../../components/user/ViewUser.jsx";
import {
    ChevronRight,
    Copy01,
    Share04,
    ChevronSelectorVertical,
    ArrowRight,
    ArrowLeft,
    DotsVertical,
    SearchLg, Plus
} from "@untitled-ui/icons-react";

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
                <tr key={user.id} style={{backgroundColor:(user.id % 2) === 0 ? "#FFFFFF": "#fafafa"}} >
                <td style={{color:"#000000", fontWeight:"500"}}><input id="selected-user" value={user.id} onChange={() => handleSelected(user.id)} type="checkbox"/> <span>{user.first_name} {user.last_name}</span></td>
                <td >{user.email}</td>
                <td style={{display:"flex"}}><span style={{backgroundColor:(user.status.toLowerCase() === "active" ? "#ebfac7" : (user.status.toLowerCase() === "inactive") ? "#ffefef" : null),
                    color: (user.status.toLowerCase() === "active" ? "#336C0D" : (user.status.toLowerCase() === "inactive") ? "#891810" : null),
                borderColor:(user.status.toLowerCase() === "active" ? "#336C0D" : (user.status.toLowerCase() === "inactive") ? "#891810" : null),
                    borderWidth:"1px",
                    borderStyle:"solid", padding:"5px 10px", borderRadius:"20px"}}>{user.status}</span></td>

                    <td>
                        <span>{user.role}</span></td>

                <td style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <span>{user.last_login}</span>
                    <button onClick={() => handleShowView(user.id)} style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}}>
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
        setShowCreate(prev => !prev);
    }

    console.log(selected)
    return(
        <section className="general-section">
            {showView ? <ViewUser handleShow={handleShowView} handleEditUser={handleEditUser} user={userShowed}/> : null}
            {showEdit ?<EditUser handleEditUser={handleEditUser} user={userShowed} /> : null}
            {showCreate? <CreateUser handleShowCreate={handleShowCreate}/> : null}
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

                </nav>
                <div className="users-info">
                    <p>Users</p>
                    <div>
                        <div className="users-search">
                            <SearchLg className="input-icon"/>
                            <input type="search" placeholder="Search"/>
                        </div>

                        <button onClick={handleShowCreate}>
                            <Plus style={{width:"20px",height:"20px" }}/> Create User
                        </button>
                    </div>

                </div>
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



                </div>
                {
                    users.length > 10 ? <div className="pagination-area">
                        <button onClick={handleprevious} disabled={firstPage}> <ArrowLeft style={{width:"16px", height:"16px"}} /> Previous</button>
                        <div className="pages">
                            {
                                Array.from({length:pages}).map((item, i) =>(
                                    <button disabled={(i+1) === currentPage} onClick={() => {setCurrentPage(i+1)}} >{i+1}</button>
                                ))
                            }
                        </div>
                        <button onClick={handlenext} disabled={lastPage}>Next<ArrowRight style={{width:"16px", height:"16px"}} /></button>
                    </div> : null
                }
            </main>
        </section>
    )
}