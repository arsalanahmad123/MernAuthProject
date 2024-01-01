import { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/v2/register";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    }).then((res) => {
      res.json().then((data) => {
        if (data.status === "success") {
          alert(data.message);
        } else {
          alert(data.message);
        }
      });
    });
  };
  return (
    <>
      <div className="flex justify-between items-center text-gray-950 flex-col-reverse lg:flex-row">
        <img src="/signup.png" alt="signup" className="w-[550px] " />
        <div className="bg-white text-gray-800 flex flex-col p-24 lg:w-1/2">
          <h1 className="text-6xl font-bold mb-10">Register Now!</h1>
          <p className="text-3xl font-semibold text-center mb-5">
            Create your account
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-3">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="name"
                name="name"
                value={credentials.name}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded-md text-lg text-gray-800 hover:border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded-md text-lg text-gray-800 hover:border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded-md text-lg text-gray-800 hover:border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={credentials.confirmPassword}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded-md text-lg text-gray-800 hover:border-gray-500"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full bg-slate-800 text-white p-2 text-xl transition-all duration-300 hover:bg-slate-950"
            >
              Register
            </button>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link
                to="/users/login"
                className="text-slate-800 font-semibold underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
