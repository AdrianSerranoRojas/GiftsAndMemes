import { useState } from "react";

import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import {
  singInWithGoogle,
  singInWithEmailAndPassword,
} from "../../firebase/firebase";


export default function SignInForm() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  async function handleLoginWithGoogleClick(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await singInWithGoogle();
      await syncUserData();
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
    navigate("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await singInWithEmailAndPassword(Email, Password);
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Typography>Login With Google</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLoginWithGoogleClick}
      >
        <GoogleIcon className="googleLogo" />
        Login with Google
      </Button>
      <hr></hr>
      <Typography>Login With Email and Password</Typography>

      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="Email">
            Email
          </label>
          <input
            className="form-control"
            id="Email"
            type="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="Password">
            Password
          </label>
          <input
            className="form-control"
            id="Password"
            type="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
      {loginError && (
        <section className="row row-cols-1 mb-3 border py-3 bg-light">
          <div className="col">
            <h2 className="h5">Something went wrong</h2>
            <hr />
            <p className="mt-3">{loginError}</p>
          </div>
        </section>
      )}
      <section className="row row-cols-1 mb-5">
        <div className="col">
          {/* <p className="accNotExists">You don't have a Musikfy account?</p>
          <Link to="/sign-up"> Sign up </Link> */}
          <hr />
        </div>
        {/* <div className="col">
          <Link to="/reset-Password">Forgot your Password?</Link>
        </div> */}
      </section>
    </div>
  );
}
