const Task = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-end gap-x-2">
        <p>Name</p>
        <p className="text-zinc-600">｜</p>
        <p className="">Title</p>
      </div>
      <div className="flex items-end gap-x-2">
        <p className="text-zinc-600">｜</p>
        <p>Status</p>
      </div>
    </div>
  );
};

export default Task;
