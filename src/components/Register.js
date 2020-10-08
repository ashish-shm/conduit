import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import NonAuthHeader from "./NonAuthHeader";
import { useHistory } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

function Register() {
  const [error, setError] = useState("");
  let history = useHistory();
  let url = "https://mighty-oasis-08080.herokuapp.com/api/users";

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    console.log("submitProps", submitProps);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: values }),
    })
      .then((res) => {
        console.log(res.json());
        if (res.status === 200) {
          console.log(res);
          return history.push("/dashboard");
        }
      })
      .then(({ user }) => {
        localStorage.setItem("authToken", user.token);
      })
      .catch((err) => setError(err));
    submitProps.setSubmitting(false);
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    email: Yup.string().email("Invalid email format").required("Required"),
    username: Yup.string()
      .min(6, "Username is too short - should be 6 chars minimum.")
      .required("Required"),
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

                  <div className="form-control">
                    <h2>UserName</h2>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter UserName"
                    />
                    <ErrorMessage name="username" component={TextError} />
                  </div>

                  <button
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Submit
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

export default Register;
