import React, { useState } from "react";
const Form = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const takeValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('StoredData',JSON.stringify(data))
    console.log(data)

    setData({
      userName: "",
      email: "",
      password: "",
    });
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const loacalData=JSON.parse(localStorage.getItem('StoredData'))
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="text-3xl font-bold ">
        {toggle ? "Sing up" : "Login"} Form
      </h1>
      <hr className="bg-white w-32" />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex gap-4">
          <div className="flex flex-col gap-y-4">
            {toggle && <label>Username:</label>}
            <label>Email:</label>
            <label>Password:</label>
          </div>
          <div className="flex flex-col gap-y-4">
            {toggle && (
              <input
                type="text"
                name="userName"
                value={data.userName}
                onChange={takeValue}
              />
            )}
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={takeValue}
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={takeValue}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="px-5 py-1 rounded-full bg-cyan-500 font-bold my-5">
            Submit
          </button>
        </div>
      </form>
      <p>
        {toggle ? "You don't have account" : "You have account already"}
        <span
          className="text-cyan-500 cursor-pointer mx-1"
          onClick={handleToggle}
        >
          {toggle ? "Login" : " Register"}
        </span>
      </p>
      <br /><br />
      {  
        toggle &&(
            <p>userName : {loacalData.userName}</p>

        )
      }
      <p>email : {loacalData.email}</p>
      <p>password: {loacalData.password}</p>

    </div>
  );
};

export default Form;
