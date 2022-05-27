import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";

import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import Typography from "@mui/material/Typography";

import {
  singInWithGoogle,
  singUpWithEmailAndPassword,
} from "../../firebase/firebase";

import { syncUserData } from "../../utils/auth-requests";
import { TextField } from "@mui/material";

import * as Yup from "yup";

const userSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "The password is too short!")
    .max(50, "The password is too long!")
    .required("The password is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function SignUpForm() {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSingInWithGoogleClick(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await singInWithGoogle();
      await syncUserData();
    } catch (error) {
      setSignUpError(error.message);
    } finally {
      setLoading(false);
      setIsSuccess(true);
    }
  }

  const handleSubmit = async (values) => {
    try {
      await singUpWithEmailAndPassword(values.email, values.password);
      await syncUserData();
    } catch (error) {
      setSignUpError(error.message);
    } finally {
      setLoading(false);
      setIsSuccess(true);
    }
  };

  const initialValues = {
    email: "",
    password: "",
    loading: true,
    signUpError: null,
  };

  return (
    <>
      <Typography>Register With Google</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSingInWithGoogleClick}
      >
        <GoogleIcon />
        Sign Up With Google
      </Button>
      <hr></hr>
      <Typography>Register Email and Password</Typography>
      <section>

          <Formik
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({
              handleChange,
              errors,
              values,
              touched,
              isValidating,
              isValid,
            }) => (
              <Form>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isValidating || !isValid}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
      </section>
      {signUpError && (
        <section className="row row-cols-1 mb-3 border py-3 bg-light">
          <div className="col">
            <h2 className="h2 h2SignUp">Something went wrong</h2>
            <hr />
            <p className="mt-3">{signUpError}</p>
          </div>
        </section>
      )}
      <section className="row row-cols-1 mb-5">
        <div className="col">
          <p className="accExists">You already have a Musikfy account?</p>
          <Link to="/login">Log in</Link>
          <hr />
        </div>
        <div className="col">
          <Link to="/reset-password">Forgot your password?</Link>
        </div>
      </section>
      {/* {isSuccess && navigate("/")} */}
    </>
  );
}

export default SignUpForm;
