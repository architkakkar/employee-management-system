const TaskListNumbers = ({ type, value }) => {
  return (
    <div className="h-36 rounded-md border border-zinc-600 p-4 flex flex-col justify-center items-start gap-12 group">
      <p className="group-hover:text-yellow-400 text-4xl font-bold">{value}</p>
      <p className="text-lg">{type}</p>
    </div>
  );
};

export default TaskListNumbers;
