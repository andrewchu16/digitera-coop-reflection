import { NavLink } from "react-router-dom";
import logo from "../assets/computer.png";

function Navbar() {
  const activeClassList = "underline";

  return (
    <div className="h-28 bg-slate-200 flex justify-between px-20 py-4">
      <NavLink className="flex items-center gap-2" to="/home">
        <img
          src={logo}
          className="h-full rounded-full bg-neutral-100 p-3 border-zinc-900 border-[1px] hover:brightness-95 transition-[filter]"
        />
        <h1 className="text-4xl font-display hover:underline">
          Digitera Co-op Reflection
        </h1>
      </NavLink>
      <div className="h-full flex gap-8 justify-around items-center text-lg">
        <NavLink
          className={({ isActive }) =>
            "hover:text-sky-500 hover:scale-105 transition-transform " +
            (isActive ? activeClassList : "")
          }
          to="/employability-skills"
        >
          Employability Skills
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "hover:text-sky-500 hover:scale-105 transition-transform " +
            (isActive ? activeClassList : "")
          }
          to="/software-skills"
        >
          Software Skills
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "hover:text-sky-500 hover:scale-105 transition-transform " +
            (isActive ? activeClassList : "")
          }
          to="/overall-experience"
        >
          Overall Experience
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
