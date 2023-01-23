import { NavLink } from "react-router-dom";
import logo from "../assets/computer.png";

function Navbar() {
  const activeClassList =
    "underline md:bg-transparent bg-neutral-100 rounded-full md:p-0 p-2";

  return (
    <div className="md:h-28 h-20 bg-slate-200 flex justify-between md:px-20 py-42">
      <NavLink className="md:flex hidden items-center gap-2 select-none" to="/">
        <img
          src={logo}
          className="h-[87%] rounded-lg bg-neutral-100 p-3 border-zinc-900 border-[1px] hover:brightness-95 transition-[filter]"
        />
        <h1 className="text-4xl font-display hover:underline">
          Digitera Co-op Reflection
        </h1>
      </NavLink>
      <div className="h-full flex gap-8 justify-around items-center text-lg">
        <NavLink
          className={({ isActive }) =>
            "md:hover:text-sky-500 hover:scale-105 text-center " +
            (isActive ? activeClassList : "")
          }
          to="/employability-skills"
        >
          Employability Skills
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "md:hover:text-sky-500 hover:scale-105 text-center " +
            (isActive ? activeClassList : "")
          }
          to="/software-skills"
        >
          Software Skills
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            "md:hover:text-sky-500 hover:scale-105 text-center " +
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
