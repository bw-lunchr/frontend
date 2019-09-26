import React, {useEffect, useState} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Grid , Button} from "semantic-ui-react";

const DonorForm = ({errors, touched, status, addSchool}) => {
  const [input, setInput] = useState([]);
  // console.log("Schools input", input);
  const [school, setSchool] = useState({name: "", location: "", requested_funds: ""});
    
  useEffect(() => {
    if(status){
      setInput([...input, status])
    }
  }, [status]);
    
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
              name = "name"  
              placeholder = "name" 
              value={school.name} 
              onChange={handleChange} 
            />
            {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
        </Grid.Column>
    
        <Grid.Column>
          <p>School Location</p>
            <Field
              type= "text"
              name = "location" 
              placeholder = "location"  
              value={school.location} 
              onChange={handleChange} 
            />
          {touched.location && errors.location && (<p className="errors">{errors.location}</p>)}
        </Grid.Column>
            
        <Grid.Column>
          <p>Amount Needed</p>
            <Field
              type = "text"
              name = "requested_funds"
              placeholder = "amount" 
              value={school.requested_funds} 
              onChange={handleChange} 
            />
            {touched.requested_funds && errors.requested_funds && (<p className="errors">{errors.requested_funds}</p>)}
        </Grid.Column>

        <Grid.Column>
          <div className='donor-btn'>
            <Button type='submit'>Submit</Button>
          </div>
        </Grid.Column>           
        </Grid>     
        {input.map(item => (
          <ul className="DHgird" key = {item.id}>
            <li>Name: {item.name}</li>
            <li>Location: {item.location}</li>
            <li>Amount: {item.requested_funds}</li>
          </ul>
        ))}
      </Form>
    </div>
  )
}

const FormikDonorForm = withFormik({
  mapPropsToValues({name, location, requested_funds}){
    return{
      name: name || "",
      location: location || "", 
      requested_funds: requested_funds || "" 
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("You must put a school name"),
    location: Yup.string().required("You must put a location"),
    requested_funds : Yup.string().required("You must input an amount")
  }),

  handleSubmit(values, {setStatus}){
    console.log(values);
    axios
      .post(`https://bw-luncher.herokuapp.com/api/admin/3/schools`, values)
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