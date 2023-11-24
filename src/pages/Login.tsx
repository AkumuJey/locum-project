import { useState, FormEvent} from "react";
import {
  Container,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log(data);
    navigate('/')
  }
  return (
    <>
      <Paper
        elevation={3}
        component={`div`}
        sx={{
          width: "95%",
          maxWidth: "400px",
          mx: "auto",
          my: "auto",
          padding: "1rem",
          backgroundColor: "white",
        }}
      >
        <Container component={`form`} sx={{ width: "100%" }} noValidate={false} name="login" onSubmit={handleSubmit}>
          <Typography variant="h4" fontWeight={`bold`} textAlign={`center`} color="secondary">
            Login
          </Typography>
          <Grid
            container
            justifyContent={`center`}
            justifyItems={`center`}
            direction={`column`}
            my={2}
          >
            <Grid item>
              <InputLabel
                htmlFor="email"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  width: "100%",
                }}
              >
                Email
              </InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="off"
                required
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  px: "0.5rem",
                  py: "0.2rem",
                }}
              ></Input>
            </Grid>
            <Grid item>
              <InputLabel
                htmlFor="password"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  width: "100%",
                }}
              >
                Password
              </InputLabel>
              <Input
                id="password"
                name="password"
                autoComplete="off"
                required
                type={showPassword ? "text" : "password"}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  px: "0.5rem",
                  py: "0.2rem",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              ></Input>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%" }}
            color="secondary"
          >
            Login
          </Button>
        </Container>
        <Container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button style={{ textTransform: "none" }} type="button">
            Create Account
          </Button>
          <Button style={{ textTransform: "none" }} type="button">
            Forgot Password
          </Button>
        </Container>
      </Paper>
    </>
  );
};

export default Login;
