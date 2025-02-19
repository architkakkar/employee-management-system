import employee from "../data/employee.json";
import admin from "../data/admin.json";

const setLocalStorage = () => {
  if (localStorage.length > 0) {
    localStorage.clear();
  }

  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employee, admin };
};

export { getLocalStorage, setLocalStorage };
