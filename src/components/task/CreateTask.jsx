const CreateTask = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-4 ">Create Task</h3>
      <form className="flex flex-col gap-4">
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
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="assign">
            Assign To <span className="text-yellow-400">*</span>
          </label>
          <input
            className="border border-zinc-600 py-2 px-3 rounded-md outline-none bg-transparent placeholder:text-zinc-400 focus:border-yellow-300 mt-1 cur"
            id="assign"
            type="text"
            placeholder="Employee Name"
            required
          />
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
