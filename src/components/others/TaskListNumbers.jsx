const TaskListNumbers = ({ type, value }) => {
  return (
    <div className="h-40 rounded-md border border-zinc-600 hover:bg-zinc-900 cursor-pointer p-4 flex flex-col justify-center items-start gap-14 group">
      <p className="group-hover:text-yellow-400 text-4xl font-bold">{value}</p>
      <p className="text-lg">{type}</p>
    </div>
  );
};

export default TaskListNumbers;
