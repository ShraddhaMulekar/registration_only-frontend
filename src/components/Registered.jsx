import React, { useState } from "react";
import backendUrl from "../backendUrl.js";
import { useNavigate } from "react-router-dom";

const Registered = () => {
  const [action, setAction] = useState("Register");
  const [form, setForm] = useState({ userName: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      action === "Register"
        ? `${backendUrl}/user/register`
        : `${backendUrl}/user/login`;

    const body =
      action === "Register"
        ? form
        : { email: form.email, password: form.password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
      alert(data.msg);
      setMessage(data.msg);
      setForm({ userName: "", email: "", password: "" });

      if (action === "Login" && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/private-page");
      }
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>{action}</h2>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Name"
              name="userName"
              value={form.userName}
              onChange={handleInput}
            />
          </div>
        )}
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handleInput}
          />
        </div>
        <br />
        <button
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Register");
          }}
        >
          Register!
        </button>
        <button
          className={action === "Register" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Log in!
        </button>
        <br />
        <br />
      </form>
      <div>
        <button onClick={() => navigate("/")}>go to dashboard</button>
      </div>
    </>
  );
};

export default Registered;
