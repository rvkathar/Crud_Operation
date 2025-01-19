import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpData from "../src/component/EmpData";
import AddEmpForm from "../src/component/AddEmpForm";
import ViewEmp from "../src/component/ViewEmp";
import { createContext, useState } from "react";
import "./App.css";

const listContext = createContext();

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  return (
    <listContext.Provider value={{ employeeList, setEmployeeList }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpData />}></Route>
          <Route path="/AddEmpForm" element={<AddEmpForm />}></Route>
          <Route path="/View/:id" element={<ViewEmp />}></Route>
        </Routes>
      </BrowserRouter>
    </listContext.Provider>
  );
}
export { listContext };
export default App;
