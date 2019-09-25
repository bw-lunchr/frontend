import React, { useEffect, useState} from 'react';
import SchoolCard from './SchoolCard';
import style from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { tsPropertySignature } from '@babel/types';

const SchoolContainer = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 5% 0%;
    padding-right: 50px;
    padding-left: 50px;
`

 function AdminCard(){
    const [amount, setAmount] = useState([]);
    const [data, setData] = useState([]);
    console.log("School data: ", data);
    useEffect(() => {

        const getData = () => {
          axiosWithAuth()
            .get('/admin/1/schools')
            .then(res => {
                console.log("School info", res);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        getData();
    }, []);

    return (
        <div className = "SchoolList">

            <SchoolContainer>
            {data.map(item => (
                <SchoolCard key = {item.id} Name = {item.name} Location = {item.location} funds={item.requested_funds} amount={data} updateAmounts={setData} id={item.id} />
                
            ))}
            </SchoolContainer>
            
        </div>
    )
}

export default AdminCard;