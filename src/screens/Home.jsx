function Home({ switchTo }) {
    return (
        <div className="bg-green-400 h-1/2">
            <button onClick={() => switchTo("EmployabilitySkills")}>A</button>
            <button onClick={() => switchTo("SoftwareSkills")}>B</button>
            <button onClick={() => switchTo("OverallExperience")}>C</button>
        </div>
    );
}

export default Home;
