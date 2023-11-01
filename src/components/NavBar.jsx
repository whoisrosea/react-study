import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import { AuthContext } from "../context";

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const exit = (e) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem('auth')
  };

  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 8,

      }}
    >
      <MyButton onClick={exit}>exit</MyButton>
      <Link to="/posts">posts</Link>
      <Link to="/about">about</Link>
    </div>
    <hr/>
    </>
  );
};

export default NavBar;
