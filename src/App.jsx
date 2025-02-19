import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import AuthContext from "./context/AuthContext";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { employeeData, adminData } = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (!adminData && !employeeData) {
      alert("No data saved in localStorage!");
      return;
    }

    const admin = adminData.find(
      (admin) => admin.email === email && admin.password === password
    );
    const employee = employeeData.find(
      (employee) => employee.email === email && employee.password === password
    );

    if (admin) {
      setLoggedInUser({ role: "admin", admin });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", email })
      );
    } else if (employee) {
      setLoggedInUser({ role: "employee", employee });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", email })
      );
    } else {
      alert("Invalid Credentials!");
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));

    if (userData) {
      setLoggedInUser(userData);
    }
  }, []);

  return (
    <div className="bg-zinc-950 text-white h-full w-screen">
      {!loggedInUser ? <Login handleLogin={handleLogin} /> : <></>}
      {loggedInUser?.role === "admin" ? <AdminDashboard /> : <></>}
      {loggedInUser?.role === "employee" ? <EmployeeDashboard /> : <></>}
    </div>
  );
};

export default App;
