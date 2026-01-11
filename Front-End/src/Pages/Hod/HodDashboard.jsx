import DashboardLayout from "../../Components/Common/DashboardLayout";
import ResultTable from "../../Components/Tables/ResultTables";
import { studentResults } from "../../data/studentResult";

const HodDashboard = () => {
    const departmentData = studentResults.filter(
    (s) => s.department === "Computer Science"
  );
  return (
    <div>
        <DashboardLayout title="Hod Dashboard">
        <ResultTable data={departmentData} />
        </DashboardLayout>
    </div>
  );
};

export default HodDashboard;
