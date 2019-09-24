import React from 'react';
import style from 'styled-components';

const Card = style.div`
    width: 300px;
    height: 500px;
    margin-bottom: 20%;
    padding-top: 15%;
    text-shadow: 0 5px 10px #777;
    box-shadow: 0 5px 10px #777;
    margin-left: 50px;
    margin-right: 50px;
`

const DonorCard = function(props)  { 


    return(
        <div>
            <Card>
            <h1>{props.Name}</h1>
            <h2>{props.Location}</h2>
            <h3>Requested Amount: {props.Funds}</h3>
            </Card>
        </div>


    )
}
export default DonorCard;