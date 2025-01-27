import React, { useState } from "react";
import { useTheme } from "./ThemContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {theme,setTheme}=useTheme()
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className={`border-[3px] border-black border-solid  bg-[${theme}]`}>
      <form
        className="flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-2xl font-bold">userName:</label>
          <input
            className="focus:outline-none border-[2px] border-solid border-black "
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />
        </div>
        <div>
          <label className="text-2xl font-bold">Password:</label>
          <input
            className="focus:outline-none border-[2px] border-solid border-black "
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>

        <div>
          {" "}
          <label className="text-2xl font-bold">Email:</label>
          <input
            className="focus:outline-none border-[2px] border-solid border-black "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <input
          className="px-8 py-2 font-bold rounded-md bg-cyan-300"
          type="submit"
          value="Submit"
        />
      </form>
      </div>
      <br /><br />
      <input type="checkbox" checked={theme==="#000"}  onChange={(e)=>setTheme(e.target.checked?"#000":'#fff')}/>
      Use Dark Mode
    </div>
  );
};

export default Login;
