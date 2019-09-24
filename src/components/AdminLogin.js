import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { Button, Divider, Grid, Segment } from "semantic-ui-react";

const UserForm = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="admin-form">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <div class="right floated left aligned seven wide column">
            <Grid.Column>
              <div class="ui hidden divider"></div>
              <div class="ui hidden divider"></div>
              <Form>
                <h1>Login</h1>

                <Field type="text" name="username" placeholder="Username" />

                {touched.username && errors.username && (
                  <p className="error">{errors.username}</p>
                )}
                <div class="ui hidden divider"></div>
                <Field type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                  <p className="error">{errors.password}</p>
                )}
                <div class="ui hidden divider"></div>
                <button>Submit!</button>
              </Form>
            </Grid.Column>
          </div>

          <div class="right floated left aligned seven wide column">
            <Grid.Column>
              <div class="ui hidden divider"></div>
              <h1>Create a Profile </h1>

              <Form>
                <Field type="text" name="school" placeholder="School" />
                <div class="ui hidden divider"></div>
                {touched.school && errors.school && (
                  <p className="error">{errors.school}</p>
                )}
                <Field type="text" name="email" placeholder="Email" />
                <div class="ui hidden divider"></div>
                {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
                <Field
                  type="text"
                  name="usernamecreate"
                  placeholder="Username"
                />
                <div class="ui hidden divider"></div>
                {touched.usernamecreate && errors.usernamecreate && (
                  <p className="error">{errors.usernamecreate}</p>
                )}
                <Field
                  type="password"
                  name="passwordcreate"
                  placeholder="Password"
                />
                <div class="ui hidden divider"></div>
                {touched.passwordcreate && errors.passwordcreate && (
                  <p className="error">{errors.passwordcreate}</p>
                )}

                <button>Submit!</button>
              </Form>
            </Grid.Column>
          </div>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({
    username,
    password,
    school,
    email,
    usernamecreate,
    passwordcreate
  }) {
    return {
      username: username || "",
      password: password || "",
      school: school || "",
      email: email || "",
      usernamecreate: usernamecreate || "",
      passwordcreate: passwordcreate || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required()
  }),
  //You can use this to see the values
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(UserForm);
console.log("This is the HOC", FormikUserForm);
export default FormikUserForm;
