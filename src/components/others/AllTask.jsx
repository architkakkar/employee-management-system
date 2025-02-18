import Task from "./Task";

const AllTask = () => {
  return (
    <>
      <h1 className="text-sm mb-2">All Tasks</h1>
      <div className="border border-zinc-600 rounded-md">
        <Task />
        <hr className="border-gray-600" />
        <Task />
        <hr className="border-gray-600" />
        <Task />
        <hr className="border-gray-600" />
        <Task />
        <hr className="border-gray-600" />
        <Task />
        <hr className="border-gray-600" />
        <Task />
        <hr className="border-gray-600" />
        <Task />
      </div>
    </>
  );
};

export default AllTask;
