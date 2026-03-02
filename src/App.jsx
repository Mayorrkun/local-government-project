import {createRoot} from "react-dom/client";
import{BrowserRouter} from "react-router-dom";
//
import "./css/index.css"
import Main from "./pages/Main.jsx";
import {AuthProvider} from "./pages/auth/AuthContext.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <AuthProvider>
            <Main/>
        </AuthProvider>
    </BrowserRouter>


)
