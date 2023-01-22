import { Link } from "react-router-dom";
import CurveBackground from "../components/CurveBackground";

function LinkTile({ screen, text }) {
    return (
        <Link
            to={screen}
            className="bg-neutral-100 text-4xl z-10 flex justify-center items-center flex-grow rounded-lg hover:scale-95 hover:text-sky-600 transition-transform duration-150 drop-shadow-md"
        >
            {text}
        </Link>
    );
}

function Home() {
    return (
        <div className="bg-slate-200 w-screen h-screen flex md:flex-row flex-col justify-center items-stretch gap-8 md:p-20 p-8">
            <CurveBackground className="fill-sky-600" />
            <LinkTile
                screen="/employability-skills"
                text="Employability Skills"
            />
            <LinkTile screen="/software-skills" text="Software Skills" />
            <LinkTile screen="/overall-experience" text="Overall Experience" />
        </div>
    );
}

export default Home;
