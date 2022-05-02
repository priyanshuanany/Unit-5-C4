import { useState } from "react";
import {useNavigate} from "react-router-dom";


export const Login = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = (elem) => {
        const {id,value} = elem.target;

        setForm({
            ...form,
            [id] : value
        })
    }

    const handleSubmit = async (elem) => {
        elem.preventDefault();

        const data = await fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const res = await data.json();

        if(res.token){
            localStorage.setItem("authReducer", JSON.stringify({token: res.token, authState: true}))
            navigate("/")
        }
        else{
            alert("Please Enter valid details")
        }
    }
    return (
      <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} action="" style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px"
          }}></form>
        <input
          onChange={handleChange}
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
          onChange={handleChange}
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit">Login</button>
      </div>
    );
  };