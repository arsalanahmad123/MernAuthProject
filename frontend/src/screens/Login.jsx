import { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/v2/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      <div className="flex justify-between items-center text-gray-950 ">
        <img src="/login.png" alt="login image" className="w-[600px] h-full" />
        <div className="bg-white text-gray-800 flex flex-col p-24">
          <h1 className="text-6xl font-bold mb-10">Login Here!</h1>
          <p className="text-3xl font-semibold text-center mb-5">
            Login to your account
          </p>
          <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="mt-5 w-full bg-slate-800 text-white p-2 text-xl transition-all duration-300 hover:bg-slate-950"
            >
              Login
            </button>
            <p className="text-center mt-5">
              Don't have an account?
              <Link
                to="/users/signup"
                className="text-slate-800 font-semibold underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
