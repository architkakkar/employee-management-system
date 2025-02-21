import { createContext, useEffect, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import employee from "../data/employee.json";
import admin from "../data/admin.json";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    // setLocalStorage();
    // const { employee, admin } = getLocalStorage();

    setEmployeeData(employee);
    setAdminData(admin);
  }, []);

  return (
    <AuthContext.Provider
      value={{ employeeData, setEmployeeData, adminData, setAdminData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
