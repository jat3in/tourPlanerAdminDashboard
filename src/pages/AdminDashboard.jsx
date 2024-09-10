import Navbar from "../components/Navbar";
import Table from "../components/Table";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="w-full min-h-dvh h-full bg-neutral-900 p-8 flex flex-col">
      <Navbar onLogout={onLogout} />
      <Table />
    </div>
  );
};

export default AdminDashboard;
