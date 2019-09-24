import React, { useEffect, useState} from 'react';
import axios from 'axios';


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
        <section className = "DonorList">

            Section here
        </section>
    )
}