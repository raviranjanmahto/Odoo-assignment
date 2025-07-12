import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCredentials } from "../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearCredentials());
    navigate("/login");
  };

  return (
    <header className="bg-green-600 text-white px-6 py-3 shadow-md flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">
        Skill Swap Platform
      </Link>

      <nav>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-white text-green-700 px-4 py-1 rounded-md font-semibold hover:bg-green-100"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-white text-green-700 px-4 py-1 rounded-md font-semibold hover:bg-green-100"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
