import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, logout } from "../../Redux/Slice/UserSlice";
export default function Navbar() {
  const { User } = useSelector((state) => ({...state.User}))
  const user = User.user
  
  const dispatch = useDispatch();
  const logoutUser = async () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className="NavbarContainer">
      <div className="navbar">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="menu">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/" className="link">
            About
          </Link>
          <Link to="/" className="link">
            Service
          </Link>
        </div>
        <div className="auth">
          {
            user ? (<>
             <button className="authLink" onClick={logoutUser}>
            Logout
          </button>
          <Link to="/profile" className="authLink">
            Profile
          </Link>
            </>) : (<>
              <Link to="/login" className="authLink">
            Login
          </Link>
            </>)
          }
         
        </div>
      </div>
    </div>
  );
}
