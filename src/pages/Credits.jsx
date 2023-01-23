import { NavLink } from "react-router-dom";

function Credits() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-300 md:px-96 md:py-48">
      <NavLink
        to="/"
        className="absolute md:top-10 bottom-10 md:left-10 text-lg hover:text-sky-600"
      >
        Back
      </NavLink>
      <div className="bg-neutral-100 w-full h-full flex flex-col items-center gap-3 p-8 rounded-lg">
        <h1 className="md:text-3xl text-2xl">Credits</h1>
        <h2 className="md:text-xl text-lg">
          Website made by{" "}
          <a
            href="https://github.com/andrewchu16"
            target="_blank"
            className="text-sky-600 hover:underline"
          >
            Andrew Chu
          </a>
        </h2>
        <ul className="list-disc text-md">
          <li>
            Image by{" "}
            <a
              href="https://www.freepik.com/free-vector/personal-growth-concept-illustration_36242177.htm"
              className="text-sky-600 hover:underline"
              target="_blank"
            >
              storyset
            </a>{" "}
            on Freepik
          </li>
          <li>
            <a
              target="_blank"
              className="text-sky-600 hover:underline"
              href="https://storyset.com/data"
            >
              Data illustrations by Storyset
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-sky-600 hover:underline"
              href="https://storyset.com/people"
            >
              People illustrations by Storyset
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-sky-600 hover:underline"
              href="https://www.flaticon.com/free-icons/coding"
              title="coding icons"
            >
              Coding icons created by juicy_fish - Flaticon
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-sky-600 hover:underline"
              href="https://storyset.com/work"
            >
              Work illustrations by Storyset
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-sky-600 hover:underline"
              href="https://storyset.com/online"
            >
              Online illustrations by Storyset
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-sky-600 hover:underline"
              href="https://storyset.com/internet"
            >
              Internet illustrations by Storyset
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="text-sky-600 hover:underline"
              href="https://storyset.com/information"
            >
              Information illustrations by Storyset
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Credits;
