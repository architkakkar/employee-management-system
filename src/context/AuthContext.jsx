import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const { employee, admin } = getLocalStorage();

    setEmployeeData(employee);
    setAdminData(admin);
  }, []);

  return (
    <AuthContext.Provider value={{ employeeData, adminData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
