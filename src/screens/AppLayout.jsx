import { Outlet } from "react-router-dom";
import Sidebar from "../components/Nav/UserSide";
import TopNavbar from "../components/Nav/TopNavbar";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <TopNavbar/>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;