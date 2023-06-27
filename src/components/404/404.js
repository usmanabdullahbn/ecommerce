// Error Screen

import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Error = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      Navigate("/");
    }, 5000);
  }, {});

  return (
    <>
      <h1>Sorry Page Not Found </h1>
    </>
  );
};
export default Error;
