import { BrowserRouter, Route, Routes } from "react-router-dom";
import Credits from "./pages/Credits";
import EmployabilitySkills from "./pages/EmployabilitySkills";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import OverallExperience from "./pages/OverallExperience";
import SoftwareSkills from "./pages/SoftwareSkills";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route index element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/" element={<Layout />}>
          <Route path="/overall-experience" element={<OverallExperience />} />
          <Route path="software-skills" element={<SoftwareSkills />} />
          <Route
            path="/employability-skills"
            element={<EmployabilitySkills />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// employability skills, software skills, overall experience
// how it started vs how it's going for each
export default App;
