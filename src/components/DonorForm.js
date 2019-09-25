import React, {useEffect, useState} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Divider, Grid, Segment} from "semantic-ui-react";





const DonorForm = ({values, errors, touched, status}) => {
    const [input, setInput] = useState([]);
    console.log("Schools input", input);

    
    useEffect(() => {
        if(status){
            setInput([...input, status])
        }
    }, [status]);
    
    return(
        <div className='donor-form'>
            <Form>
            <Grid columns={4}>
            <Grid.Column>
            <p>School Name</p>
              <Field
                type="text"
                name = "Name"
               
              />{touched.Name && errors.Name && (<p className="errors">{errors.Name}</p>)}
        </Grid.Column>
    
           <Grid.Column>
           <p>School Location</p>
               <Field
                type= "text"
                name = "Location" 
             
               />{touched.Location && errors.Location && (<p className="errors">{errors.Location}</p>)}
                  </Grid.Column>
            
                 <Grid.Column>
                     <p>Amount Needed</p>
                <Field
                  type = "Text"
                  name = "Amount"
            
                />{touched.Amount && errors.Amount&& (<p className="errors">{errors.Amount}</p>)}
                 </Grid.Column>
                <Grid.Column>
                <button>Submit</button>
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
        axios.post('https://reqres.in/api/users/', values)
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