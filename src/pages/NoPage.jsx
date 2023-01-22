import { Link } from "react-router-dom";
import CurveBackground from "../components/CurveBackground";

function NoPage() {
  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center w-screen h-screen gap-10">
      <div className="md:[display:initial] hidden">
        <CurveBackground className="fill-sky-500" />
      </div>
      <h1 className="text-gray-200 md:text-4xl text-2xl">
        Sorry! Page not found.
      </h1>
      <Link
        className="text-gray-800 md:text-2xl text-xl py-3 px-5 bg-sky-500 hover:text-gray-200 transition-colors rounded-full"
        to={"/home"}
      >
        Go Home
      </Link>
    </div>
  );
}

export default NoPage;
