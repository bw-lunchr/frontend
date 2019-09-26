import React, {useState} from 'react';
import style from 'styled-components';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Button} from 'semantic-ui-react'

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

const SchoolCard = ({amount, updateAmounts, ...props}) => {
  const [editing, setEditing] = useState(false);
  const [amountToEdit, setAmountToEdit] = useState(initialAmount);

  const editAmount = amount => {
    if (!editing) {
      setEditing(true);
      setAmountToEdit({amount});
    }
  };

  const saveEdit = (e) => {
    e.preventDefault();
    console.log(props.id, amountToEdit);
    axiosWithAuth()
      .put(`/schools/${props.id}`, {requested_funds: amountToEdit.amount})
      .then(res => {
        console.log('Put: res', res.data);
        updateAmounts(amount.map(amount => {
          if(amount.id === props.id) {
            return {...amount, requested_funds: amountToEdit.amount};
          } else {
            return amount;
          }
        }));
      })
      .catch(error => console.log(error));
  };

  const deleteAmount = amount => {
    axiosWithAuth()
      .delete(`/schools/${props.id}`)
      .then(res => {
        updateAmounts(amount.filter(amount => amount.id !== props.id))
      })
      .catch(error => console.log(error));
  };

  return(
    <div>
      <Wrapper key={props.amount} onClick={() => editAmount(props.funds)}>
        <h3>{props.Name}</h3>
        <Description>
          <p>{props.Location}</p>
          <p>Requested Amount: {props.funds}</p>
        </Description>

      {editing && (
        <form onSubmit={saveEdit}>
          <label>
            Amount:
            <input onChange={e => setAmountToEdit({ ...amountToEdit, amount: e.target.value })
              } value={amountToEdit.amount} />
          </label>
          <div className="button-row">
            <Button>save</Button>
            <Button onClick={() => setEditing(false)}>cancel</Button>
            <Button onClick={() => deleteAmount(props.funds)}>delete</Button>
          </div>
        </form>
      )}
      </Wrapper>
    </div>
  );
}

export default SchoolCard;