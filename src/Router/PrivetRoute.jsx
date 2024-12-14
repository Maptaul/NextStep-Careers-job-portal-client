import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext.jsx/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (user) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
};

export default PrivetRoute;
