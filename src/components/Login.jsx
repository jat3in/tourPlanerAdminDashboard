import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z0-9]{3,20}$/.test(formData.name)) {
      newErrors.name = "Name must be 3-20 characters and alphanumeric";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[\w@$!%*?&]{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters, including letters and numbers";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("Form submitted:", formData);
        // const response = await fetch("/api/login", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(formData),
        // });
        if (true) {
          // Login successful
          onLoginSuccess();
          navigate("/dashboard");
        } else {
          setErrors({ form: "Invalid credentials" });
        }
      } catch (error) {
        setErrors({ form: "An error occurred. Please try again." });
      }
    }
  };

  return (
    <div className="w-full min-h-dvh bg-neutral-900 flex justify-center items-center">
      <div className="border-[1px] rounded-md p-8 w-[380px]">
        <div className="flex items-center justify-center w-full py-4">
          <div className="size-24 rounded-full flex items-center justify-center bg-white text-xl">
            Admin
          </div>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <div className="flex flex-col w-full">
              <label className="text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-0.5 rounded-md bg-transparent border-[1px] text-white px-2"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-0.5 rounded-md bg-transparent border-[1px] text-white px-2"
              />
              {errors.password && (
                <span className="text-red-500 text-sm w-full">
                  {errors.password}
                </span>
              )}
            </div>
            {errors.form && (
              <span className="text-red-500 text-sm">{errors.form}</span>
            )}
            <button
              type="submit"
              className="w-full bg-white rounded-md py-1 mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
