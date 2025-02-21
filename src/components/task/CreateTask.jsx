import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const CreateTask = ({ setShowPage }) => {
  const { employeeData, setEmployeeData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = employeeData.find((employee) => employee.name === assignedTo);

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      assignedTo: user.email,
      category,
      new: true,
      active: true,
      completed: false,
      failed: false,
    };

    const newTaskCount = {
      new: user.taskCount.new + 1,
      active: user.taskCount.active + 1,
      completed: user.taskCount.completed,
      failed: user.taskCount.failed,
    };

    const newEmployeeData = employeeData.map((employee) => {
      if (employee.email !== user.email) {
        return { ...employee };
      }

      return {
        ...user,
        taskCount: newTaskCount,
        tasks: [...user.tasks, newTask],
      };
    });

    // localStorage.setItem("employee", JSON.stringify(newEmployeeData));
    setEmployeeData(newEmployeeData);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignedTo("");
    setCategory("");

    alert("Task Created!");
    setShowPage(false);
  };

  return (
    <div className="p-6 min-h-screen">
      <span
        onClick={() => setShowPage(false)}
        className="cursor-pointer invert text-4xl"
      >
        🔙
      </span>
      <h3 className="text-3xl font-semibold mt-4 mb-3 ">Create Task</h3>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="title">
            Task Title <span className="text-yellow-400">*</span>
          </label>
          <input
            className="border border-zinc-600 py-2 px-3 rounded-md outline-none bg-transparent placeholder:text-zinc-400 focus:border-yellow-300 mt-1"
            type="text"
            placeholder="Make a UI Design"
            required
            id="title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="description">
            Description <span className="text-yellow-400">*</span>
          </label>
          <textarea
            className="border border-zinc-600 py-2 px-3 rounded-md outline-none bg-transparent placeholder:text-zinc-400 focus:border-yellow-300 mt-1"
            id="description"
            cols="30"
            rows="8"
            placeholder="Detailed description of the task (Max 500 words)"
            required
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="date">
            Date <span className="text-yellow-400">*</span>
          </label>
          <input
            className="border border-zinc-600 py-2 px-3 rounded-md outline-none bg-transparent placeholder:text-zinc-400 focus:border-yellow-300 mt-1 cur"
            id="date"
            type="date"
            required
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="assign">
            Assign To <span className="text-yellow-400">*</span>
          </label>
          <select
            className="border border-zinc-600 py-2 px-3 rounded-md outline-none bg-transparent text-white focus:border-yellow-300 mt-1 cursor-pointer"
            id="assign"
            required
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          >
            <option value="" disabled className="bg-black text-zinc-400">
              Select Employee
            </option>
            {employeeData.map((employee) => (
              <option key={employee.id} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="category">
            Category <span className="text-yellow-400">*</span>
          </label>
          <input
            className="border border-zinc-600 py-2 px-3 rounded-md outline-none bg-transparent placeholder:text-zinc-400 focus:border-yellow-300 mt-1 cur"
            id="category"
            type="text"
            placeholder="Dev, UI, Backend, etc."
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mt-4 mb-8 py-2 px-3 rounded-md bg-yellow-400 text-black w-full hover:opacity-90 font-medium"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
