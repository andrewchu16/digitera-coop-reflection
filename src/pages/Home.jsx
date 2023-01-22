import { Link } from "react-router-dom";
import CurveBackground from "../components/CurveBackground";

function LinkTile({ screen, children, text }) {
  return (
    <Link
      to={screen}
      className="bg-neutral-100 text-4xl z-10 flex-grow rounded-lg hover:scale-95 transition-transform duration-150 drop-shadow-md overflow-clip"
    >
      <div className="z-20 bg-neutral-100 hover:bg-neutral-100/50 hover:text-sky-500 w-full h-full flex justify-center items-center transition-colors">
        <h1>{text}</h1>
      </div>
      {children}
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
      ></LinkTile>
      <LinkTile screen="/software-skills" text="Software Skills" />
      <LinkTile screen="/overall-experience" text="Overall Experience" />
    </div>
  );
}

export default Home;
