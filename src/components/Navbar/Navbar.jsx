import { Link } from "react-router-dom";
import useQuestionStore from "../../store/zustand";

function Navbar() {
  const { auth, logoutUser } = useQuestionStore();

  return (
    <nav className="w-full bg-transparent text-neutral-900 px-5 md:px-10 flex items-center justify-between py-5 text-sm border-b-slate-200 border">
      <h1 className=" text-2xl font-bold tracking-tight flex items-center gap-1" style={{color: '#e91e63'}}> 
        Math<span className="text-neutral-900"> Wise</span>
      </h1>
      <div className="space-x-5">
        {!auth?.email && (
          <Link
            className=" text-pink-600 py-2 px-5  font-semibold border rounded-full border-orange-500"
            style={{ borderColor: '#e91e63', }}
            to="/login"
          >
            Login
          </Link>
        )}
        {auth?.email ? (
          <button
            className="py-2 transition px-5 text-neutral-50 font-semibold rounded-full"
            style={{ backgroundColor: '#e91e63' }}
            onClick={logoutUser}
          >
            Logout
          </button>
        ) : (
          <Link
            className="py-2 transition px-5 text-neutral-50 font-semibold rounded-full"
            style={{ backgroundColor: '#e91e63' }}
            to="/register"
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
