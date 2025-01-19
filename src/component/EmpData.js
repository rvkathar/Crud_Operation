import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listContext } from "../App";

const EmpData = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);
  const navigate = useNavigate();

  const handleView = (index) => {
    navigate(`/View/${index + 1}`);
  };
  const handleDelete = (ind) => {
    const afterDelete = employeeList?.filter((_, index) => index !== ind);
    setEmployeeList(afterDelete);
  };
  const handleUpdate = (employee, index) => {
    navigate("/AddEmpForm", { state: { data: employee, ind: index } });
  };

  return (
    <div className=" m-5 p-2">
      <h1 className=" text-center font-bold  my-5 text-2xl">
        Employee Records
      </h1>
      <Link to="/AddEmpForm">
        <button className="bg-blue-700 text-white p-3 rounded-lg transform transition duration-50  hover:scale-95 ">
          CREATE NEW
        </button>
      </Link>

      <div className=" w-full realtive flex flex-col shadow-xl items-center justify-center text-center m-5 p-5">
        {employeeList.length === 0 ? (
          <p className="font-semibold text-wrap">
            No Employees Added yet. Click on Create New
          </p>
        ) : (
          <table className="w-full table-auto text-black">
            <thead className="">
              <tr className="border border-solid border-l-0 border-r-0">
                <th className="text-md px-5 py-3">SR NO</th>
                <th className="text-md px-5 py-3">ID</th>
                <th className="text-md px-5 py-3">NAME</th>
                <th className="text-md px-5 py-3">DESIGNATION</th>
                <th className="text-md px-5 py-3">EMAIL</th>
                <th className="text-md px-5 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((emp, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{emp?.employeeId}</td>
                  <td className="uppercase">{emp?.employeeName}</td>
                  <td>{emp?.designation}</td>
                  <td>{emp?.email}</td>
                  <td>
                    <button
                      className="bg-blue-700 text-white m-2 p-2 rounded-lg"
                      onClick={() => handleView(index)}
                    >
                      View
                    </button>

                    <button
                      className="bg-blue-700 text-white m-2 p-2 rounded-lg"
                      onClick={() => handleUpdate(emp, index)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-blue-700 text-white m-2 p-2 "
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EmpData;
