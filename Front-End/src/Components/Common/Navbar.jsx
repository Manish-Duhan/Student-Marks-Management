const Navbar = ({ title }) => {
  return (
    <div className="bg-indigo-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-lg font-semibold">{title}</h1>
      <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
