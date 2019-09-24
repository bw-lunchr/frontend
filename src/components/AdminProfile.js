import React, { useEffect, useState} from 'react';
import axios from 'axios';
import SchoolCard from './SchoolCard';
import style from 'styled-components';

const SchoolContainer = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

export default function SchoolGrid(){

    const [data1, setData] = useState([]);
    console.log("School data: ", data1);
    useEffect(() => {

        const getData = () => {
            axios.get('https://bw-luncher.herokuapp.com/api/admin/2/schools')
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
        <div className = "DonorList">

            <SchoolContainer>
            {data1.map(item => (
                <SchoolCard key = {item.id} Name = {item.name} Location = {item.location} Funds={item.requested_funds}/>
                
            ))}
            </SchoolContainer>
            
        </div>
    )
}

