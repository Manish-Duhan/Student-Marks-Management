import Navbar from "./Navbar";

const DashboardLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title={title} />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
