import { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  // State to store real data
  const [realData, setRealData] = useState([]);

  // Function to fetch data from API
  const getData = async () => {
    try {
      const response = await axios.get("https://tourplanerbackend.onrender.com/contact");
      console.log("Data:", response.data.data); // Logs the data received from the API
      setRealData(response.data.data); // Set real data in the state
    } catch (error) {
      console.error("Error fetching data:", error.message); // Logs any error if the request fails
    }
  };

  // useEffect to call the getData function when the component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-4 w-full text-white border-[1px] rounded-md border-neutral-500 overflow-x-auto max-h-[80vh]">
      <table className="w-full">
        <thead className="bg-neutral-800 sticky top-0 z-10">
          <tr className="text-left">
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Package Name</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {realData.length > 0 ? (
            realData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-neutral-700 hover:bg-neutral-700"
              >
                <td className="px-4 py-2">{row.username}</td>
                <td className="px-4 py-2">{row.destination}</td>
                <td className="px-4 py-2">{row.phone}</td>
                <td className="px-4 py-2">{row.email}</td>
                <td className="px-4 py-2">{row.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2" colSpan="4">
                Loading data...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
