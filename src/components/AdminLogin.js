import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";




const UserForm = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (status) {
        setUser ([...user, status]);
    }
  }, [status]);

  return (
    <div className="admin-form">
      <Form>
          <h1>Login</h1>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <button>Submit!</button>
      </Form>

    {/* create profile */}
    <h1>Create a Profile </h1>
      <Form>
        <Field type="text" name="school" placeholder="School" />
        {touched.school && errors.school && (
          <p className="error">{errors.school}</p>
        )}
      <Field type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
       <Field type="text" name="usernamecreate" placeholder="Username" />
        {touched.usernamecreate && errors.usernamecreate && (
          <p className="error">{errors.usernamecreate}</p>
        )}
        <Field type="password" name="passwordcreate" placeholder="Password" />
        {touched.passwordcreate && errors.passwordcreate && <p className="error">{errors.passwordcreate}</p>}
    
        <button>Submit!</button>
      </Form>
{/* 
      {user.map(users => (
        <ul key={users.id}>
          <li>Username:{users.username}</li>
          <li>Password: {users.password}</li>
          <li>School: {users.school}</li>
          <li>usernamecreate: {users.usernamecreate}</li>
          <li>passwordcreate: {users.passwordcreate}</li>
        </ul>
      ))} */}
      
    </div>



  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({ username, password, school, email, usernamecreate, passwordcreate }) {
    return {
        username: username || "",
        password: password || "",
        school: school || "",
        email: email || "",
        usernamecreate: usernamecreate || "",
        passwordcreate: passwordcreate || "",

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