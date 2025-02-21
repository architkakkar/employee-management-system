import { useState } from "react";
import Header from "../Header";
import TaskListNumbers from "../task/TaskListNumbers";
import TaskList from "../task/TaskList";

const EmployeeDashboard = ({ data, setLoggedInUser }) => {
  const [empData, setEmpData] = useState(data);

  return (
    <div className="min-h-screen p-6">
      <Header name={empData.name} setLoggedInUser={setLoggedInUser} />
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-6">
        <TaskListNumbers type="New Task" value={empData.taskCount.new} />
        <TaskListNumbers type="Active Task" value={empData.taskCount.active} />
        <TaskListNumbers
          type="Completed Task"
          value={empData.taskCount.completed}
        />
        <TaskListNumbers type="Failed Task" value={empData.taskCount.failed} />
      </div>
      <TaskList tasks={empData.tasks} setEmpData={setEmpData} />
    </div>
  );
};

export default EmployeeDashboard;
