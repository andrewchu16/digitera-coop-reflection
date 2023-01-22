import CurveBackground from "../components/CurveBackground";

function LinkTile({ onClick, screen, text, imageUrl }) {
    return (
        <button
            onClick={() => onClick(screen)}
            className="bg-gray-700 text-4xl z-10 flex-grow rounded-lg"
        >
            {text}
        </button>
    );
}

function Home({ switchTo }) {
    return (
        <div className="bg-gray-900 w-screen h-screen flex justify-center items-stretch gap-8 p-20">
            <CurveBackground className="fill-sky-500" />
            <LinkTile
                onClick={switchTo}
                screen="EmployabilitySkills"
                text="A"
            />
            <LinkTile onClick={switchTo} screen="SoftwareSkills" text="B" />
            <LinkTile onClick={switchTo} screen="OverallExperience" text="C" />
        </div>
    );
}

export default Home;
