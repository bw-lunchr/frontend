  
import React, {useState} from 'react';
import style from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth';

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

const initialAmount = {amount: ''};

const SchoolCard = function({amounts, updateAmounts, ...props})  {
  const [editing, setEditing] = useState(false);
  const [amountToEdit, setAmountToEdit] = useState(initialAmount);

  const editAmount = amount => {
    setEditing(true);
    setAmountToEdit(amount);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/schools/${amountToEdit.id}`, amountToEdit)
      .then(res => {
        updateAmounts(amounts.map(amount => {
          if(amount.id === res.data.id) {
            return res.data;
          } else {
            return amount;
          }
        }));
      })
      .catch(error => console.log(error));
  };

  const deleteAmount = amount => {
    axiosWithAuth()
      .delete(`/schools/${amount.id}`)
      .then(res => {
        updateAmounts(amounts.filter(amount => amount.id !== res.data))
      })
      .catch(error => console.log(error));
  };

  return(
    <div>
      <Wrapper>
        <h3>{props.Name}</h3>
        <Description>
          <p>{props.Location}</p>
          <p>Requested Amount: {props.Funds}</p>
          </Description>
      </Wrapper>

      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Request Amount</legend>
          <label>
            Amount:
            <input onChange={e => setAmountToEdit({ ...amountToEdit, amount: e.target.value })
              } value={amountToEdit.amount} />
          </label>
          <div className="button-row">
            <button onClick={() => editAmount()}>save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
            <button onClick={() => deleteAmount()}>delete</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SchoolCard;