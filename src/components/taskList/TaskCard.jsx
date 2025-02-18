const TaskCard = () => {
  return (
    <div className="flex-shrink-0 h-full w-2/3 md:w-1/4 md:min-h-80 bg-yellow-400 rounded-md px-4 pt-5 pb-10 text-black">
      <div className="flex justify-between items-center text-sm">
        <h3 className="bg-red-600 text-white px-3 py-1 rounded-md">High</h3>
        <h4 className="font-semibold">20 February, 2024</h4>
      </div>
      <div className="mt-5 md:mt-10">
        <h2 className="font-bold text-2xl">Make a YouTube Video</h2>
        <p className="mt-2 md:mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          eveniet fuga, officia dignissimos odio ex quibusdam!
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
