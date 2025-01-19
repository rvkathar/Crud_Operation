import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { listContext } from "../App";

const ViewEmp = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);
  const [viewData, setViewData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const filtered = employeeList?.filter((_, index) => index + 1 == id);
      setViewData(filtered[0]);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-1000 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          EMPLOYEE DETAILS
        </h2>
        <div className="italic">
          <label className=" flex p-2  text-gray-700 border border-transparent border-black shadow-md ">
            <div className="font-bold text-lg ">Employee Name:</div>
            <div className=" mx-3 font-medium text-lg ">
              {viewData?.employeeName}
            </div>
          </label>
          <label className=" flex p-2 text-gray-700 border border-transparent border-black shadow-md ">
            <div className="font-bold text-lg">Employee Id:</div>
            <div className=" mx-3 font-medium text-lg uppercase">
              {viewData?.employeeId}
            </div>
          </label>
          <label className=" flex p-2 text-gray-700 border border-transparent border-black shadow-md ">
            <div className="font-bold text-lg"> Designation:</div>
            <div className=" mx-3 font-medium text-lg">
              {viewData?.designation}
            </div>
          </label>
          <label className=" flex p-2 text-gray-700 border border-transparent border-black shadow-md ">
            <div className="font-bold text-lg"> Email:</div>
            <div className=" mx-3 font-medium text-lg">{viewData?.email}</div>
          </label>
          <label className=" flex p-2 text-gray-700 border border-transparent border-black shadow-md ">
            <div className="font-bold text-lg"> Location:</div>
            <div className=" mx-3 font-medium text-lg">
              {viewData?.employeeLocation}
            </div>
          </label>
          <label className=" flex p-2 text-gray-700 border border-transparent border-black shadow-md ">
            <div className="font-bold text-lg"> Salary:</div>
            <div className=" mx-3 font-medium text-lg">{viewData?.salary}</div>
          </label>
          <label className=" flex p-2 text-gray-700 border border-transparent border-black shadow-md ">
            <div className="font-bold text-lg"> Joining:</div>
            <div className="mx-3  font-medium text-lg">
              {viewData?.joiningDate}
            </div>
          </label>
        </div>

        <Link to="/">
          <button className="w-full mt-5 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            BACK
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewEmp;
