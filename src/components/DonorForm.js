import React, {useEffect, useState} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const DonorForm = ({values, errors, touched, status}) => {
    const [input, setInput] = useState([]);
    console.log("Schools input", input);

    useEffect(() => {
        if(status){
            setInput([...input, status])
        }
    }, [status]);
    
    return(
        <div>
            <Form>
              <Field
                type="text"
                name = "Name"
                placeholder="School Name"
              />{touched.Name && errors.Name && (<p className="errors">{errors.Name}</p>)}
          
            
               <Field
                type= "text"
                name = "Location" 
                placeholder = "School Location"
               />{touched.Location && errors.Location && (<p className="errors">{errors.Location}</p>)}
                <Field
                  type = "text"
                  name = "amount"
                  placeholder = "amount needed"
                />{touched.amount && errors.amount&& (<p className="errors">{errors.amount}</p>)}
                <button>Submit Button</button>
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
        amount : Yup.string().required("you must put an amount")
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