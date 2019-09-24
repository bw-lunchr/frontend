import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import {axiosWithAuth} from '../utils/axiosWithAuth';

import {Button, Divider, Grid, Segment} from "semantic-ui-react";

const UserForm = ({values, errors, touched, status}) => {
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

                <Field type="email" name="email" placeholder="Email" />
      
                {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
                <div class="ui hidden divider"></div>
                <Field type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                  <p className="error">{errors.password}</p>
                )}
                <div class="ui hidden divider"></div>
                <button>Submit</button>
              </Form>
            </Grid.Column>
          </div>

          <div class="right floated left aligned seven wide column">
            <Grid.Column>
              <div class="ui hidden divider"></div>
              <h1>Create a Profile </h1>

              <Form>
                <Field type="text" name="name" placeholder="Name" />
                <div class="ui hidden divider"></div>
                {touched.school && errors.school && (
                  <p className="error">{errors.school}</p>
                )}
                <Field type="email" name="emailcreate" placeholder="Email" />
                <div class="ui hidden divider"></div>
                {touched.emailcreate && errors.emailcreate && (
                  <p className="error">{errors.emailcreate}</p>
                )}
          
                {touched.usernamecreate && errors.usernamecreate && (
                  <p className="error">{errors.usernamecreate}</p>
                )}
                <Field
                  type="password"
                  name="passwordcreate"
                  placeholder="Password"
                />
                {touched.passwordcreate && errors.passwordcreate && (
                  <p className="error">{errors.passwordcreate}</p>
                )}
       <div class="ui hidden divider"></div>
                <button>Submit</button>
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

    passwordcreate: Yup.string().min(5, "Password must be at least 5 characters")
  }),
  //You can use this to see the values
  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post("https://bw-luncher.herokuapp.com/api/admin", values)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(UserForm);
console.log("This is the HOC", FormikUserForm);
export default FormikUserForm;
