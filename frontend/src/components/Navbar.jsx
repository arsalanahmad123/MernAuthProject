import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center bg-slate-800 p-3 text-white sticky top-0">
        <div className="absolute top-0 left-0 "></div>
        <span className="text-3xl">Ecommerce</span>
        <ul className="flex justify-between items-center flex-row">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="px-3">
            <Link to="/products">Products</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">Cart</Link>
          </li>
          <div className="flex justify-center items-center gap-3">
            <Link
              className="bg-white text-gray-700 px-3 py-2 font-bold rounded-lg"
              to={"/users/login"}
            >
              Login
            </Link>
            <Link
              className="bg-white text-gray-700 px-3 py-2 font-bold rounded-lg"
              to={"/users/signup"}
            >
              Register
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
}
