import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import StudentResult from "./Pages/Student/StudentResult";
import ClassResult from "./Pages/Teacher/ClassResult";
import HodDashboard from "./Pages/Hod/HodDashboard";
import PrincipalDashboard from "./Pages/Principle/PrincipalDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/student" element={<StudentResult />} />
      <Route path="/teacher" element={<ClassResult />} />
      <Route path="/hod" element={<HodDashboard />} />
      <Route path="/principal" element={<PrincipalDashboard />} />
    </Routes>
  );
}

export default App;
