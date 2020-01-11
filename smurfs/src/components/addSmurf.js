import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurfs } from '../actions';

const AddSmurfs = props => {

  const [newSmurf, setNewSmurf] = useState();

  const handleChanges = e =>{
    setNewSmurf(e.target.value);
  }

  return (
    <div>

      <h2>Add a Smurf</h2>
      <div>
        <input
          className="smurf-input"
          type="text"
          name="newSmurf"
          value={newSmurf}
          onChange={handleChanges}
        />
        {' '}
        <button className="button" onClick={()=>{props.addSmurfs(newSmurf); console.log('you clicked me')}}>Add Smurf</button>
      </div>

      {props.error && <p className="error">{props.error}</p>}

    </div>
  );
};



export default connect((state) => {
   return {error: state.error}},
  { addSmurfs })(AddSmurfs);
