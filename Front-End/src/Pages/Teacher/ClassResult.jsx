import React from 'react'
import DashboardLayout from '../../Components/Common/DashboardLayout'
import ResultTable from "../../Components/Tables/ResultTables";
import { studentResults } from "../../data/studentResult";

const ClassResult = () => {
    const classData = studentResults.filter(
    (s) => s.className === "BTech"
  );
  return (
    <div>
        <DashboardLayout title="Class Dashboard">
      <ResultTable data={classData} />
        </DashboardLayout>
    </div>
  )
}

export default ClassResult