import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import NonAuthHeader from "./NonAuthHeader";
import { useHistory } from "react-router";

function Login() {
  let history = useHistory();
  let url = "https://mighty-oasis-08080.herokuapp.com/api/users/login";
  let [error, setError] = useState("");
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, submitProps) => {
    // console.log("Form data", values);
    // console.log("submitProps", submitProps);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: values }),
    })
      .then((res) => {
        res.json();
      
      })
      .then((data) => {
        console.log(data)
        localStorage.setItem("authToken", data.user.token);
        return history.push("/dashboard");
      })
      .catch((err) => setError(err));
    console.log(error);
    submitProps.setSubmitting(false);
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    email: Yup.string().email("Invalid email format").required("Required"),
  });
  return (
    <>
      <NonAuthHeader />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          // console.log("Formik props", formik);
          return (
            <>
              <div className="form">
                <Form>
                  <div className="form-control">
                    <h2>Email</h2>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                    <ErrorMessage name="email" component={TextError} />
                  </div>

                  <div className="form-control">
                    <h2>Password</h2>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                    />
                    <ErrorMessage name="password" component={TextError} />
                  </div>

                  <button
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Login
                  </button>
                </Form>
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default Login;
