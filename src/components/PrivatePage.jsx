import React from "react";
import { useNavigate } from "react-router-dom";

const PrivatePage = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/register");
  };
  return (
    <>
      <div>PrivatePage</div>
      <button onClick={handleLogOut}>Log out!</button>
      <br />
      <br />
      <br />
      <div>
        <button onClick={() => navigate("/")}>go to dashboard</button>
      </div>
    </>
  );
};

export default PrivatePage;
