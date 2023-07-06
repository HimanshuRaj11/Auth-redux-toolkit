import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Slice/UserSlice";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
  const matchPassword = Input.password===Input.ConfirmPassword;
  // if (matchPassword) {
  //   handelInput(matchPassword);
  // }
  const submit = () => {
    dispatch(register({Input,navigate}));
  };
  return (
    <div className="formContainer">
      <div className="form">
        <h1>REGISTER</h1>
        <input
          type="text"
          name="name"
          value={Input.name}
          placeholder="Name"
          onChange={handelInput}
        />
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
        {
          matchPassword?(<>
          <input
          type="password"
          name="ConfirmPassword"
          value={Input.ConfirmPassword}
          placeholder="Confirm Password"
          onChange={handelInput}
        />
          </>):(
            <>
            <input
          type="password"
          name="ConfirmPassword"
          className="errorInput"
          value={Input.ConfirmPassword}
          placeholder="Confirm Password"
          onChange={handelInput}
        />
            </>
          )
        }
        
        {
          matchPassword?(<button onClick={submit}>Register</button>):(<button style={{backgroundColor:"#92c2dd"}}>Register</button>)
        }
        
        <div className="links">
          <Link to="/forgot-password" className="formLink">
            Forgot password
          </Link>
          <Link to="/login" className="formLink">
            Already! have an account
          </Link>
        </div>
      </div>
    </div>
  );
}
