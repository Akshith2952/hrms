import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaves = () => {
  const [data, setData] = useState([]);
  const [leaveStatusMap, setLeaveStatusMap] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/leaves/")
      .then((response) => {
        setData(response.data.data);
        // Initialize leaveStatusMap with default values
        const initialStatusMap = {};
        response.data.data.forEach((leave) => {
          initialStatusMap[leave._id] = leave.leaveStatus ? leave.leaveStatus : 'Pending';
        });
        setLeaveStatusMap(initialStatusMap);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e, id) => {
    const updatedStatusMap = { ...leaveStatusMap };
    updatedStatusMap[id] = e.target.value;
    setLeaveStatusMap(updatedStatusMap);
  };

  const handleSubmit = async (id) => {
    try {
      const leaveStatus = leaveStatusMap[id];
      await axios.put(`http://localhost:5000/leaves/${id}`, { leaveStatus });
      console.log(`Leave ID ${id} updated to ${leaveStatus}`);
      alert( `Leave is ${leaveStatus}` )
    } catch (error) {
      console.error(`Error updating leave ID ${id}:`, error);
    }
  }

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Leaves</h2>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Leave Type
            </th>
            <th scope="col" className="px-6 py-3">
              start date
            </th>
            <th scope="col" className="px-6 py-3">
              end date
            </th>
            <th scope="col" className="px-6 py-3 ">
              reason
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
            <th scope="col" className="px-6 py-3">
              Approve/Reject
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((leave) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={leave._id}>
                <td className="px-6 py-4">{leave.name}</td>
                <td className="px-6 py-4">{leave.leaveType}</td>
                <td className="px-6 py-4">{leave.startDate}</td>
                <td className="px-6 py-4">{leave.endDate}</td>
                <td className="px-6 py-4">{leave.reason}</td>
                <td className="px-6 py-4">
                  <select
                    value={leaveStatusMap[leave._id]}
                    onChange={(e) => handleChange(e, leave._id)}
                    className="border border-black dark:border-dark-black rounded p-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approve">Approve</option>
                    <option value="Reject">Reject</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => handleSubmit(leave._id)}>
                    Submit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaves;
