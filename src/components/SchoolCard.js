  
import React from 'react';
import style from 'styled-components';

const Wrapper = style.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 250px;
  background-color: #D3D3D3;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;
const Description = style.p`
  color: #696969;
  padding-top: 14%
  text-align: center;
`;

const SchoolCard = function(props)  { 
    return(
        <div>
            <Wrapper>
            <h3>{props.Name}</h3>
            <Description>
            <p>{props.Location}</p>
            <p>Requested Amount: {props.Funds}</p>
            </Description>
            </Wrapper>
        </div>


    )
}
export default SchoolCard;