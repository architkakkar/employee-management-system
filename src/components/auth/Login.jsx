import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border border-zinc-600 p-6 rounded-lg flex flex-col gap-y-6 items-start min-w-80 md:min-w-96">
        <h1 className="text-2xl font-semibold">Log In</h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-start gap-y-5 w-full"
        >
          <div className="flex flex-col w-full">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="border border-zinc-600 py-2 px-3 rounded-md outline-none bg-transparent placeholder:text-zinc-400 focus:border-yellow-300 mt-1"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(() => e.target.value)}
              required
              id="email"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="border border-zinc-600 py-2 px-3 rounded-md outline-none bg-transparent placeholder:text-zinc-400 focus:border-yellow-300 mt-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(() => e.target.value)}
              required
              id="password"
            />
          </div>
          <button
            type="button"
            className="hover:underline cursor-pointer self-center text-sm underline-offset-4"
            onClick={() => alert("Sorry! This feature is Work in Progress")}
          >
            Forget Password?
          </button>
          <button
            type="submit"
            className="py-2 px-3 rounded-md bg-yellow-400 text-black w-full hover:opacity-90 font-medium"
          >
            Log In
          </button>
        </form>
        <p className="text-sm self-center">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="underline underline-offset-4 cursor-pointer hover:opacity-90"
            onClick={() => alert("Sorry! This feature is Work in Progress")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
