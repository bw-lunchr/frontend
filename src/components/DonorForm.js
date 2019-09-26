import React, {useEffect, useState} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Grid , Button} from "semantic-ui-react";

const DonorForm = ({values, errors, touched, status, addSchool}) => {
  const [input, setInput] = useState([]);
//   console.log("Schools input", input);
  const [school, setSchool] = useState({Name: "", Location: "", Amount: ""});
    
//   useEffect(() => {
//     if(status){
//       setInput([...input, status])
//     }
//   }, [status]);
    
  const handleChange = (e) => {
    setSchool({
      ...school,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    addSchool(school);
  }

  return(
    <div className='donor-form'>
      <Form onSubmit={handleSubmit}>
        <Grid columns={4}>
        <Grid.Column>
          <p>School Name</p>
            <Field
              type="text"
              name = "Name"  
              placeholder = "Name"
              value={school.Name}
              onChange={handleChange}
            />
            {touched.Name && errors.Name && (<p className="errors">{errors.Name}</p>)}
        </Grid.Column>
    
        <Grid.Column>
          <p>School Location</p>
            <Field
              type= "text"
              name = "Location" 
              placeholder = "Location" 
              value={school.Location}
              onChange={handleChange}
            />
          {touched.Location && errors.Location && (<p className="errors">{errors.Location}</p>)}
        </Grid.Column>
            
        <Grid.Column>
          <p>Amount Needed</p>
            <Field
              type = "Text"
              name = "Amount"
              placeholder = "Amount"
              value={school.Amount}
              onChange={handleChange}
            />
            {touched.Amount && errors.Amount&& (<p className="errors">{errors.Amount}</p>)}
        </Grid.Column>

        <Grid.Column>
          <div className='donor-btn'>
            <Button>Submit</Button>
          </div>
        </Grid.Column>
             
        </Grid>
      </Form>
          
      {input.map(item => (
        <ul className="DHgird" key = {item.id}>
          <li>Name: {item.Name}</li>
          <li>Location: {item.Location}</li>
          <li>Amount: {item.Amount}</li>
        </ul>
      ))}
    </div>
  )
}

const FormikDonorForm = withFormik({
  mapPropsToValues({Name, Location, Amount}){
    return{
      Name: Name || "",
      Location: Location || "", 
      Amount: Amount || "" 
    }
  },

  validationSchema: Yup.object().shape({
    Name: Yup.string().required("You must put a school name"),
    Location: Yup.string().required("You must put a location"),
    Amount : Yup.string().required("You must input an amount")
  }),

  handleSubmit(values, {setStatus}){
    console.log(values);
    axios
      .post('https://bw-luncher.herokuapp.com/api/admin/1/schools', values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => { 
        console.log('database error', err.res);
      })
  }
})(DonorForm)
console.log("This hoc", FormikDonorForm)
export default FormikDonorForm;