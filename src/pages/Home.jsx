function Home({ switchTo }) {
    return (
        <div className="bg-gray-900 w-screen h-screen ">
            <button onClick={() => switchTo("EmployabilitySkills")}>A</button>
            <button onClick={() => switchTo("SoftwareSkills")}>B</button>
            <button onClick={() => switchTo("OverallExperience")}>C</button>
        </div>
    );
}

export default Home;
