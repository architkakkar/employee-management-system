import TaskCard from "./TaskCard";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className=" rounded-md w-full my-6 md:my-10 flex items-center justify-start gap-4 flex-nowrap overflow-scroll"
    >
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default TaskList;
