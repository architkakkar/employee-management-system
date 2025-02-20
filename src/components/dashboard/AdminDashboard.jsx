import AllTask from "../others/AllTask";
// import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashboard = ({ data }) => {
  return (
    <div className="p-6 min-h-screen">
      <Header name={data.name} />
      <button className="mt-4 mb-8 py-2 px-3 rounded-md bg-yellow-400 text-black w-full hover:opacity-90 font-medium">
        Create New Task
      </button>
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
