import { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

const AddEmpForm = () => {
  const { employeeList, setEmployeeList } = useContext(listContext);
  const [isupdate, setIsUpdating] = useState(false);
  const { state } = useLocation();

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    employeeName: "",
    employeeId: "",
    designation: "",
    email: "",
    employeeLocation: "",
    salary: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isupdate) {
      setEmployeeList([...employeeList, formValue]);
      setFormValue({
        employeeName: "",
        employeeId: "",
        designation: "",
        email: "",
        employeeLocation: "",
        salary: "",
        joiningDate: "",
      });
    } else {
      const updating = employeeList?.map((item, index) => {
        return index === state?.ind ? { ...item, ...formValue } : item;
      });
      setEmployeeList(updating);
      setIsUpdating(false);
    }
    navigate("/");
  };
  useEffect(() => {
    if (state?.data) {
      setIsUpdating(true);
      setFormValue({ ...state?.data });
    }
  }, [state?.data]);

  return (
    <div className="min-h-screen bg-gray-1000 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Add Your Employee
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Employee Name
            </label>
            <input
              type="text"
              name="employeeName"
              value={formValue?.employeeName}
              placeholder="Enter employee name"
              className="w-full  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              value={formValue?.employeeId}
              placeholder="Enter employee ID"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Designation
            </label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              name="designation"
              value={formValue?.designation}
            >
              <option value="--Select Designation--">
                --Select Designation--
              </option>
              <option value="System Engineer">System Engineer</option>
              <option value="Sr System Engineer">Sr System Engineer</option>
              <option value="Tech Analyst">Tech Analyst</option>
              <option value="Consultant">Consultant</option>
              <option value="Software Developer">Software Developer</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formValue?.email}
              placeholder="abc@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                name="employeeLocation"
                value={formValue?.employeeLocation}
                placeholder="Enter Your Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              value={formValue?.salary}
              placeholder="000000"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Joining Date
            </label>
            <input
              type="date"
              name="joiningDate"
              value={formValue?.joiningDate}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
        {/* <Link to="/" className="text-blue-500 hover:underline">
          Back to Employee List
        </Link> */}
      </div>
    </div>
  );
};
export default AddEmpForm;
