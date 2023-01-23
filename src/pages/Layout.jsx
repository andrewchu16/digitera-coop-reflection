import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
