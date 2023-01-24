import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col w-full">
      <div className="md:static fixed z-50">
        <Navbar />
      </div>
      <div className="md:static absolute top-20 w-full md:px-72 px-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
