const TaskCard = ({ task, setEmpData }) => {
  const markCompleted = () => {
    setEmpData((prevEmpData) => {
      const updatedTasks = prevEmpData.tasks.map((t) =>
        t.title === task.title ? { ...t, active: false, completed: true } : t
      );

      const updatedTaskCount = {
        ...prevEmpData.taskCount,
        active: prevEmpData.taskCount.active - 1,
        completed: prevEmpData.taskCount.completed + 1,
      };

      return {
        ...prevEmpData,
        tasks: updatedTasks,
        taskCount: updatedTaskCount,
      };
    });
  };

  const markFailed = () => {
    setEmpData((prevEmpData) => {
      const updatedTasks = prevEmpData.tasks.map((t) =>
        t.title === task.title ? { ...t, active: false, failed: true } : t
      );

      const updatedTaskCount = {
        ...prevEmpData.taskCount,
        active: prevEmpData.taskCount.active - 1,
        failed: prevEmpData.taskCount.failed + 1,
      };

      return {
        ...prevEmpData,
        tasks: updatedTasks,
        taskCount: updatedTaskCount,
      };
    });
  };

  return (
    <div className="flex-shrink-0 w-4/5 md:w-1/4 md:min-h-80 bg-yellow-400 rounded-md px-4 pt-5 pb-8 text-black">
      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-x-2 items-center">
          <h3 className="bg-zinc-950 text-white px-2.5 py-1 rounded-full font-medium">
            {task.category}
          </h3>
          {task.new ? (
            <h4 className="border-2 bg-blue-200 text-blue-600 border-blue-600 px-1.5 py-0.5 rounded-full uppercase font-semibold font-mono">
              New
            </h4>
          ) : (
            <></>
          )}
        </div>
        <h4 className="font-semibold">{task.date}</h4>
      </div>
      <div className="mt-4 md:mt-10">
        <h2 className="font-bold text-2xl">{task.title}</h2>
        <p className="mt-2 md:mt-3">{task.description}</p>
      </div>
      {task.active ? (
        <div className="flex items-center gap-x-2 font-medium text-sm mt-8">
          <button
            type="button"
            className="bg-zinc-950 text-yellow-400 px-4 py-2 rounded-md border border-zinc-950 hover:bg-white hover:text-zinc-950"
            onClick={markCompleted}
          >
            Mark as Completed
          </button>
          <button
            type="button"
            className="bg-white text-black px-4 py-2 rounded-md border border-zinc-950 hover:bg-zinc-950 hover:text-yellow-400"
            onClick={markFailed}
          >
            Mark as Failed
          </button>
        </div>
      ) : (
        <></>
      )}
      {task.completed ? (
        <div className="bg-green-200 text-green-600 border border-green-600 font-medium text-sm mt-8 px-4 py-2 rounded-md w-fit">
          Completed
        </div>
      ) : (
        <></>
      )}
      {task.failed ? (
        <div className="bg-red-200 text-red-600 border border-red-600 font-medium text-sm mt-8 px-4 py-2 rounded-md w-fit">
          Failed
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskCard;
