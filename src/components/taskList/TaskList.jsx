import TaskCard from "./TaskCard";

const TaskList = ({ tasks, setEmpData }) => {
  return (
    <div
      id="tasklist"
      className=" rounded-md w-full my-6 md:my-10 flex items-stretch justify-start gap-4 flex-nowrap overflow-scroll"
    >
      {tasks.map((task) => (
        <TaskCard key={task.title} task={task} setEmpData={setEmpData} />
      ))}
    </div>
  );
};

export default TaskList;
