import React, { useContext, useState } from "react";
import { Route, Routes, Navigate, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import Login from "../pages/login";
import { AuthContext } from "../context";
import Posts from "../pages/posts";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Posts />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
