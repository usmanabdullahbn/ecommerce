import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const LogoutAlert = () => {


  return (
    <div>
      <Alert severity="success" style={{
        justifyContent: "center",
        marginRight: "5px"
    }} >
        <AlertTitle>You have been logged out.</AlertTitle>
        
      </Alert>
    </div>
  );
};

export default LogoutAlert;
