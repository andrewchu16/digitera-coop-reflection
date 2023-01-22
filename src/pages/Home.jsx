import { Link } from "react-router-dom";
import CurveBackground from "../components/CurveBackground";
import employabilitySkillsBg from "../assets/personal-growth.jpg";
import softwareSkillsBg from "../assets/coding.svg";
import overallExperienceBg from "../assets/thinking.svg";

function LinkTile({ screen, text, imgUrl }) {
  return (
    <Link
      to={screen}
      className="relative md:3xl bg-center bg-cover bg-origin-content text-2xl z-10 rounded-lg hover:scale-[.98] basis-full transition-transform duration-150 drop-shadow-md overflow-clip"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div
        className={`absolute z-20 bg-neutral-100 hover:bg-neutral-100/60 hover:text-sky-500 w-full h-full flex justify-center items-center transition-colors`}
      >
        <h1>{text}</h1>
      </div>
    </Link>
  );
}

function Home() {
  return (
    <div className="bg-slate-200 w-screen h-screen flex md:flex-row flex-col justify-center items-stretch gap-8 md:p-20 p-10">
      <CurveBackground className="fill-sky-600" />
      <LinkTile
        screen="/employability-skills"
        text="Employability Skills"
        imgUrl={employabilitySkillsBg}
      />
      <LinkTile
        screen="/software-skills"
        text="Software Skills"
        imgUrl={softwareSkillsBg}
      />
      <LinkTile
        screen="/overall-experience"
        text="Overall Experience"
        imgUrl={overallExperienceBg}
      />
    </div>
  );
}

export default Home;
