import React, { useEffect, useState} from 'react';
import axios from 'axios';
import SchoolCard from './SchoolCard';
import style from 'styled-components';

const SchoolContainer = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 200px;
    padding-right: 50px;
    padding-left: 50px;
`

export default function SchoolGrid(){

    const [data, setData] = useState([]);
    console.log("School data: ", data);
    useEffect(() => {

        const getData = () => {
            axios.get('https://bw-luncher.herokuapp.com/api/admin/3/schools')
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
            {data.map(item => (
                <SchoolCard key = {item.id} Name = {item.name} Location = {item.location} Funds={item.requested_funds}/>
                
            ))}
            </SchoolContainer>
            
        </div>
    )
}
