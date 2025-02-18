const Header = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-md">
        Hello <br /> <span className="text-3xl font-medium">Archit 👋</span>
      </h1>
      <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-md hover:opacity-90">
        Logout
      </button>
    </div>
  );
};

export default Header;
