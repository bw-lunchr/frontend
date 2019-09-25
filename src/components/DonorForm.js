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
              <Field
                type="text"
                name = "Name"
                placeholder="School Name"
              />{touched.Name && errors.Name && (<p className="errors">{errors.Name}</p>)}
        </Grid.Column>
           <Grid.Column>
               <Field
                type= "text"
                name = "Location" 
                placeholder = "School Location"
               />{touched.Location && errors.Location && (<p className="errors">{errors.Location}</p>)}
                  </Grid.Column>
            
                 <Grid.Column>
                <Field
                  type = "Text"
                  name = "Amount"
                  placeholder = "Amount Needed"
                />{touched.amount && errors.amount&& (<p className="errors">{errors.amount}</p>)}
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
                <li>Amount: {item.amount}</li>
            </ul>
        ))}
        </div>
    )
}
const FormikDonorForm = withFormik({
    mapPropsToValues({Name, Location, amount}){
        return{
            Name: Name || "",
            Location: Location || "", 
            amount: amount || "" 
        }
    },
    validationSchema: Yup.object().shape({
        Name: Yup.string().required("You must put a school name"),
        Location: Yup.string().required("You must put a location"),
        amount : Yup.string().required("You must input an amount")
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