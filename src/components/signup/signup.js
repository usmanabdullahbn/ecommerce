// Signup Screen

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

const Signup = () => {
  // All state are here...!
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    userList: [],
  });

  const [massage, setMassage] = useState("");

  // Function to Create User...!
  const createUser = () => {
    let obj = {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    };
    let userListClone = formState.userList.slice(0);
    let duplicateUserFound = false;

    for (let i = 0; i < userListClone.length; i++) {
      // console.log(userListClone[i]);
      if (userListClone[i].email == formState.email) {
        duplicateUserFound = true;
        break;
      }
    }
    if (duplicateUserFound) {
      setMassage("Email already exists. Try another email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(formState.email) == false) {
      setMassage("Email is not valid. Try another email.");
      return;
    }
    if (formState.name.trim() == "") {
      setMassage("Name must be filled out");
      return;
    }
    if (formState.password.length < 8) {
      setMassage("Password must be at least 8 characters long.");
      return;
    } else {
      userListClone.push(obj);
      setFormState({
        ...formState,
        userList: userListClone,
        name: "",
        email: "",
        password: "",
      });
    }
  };

  const navigate = useNavigate();

  // Component is mount...!
  useEffect(() => {
    if (localStorage.getItem("Users") != null) {
      let fetchUser = localStorage.getItem("Users");
      fetchUser = JSON.parse(fetchUser);
      if (fetchUser) {
        setFormState({
          ...formState,
          userList: fetchUser,
        });
      }
    } else {
      localStorage.setItem("Users", JSON.stringify([]));
    }
  }, []);

  // This hook works on every update of userList
  useEffect(() => {
    if (formState.userList.length > 0) {
      let users = formState.userList.slice(0);
      localStorage.setItem("Users", JSON.stringify(users));
    }
  }, [formState.userList]);

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
            Register User
          </Typography>
          <Box component="form">
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Enter your Name"
              name="name"
              autoFocus
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="abc@xyz.com"
              name="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="********"
              type="password"
              id="password"
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
            />
            <Typography component="span" style={{ color: "red" }}>
              {massage}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={createUser}
            >
              Register User
            </Button>

            <Grid item>
              <a
                style={{
                  cursor: "pointer",
                  color: "blueviolet",
                }}
                onClick={() => navigate("/")}
              >
                {" "}
                Log In
              </a>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </>
  );
};
export default Signup;

// <>
// <h1>Register User</h1>

// <div>
//   <label>
//     Name:
//     <input
//       type="text"
//       placeholder="Enter Your Name"
//       value={formState.name}
//       onChange={(e) =>
//         setFormState({ ...formState, name: e.target.value })
//       }
//     />
//   </label>{" "}
//   <br />
//   <label>
//     Email:
//     <input
//       type="email"
//       placeholder="abc@xyz.com"
//       value={formState.email}
//       onChange={(e) =>
//         setFormState({ ...formState, email: e.target.value })
//       }
//     />
//   </label>{" "}
//   <br />
//   <label>
//     Password:
//     <input
//       type="password"
//       placeholder="********"
//       value={formState.password}
//       onChange={(e) =>
//         setFormState({ ...formState, password: e.target.value })
//       }
//     />
//   </label>{" "}
//   <br />
//   <button onClick={createUser}> Register User </button>
//   <hr />
//   <button onClick={() => navigate("/")}> Log In</button>
// </div>
// </>
