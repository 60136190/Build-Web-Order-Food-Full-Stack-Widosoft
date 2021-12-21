import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
const UserRoute = ({ children, ...rest }) => {
  const { token } = useSelector((state) => state.authAdmin);
  return token ? children : <LoadingToRedirect />;
};

export default UserRoute;