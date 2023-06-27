// Login Screen

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Mertrial UI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Login = () => {
  const navigate = useNavigate();
  // All state are here...!
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    userList: [],
  });
  let user = null;
  const [massage, setMassage] = useState("");

  const loginUser = () => {
    for (let i = 0; i < formState.userList.length; i++) {
      if (
        formState.email == formState.userList[i].email &&
        formState.password == formState.userList[i].password
      ) {
        user = formState.userList[i];
        // setMassage("You Have Logged in Successfully");
        break;
      } else if (
        formState.email == formState.userList[i].email &&
        formState.password != formState.userList[i].password
      ) {
        setMassage("Invalid Password");
        break;
      } else if (
        formState.email != formState.userList[i].email &&
        formState.password != formState.userList[i].password
      ) {
        setMassage("Incorrect Email or Password");
      }
    }

    if (user != null) {
      // console.log("You have login successfully");
      // console.log(user);
      localStorage.setItem("AuthenticatedUser", JSON.stringify(user));
      window.location.reload();
      setFormState({
        ...formState,
        email: "",
        password: "",
      });
    }

    // console.log(massage);
  };

  useEffect(() => {
    let fetchUser = localStorage.getItem("Users");
    fetchUser = JSON.parse(fetchUser);

    if (fetchUser) {
      setFormState({
        ...formState,
        userList: fetchUser,
      });
    }
  }, []);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form">
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={loginUser}
            >
              Log In
            </Button>

            <Typography component="span" style={{ color: "red" }}>
              {massage}
            </Typography>

            <Grid item>
              <a
                style={{
                  cursor: "pointer",
                  color: "blueviolet",
                }}
                onClick={() => navigate("signup")}
              >
                {" "}
                Create a account
              </a>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </>

    // <>
    //   <div>
    //     <h1>Log In</h1>
    //     <label>
    //       Email:
    //       <input
    //         type="email"
    //         placeholder="abc@xyz.com"
    //         value={formState.email}
    //         onChange={(e) => setFormState({ ...formState, email: e.target.value })}
    //       />
    //     </label>

    //     <br />
    //     <label>
    //       Password:
    //       <input
    //         type="password"
    //         placeholder="******"
    //         value={formState.password}
    //         onChange={(e) =>
    //           setFormState({ ...formState, password: e.target.value })
    //         }
    //       />
    //     </label>
    //     <br />
    //     <button onClick={loginUser}> Login</button>

    //     <button onClick={() => navigate("signup")}> Create a account</button>
    //   </div>
    // </>
  );
};
export default Login;
