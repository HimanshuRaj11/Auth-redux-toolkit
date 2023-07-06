import { Link , useNavigate} from "react-router-dom";
import "./Form.css";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { login } from "../../Redux/Slice/UserSlice";
// import axios from "axios";
export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [Input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const handelInput = (e) => {
    let { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };
  const submit = async () => {
    dispatch(login({Input,navigate}))
  };
  return (
    <div className="formContainer">
      <div className="form">
        <h1>LOGIN</h1>
        <input
          type="email"
          name="email"
          value={Input.email}
          placeholder="Email"
          onChange={handelInput}
        />
        <input
          type="password"
          name="password"
          value={Input.password}
          placeholder="Password"
          onChange={handelInput}
        />
        <button onClick={submit}>Login</button>
        <div className="links">
          <Link to="/forgot-password" className="formLink">
            Forgot password
          </Link>
          <Link to="/register" className="formLink">
            Don`t have an account
          </Link>
        </div>
      </div>
    </div>
  );
}
