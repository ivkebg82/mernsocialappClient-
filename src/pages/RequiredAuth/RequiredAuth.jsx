import React from "react";
import { redirect, Outlet } from "react-router-dom";
import { useUserState } from "../../Context";
function RequiredAuth() {
  const { user } = useUserState();

  return user ? <Outlet /> : redirect("/");
}

export default RequiredAuth;
