const ResultTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg">
      <table className="min-w-full border">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Batch</th>
            <th className="px-4 py-2">CGPA</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student) => (
            <tr key={student.id} className="text-center border-b">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.department}</td>
              <td className="px-4 py-2">{student.className}</td>
              <td className="px-4 py-2">{student.batch}</td>
              <td className="px-4 py-2">{student.cgpa}</td>
              <td
                className={`px-4 py-2 font-semibold ${
                  student.status === "Pass"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {student.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
