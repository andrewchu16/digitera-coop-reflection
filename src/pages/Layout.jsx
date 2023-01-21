import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex h-screen w-screen">
            AA
            <Outlet />
        </div>
    );
}

export default Layout;
