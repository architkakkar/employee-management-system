import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const AllTask = () => {
  const { employeeData } = useContext(AuthContext);

  return (
    <>
      <h1 className="text-lg mb-2">All Tasks</h1>
      <div className="overflow-x-scroll rounded-md border border-zinc-600">
        <table className="text-left border-zinc-600 w-full">
          <thead>
            <tr className="text-yellow-400 border-b border-zinc-600 bg-zinc-900">
              <th className="px-2 py-3 border-r border-zinc-600">Name</th>
              <th className="px-2 py-3 border-x border-zinc-600">New</th>
              <th className="px-2 py-3 border-x border-zinc-600">Active</th>
              <th className="px-2 py-3 border-x border-zinc-600">Completed</th>
              <th className="px-2 py-3 border-l border-zinc-600">Failed</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((data) => (
              <tr key={data.id} className="border-t border-zinc-600">
                <td className="px-2 py-3 border-r border-zinc-600">
                  {data.name}
                </td>
                <td className="px-2 py-3 border-x border-zinc-600">
                  {data.taskCount.new}
                </td>
                <td className="px-2 py-3 border-x border-zinc-600">
                  {data.taskCount.active}
                </td>
                <td className="px-2 py-3 border-x border-zinc-600">
                  {data.taskCount.completed}
                </td>
                <td className="px-2 py-3 border-l border-zinc-600">
                  {data.taskCount.failed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTask;
