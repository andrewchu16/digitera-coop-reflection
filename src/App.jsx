import { useState, useMemo } from "react";
import EmployabilitySkills from "./screens/EmployabilitySkills";
import Home from "./screens/Home";
import OverallExperience from "./screens/OverallExperience";
import SoftwareSkills from "./screens/SoftwareSkills";
import Welcome from "./screens/Welcome";

function App() {
    const [curScreenName, setCurScreenName] = useState("Welcome");

    // pls don't ask why i'm not using react router
    const screens = useMemo(
        () => ({
            Welcome: <Welcome onClick={() => setCurScreenName("Home")} />,
            Home: (
                <Home
                    switchTo={(nextScreenName) =>
                        setCurScreenName(nextScreenName)
                    }
                />
            ),
            EmployabilitySkills: <EmployabilitySkills />,
            SoftwareSkills: <SoftwareSkills />,
            OverallExperience: <OverallExperience />,
        }),
        []
    );

    let curScreen = screens[curScreenName];

    return <div className="bg-red-500">{curScreen}</div>;
}

// employability skills, software skills, overall experience
export default App;
