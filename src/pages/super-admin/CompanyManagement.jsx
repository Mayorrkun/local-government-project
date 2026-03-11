import {companies} from "../../js/data.js";
import SideNav from "../../components/sidenav.jsx";
import "../../css/user/userprocess.css";
import {useState} from "react";

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

export default function CompanyManagement() {
    const itemsPerPage = 10;
    const pages = companies.length / itemsPerPage;
    const [currentPage, setCurrentPage] = useState(1);
    const [showView, setShowView] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [selected, setSelected] = useState([]);
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


        return companies.slice((currentPage - 1)*itemsPerPage , itemsPerPage*currentPage).map(company => (
            <tr key={company.id} style={{backgroundColor:(company.id % 2) === 0 ? "#FFFFFF": "#fafafa"}} >
                <td style={{color:"#000000", fontWeight:"500"}}><input id="selected-user" value={company.id} onChange={() => handleSelected(company.id)} type="checkbox"/> <span>{company.name}</span></td>
                <td >{company.owner}</td>
                <td><span>{company.userTotal}</span></td>
                <td><span style={{backgroundColor:(company.status.toLowerCase() === "active" ? "#ebfac7" : (company.status.toLowerCase() === "deactivated") ? "#ffefef" : null),
                    color: (company.status.toLowerCase() === "active" ? "#336C0D" : (company.status.toLowerCase() === "deactivated") ? "#891810" : null),
                    borderColor:(company.status.toLowerCase() === "active" ? "#336C0D" : (company.status.toLowerCase() === "deactivated") ? "#891810" : null),
                    borderWidth:"1px",
                    borderStyle:"solid", padding:"5px 10px", borderRadius:"20px"}}>{company.status}</span></td>
                <td style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <span>{company.createdDate}</span>
                    <button style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}}>
                        <DotsVertical style={{width:"15px",height:"15px"}}/></button>
                </td>
            </tr>
        ))
    }
    function handleShowView(id){
        const foundCompany = companies.find(company => company.id === id);
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
                            Company management </p>
                        <h2>Company management</h2>
                    </div>

                </nav>
                <div className="users-info">
                    <p>Companies</p>
                    <div>
                        <div className="users-search">
                            <SearchLg className="input-icon"/>
                            <input type="search" placeholder="Search"/>
                        </div>
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
                                }}/> Company Name <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/>
                            </div>
                            </th>
                            <th>Company Owner <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                            <th>No of Users <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                            <th>Status <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                            <th>Created Date <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>

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
                    companies.length > 10 ? <div className="pagination-area">
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