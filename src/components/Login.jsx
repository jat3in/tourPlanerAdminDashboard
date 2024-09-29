import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const {email, password } = formData;
      console.log(formData);
      if (!email && !password) alert("Please fill all fields");
      axios
        .post(
          `https://tourplanerbackend.onrender.com/login`,
          formData
        )
        .then((res) => {
          if (res.data.message === "Login Successfull") {
            alert("Logged In Successfully");
            onLoginSuccess()
            navigate("/dashboard")
  
          } else {
            alert(res.data.message);
          }
        })
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
              <label className="text-white">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
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
