import {roles, users} from "../../js/data.js";
import SideNav from "../../components/sidenav.jsx";
import "../../css/user/userprocess.css";
import {useState} from "react";
import {CreateUser} from "../../components/user/CreateUser.jsx";
import {EditUser} from "../../components/user/EditUser.jsx";
import {ViewUser} from "../../components/user/ViewUser.jsx";
import "../../css/role/rolecomponents.css"
import "../../css/role/roleprocesses.css"
import {
    ChevronRight,
    Copy01,
    Share04,
    ChevronSelectorVertical,
    ArrowRight,
    ArrowLeft,
    DotsVertical,
    Plus,
    SearchLg
} from "@untitled-ui/icons-react";

export default function UserManagement() {
    const itemsPerPage = 10;
    const pages = users.length / itemsPerPage;
    const [currentPage, setCurrentPage] = useState(1);
    const [showView, setShowView] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
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


        return roles.slice((currentPage - 1)*itemsPerPage , itemsPerPage*currentPage).map(role => (
            <tr key={role.id}>
                <td style={{color:"#000000", fontWeight:"500"}}><input id="selected-user" value={role.id} onChange={() => handleSelected(role.id)} type="checkbox"/> <span onClick={() => handleShowView(role.id)}>{role.title}</span></td>
                <td >{role.description}</td>
                <td><span></span></td>
                <td style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <span>{role.createdDate}</span>
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
                            role management </p>
                        <h2>Role management</h2>
                    </div>

                    <ul className="main-nav-end">
                        <li> <span className="green-dot"></span> What's new ?</li>
                        <li><Copy01 style={{width:"12px", height:"12px"}} />Copy link</li>
                        <li>Visit store <Share04 style={{width:"12px", height:"12px"}} /></li>
                    </ul>
                </nav>
                <div className="role-info">
                    <p>Role</p>
                    <div>
                        <div className="role-search">
                            <SearchLg className="input-icon"/>
                            <input type="search" placeholder="Search"/>
                        </div>

                        <button>
                            <Plus style={{width:"20px",height:"20px" }}/> Create Role
                        </button>
                    </div>

                </div>
                <div className="main-table">
                    <div>

                    </div>
                    <table className="role-table">
                        <thead>
                        <tr>
                            <th><div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                 Role <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/>
                            </div>
                            </th>
                            <th>Description <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                            <th>Assigned Users <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                            <th>Created Date <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>

                        </tr>
                        </thead>

                        <tbody>
                        {
                            paginate()
                        }
                        </tbody>
                    </table>

                    {
                        roles.length > 10 ? <div className="pagination-area">
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

                </div>
            </main>
        </section>
    )
}