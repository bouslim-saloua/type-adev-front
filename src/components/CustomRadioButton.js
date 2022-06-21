import React from 'react'
import { useState } from 'react';
function CustomRadioButton() {
    const [radioValue, setRadioValue] = useState(0);
    const [radioV, setRadioV] = useState(0);
    const onChange = (ev) => {
      //save your value here with state variable
      console.log(ev.target.value);
      setRadioValue(ev.target.value);
    };

    const onChangeV = (ev) => {
        //save your value here with state variable
        console.log(ev.target.value);
        setRadioV(ev.target.value);
      };
      
  
    const onClick = (ev) => {
      //TO-DO SEND/click value
      console.log("radio value ", radioValue);
    };
    return (
      <>
        <form>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            value={1}
            name="priority"
            onChange={onChangeV}
          />
          <label className="form-check-label">High Priority</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value={2}
            className="form-check-input"
            name="priority"
            onChange={onChangeV}
          />
          <label className="form-check-label">Medium Priority</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value={3}
            className="form-check-input"
            name="priority"
            onChange={onChangeV}
          />
          <label className="form-check-label">Low Priority</label>
        </div>
        <p>{radioV}</p>
       
        </form>

        <form>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            value={1}
            name="priori"
            onChange={onChange}
          />
          <label className="form-check-label">High Priority</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value={2}
            className="form-check-input"
            name="priori"
            onChange={onChange}
          />
          <label className="form-check-label">Medium Priority</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value={3}
            className="form-check-input"
            name="priori"
            onChange={onChange}
          />
          <label className="form-check-label">Low Priority</label>
        </div>
        <p>{radioValue}</p>
       
        </form>
      </>
    );
  
}
export default CustomRadioButton