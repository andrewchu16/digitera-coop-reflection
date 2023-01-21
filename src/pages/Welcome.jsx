import { NavLink } from "react-router-dom";
import CurveBackground from "../components/CurveBackground";

function Welcome() {
    return (
        <div className="w-screen h-screen flex flex-col md:justify-end justify-center md:items-start items-center bg-gray-900 md:p-20 p-2">
            <div className="md:[display:initial] hidden">
                <CurveBackground className="fill-sky-500" />
            </div>
            <div className="animate-appear flex flex-col md:items-start items-center gap-2">
                <h1 className="text-gray-200 md:text-5xl text-xl">
                    Welcome to my Co-op Experience.
                </h1>
                <NavLink
                    className="text-gray-500 font-display md:text-8xl text-5xl md:mt-0 hover:text-gray-300 transition-colors"
                    to="/home"
                >
                    ENTER
                </NavLink>
            </div>
        </div>
    );
}

export default Welcome;
