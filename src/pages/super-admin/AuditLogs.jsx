import {logs} from "../../js/data.js";
import SideNav from "../../components/sidenav.jsx";
import "../../css/user/userprocess.css";
import {useState} from "react";
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

export default function AuditLogs() {
    const itemsPerPage = 10;
    const pages = logs.length / itemsPerPage;
    const [currentPage, setCurrentPage] = useState(1);
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


        return logs.slice((currentPage - 1)*itemsPerPage , itemsPerPage*currentPage).map(log => (
            <tr key={log.id}>
                <td style={{color:"#000000", fontWeight:"500"}}><input id="selected-user" value={log.id} onChange={() => handleSelected(log.id)} type="checkbox"/> <span>{log.dateTime}</span></td>
                <td >{log.actor}</td>
                <td><span>{log.action}</span></td>
                <td style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <span>{log.Description}</span>
                    <button style={{backgroundColor:"transparent",border:"none",cursor:"pointer"}}>
                        <DotsVertical style={{width:"15px",height:"15px"}}/></button></td>
            </tr>
        ))
    }
    return(
        <section className="general-section">
            <SideNav/>
            <main className="main-container">
                <nav className="main-nav">
                    <div>
                        <p>
                            <span></span>
                            Olivia Rhye
                            <ChevronRight className="arrow-right"/>
                            audit logs </p>
                        <h2>Audit Logs</h2>
                    </div>

                </nav>
                <div className="role-info">
                    <p>Logs</p>
                    <div>
                        <div className="role-search">
                            <SearchLg className="input-icon"/>
                            <input type="search" placeholder="Search"/>
                        </div>
                    </div>

                </div>
                <div className="main-table">
                    <div>

                    </div>
                    <table className="role-table">
                        <thead>
                        <tr>
                            <th><div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                Date and Time <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/>
                            </div>
                            </th>
                            <th>Actor <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                            <th>Action <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>
                            <th>Description <ChevronSelectorVertical style={{width:"12px", height:"12px"}}/></th>

                        </tr>
                        </thead>

                        <tbody>
                        {
                            paginate()
                        }
                        </tbody>
                    </table>

                    {
                        logs.length > 10 ? <div className="pagination-area">
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