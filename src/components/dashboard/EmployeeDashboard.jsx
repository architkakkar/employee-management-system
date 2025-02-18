import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen p-6">
      <Header />
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-6">
        <TaskListNumbers type="New Task" value="5" />
        <TaskListNumbers type="Accepted Task" value="1" />
        <TaskListNumbers type="Completed Task" value="3" />
        <TaskListNumbers type="Failed Task" value="0" />
      </div>
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
