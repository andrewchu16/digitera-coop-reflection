import { NavLink } from "react-router-dom";

function FreepikImageSource({ href, author }) {
  return (
    <li>
      Image by{" "}
      <a href={href} className="text-sky-600 hover:underline" target="_blank">
        {author}
      </a>{" "}
      on Freepik
    </li>
  );
}

function Credits() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-300 md:px-96 md:py-48">
      <NavLink
        to="/"
        className="absolute md:top-10 bottom-10 md:left-10 text-lg hover:text-sky-600"
      >
        Back
      </NavLink>
      <div className="bg-neutral-100 w-full h-full flex flex-col items-center gap-4 p-8 rounded-lg">
        <h1 className="md:text-3xl text-2xl">Credits</h1>
        <ul className="list-disc md:text-xl text-lg">
          <FreepikImageSource
            href="https://www.freepik.com/free-vector/tiny-man-with-arrow-twisted-upward_16334792.htm"
            author="pch.vector"
          />
        </ul>
      </div>
    </div>
  );
}

export default Credits;
