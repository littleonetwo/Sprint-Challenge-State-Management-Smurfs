import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

const CollectSmurfs = props => {



  return (
    <div>

      <h2>List of Current Smurfs</h2>
      <div>
        {props.smurfs.map(smurfs => (
            <h4 key={smurfs.id}>{smurfs.name}</h4>
        ))}

        <button className="button" onClick={()=>{props.getSmurfs(); console.log('you clicked me')}}>Get Smurfs</button>
      </div>

      {props.error && <p className="error">{props.error}</p>}

    </div>
  );
};



export default connect((state) => {
   return {smurfs: state.smurfs, error:state.error, isFetching: state.isFetching}},
  { getSmurfs })(CollectSmurfs);
