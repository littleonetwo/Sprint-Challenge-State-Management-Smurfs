import axios from "axios";




export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: "FETCH_SMURFS_START"});
    axios
      .get("http://localhost:3333/smurfs/")
      .then(res => {
        console.log("get response:", res);
        dispatch({ type: "FETCH_SMURFS_SUCCESS", payload: res.data});
      })
      .catch(err => dispatch({type:"FETCH_SMURFS_FAIL", payload: err}));
  }}

export const addSmurfs = (newSmurf) => {
  let newSmurf2 = {
    name: newSmurf,
    age: 200,
    height: "5cm"

  }

  return (dispatch) => {
    dispatch({type: "POST_SMURF_START"});
    axios
      .post("http://localhost:3333/smurfs/", newSmurf2)
      .then(res => {
        console.log("post response:", res);
        dispatch({ type: "POST_SMURFS_SUCCESS", payload: newSmurf2})
      })
      .catch(err => dispatch({type:"POST_SMURFS_FAIL", payload: err}));
  }
}
