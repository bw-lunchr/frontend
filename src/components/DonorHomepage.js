import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DonorCard from './DonorCard';
import style from 'styled-components';

const DonorContainer = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 200px;
    padding-right: 50px;
    padding-left: 50px;

`

export default function DonorHomepage(){

    const [data1, setData] = useState([]);
    console.log("DonorHomepage data: ", data1);
    useEffect(() => {

        const getData = () => {
            axios.get('https://bw-luncher.herokuapp.com/api/schools ')
            .then(res => {
                console.log("DonorHomepageAPI", res);
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

            <DonorContainer>
            {data1.map(item => (
                <DonorCard key = {item.id} Name = {item.name} Location = {item.location} Funds={item.requested_funds}/>
                
            ))}
            </DonorContainer>
            
        </div>
    )
}