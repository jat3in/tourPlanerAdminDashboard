import { useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data from local storage
    localStorage.removeItem("authToken");
    // You might want to clear other items as well, depending on your auth implementation

    // Redirect to the login page
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="w-full flex items-start justify-between">
      <div>
        <h1 className="text-white font-bold md:text-3xl text-xl">
          Welcome Back Admin!
        </h1>
        <p className="text-neutral-400">Here's a list of tour query</p>
      </div>
      <div className="flex gap-x-2">
        <button
          className="bg-white rounded-md hover:bg-white/90 transition-colors"
          onClick={handleLogout}
        >
          <span className="px-2">Log Out</span>
        </button>
        <button>
          <div className="rounded-full bg-white flex items-center justify-center font-semibold size-8">
            <span>A</span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
