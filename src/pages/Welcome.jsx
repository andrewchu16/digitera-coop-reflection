import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CurveBackground from "../components/CurveBackground";
import useOnKeyDown from "../hooks/useOnKeyDown";

function Welcome() {
  const ref = useRef();
  const navigate = useNavigate();

  useOnKeyDown(ref, (e) => {
    if (e.key === "Enter") {
      navigate("/home");
    }
  });

  return (
    <div
      ref={ref}
      className="w-screen h-screen flex flex-col md:justify-end justify-center md:items-start items-center bg-slate-200 md:p-20 p-2"
    >
      <CurveBackground className="fill-sky-600" />
      <div className="animate-appear flex flex-col md:items-start items-center gap-2">
        <h1 className="text-slate-900 md:text-5xl text-xl">
          Welcome to my Co-op Experience.
        </h1>
        <NavLink
          className="text-sky-600 font-display md:text-8xl text-5xl md:mt-0 hover:text-sky-800 transition-colors"
          to="/home"
        >
          ENTER
        </NavLink>
      </div>
    </div>
  );
}

export default Welcome;
