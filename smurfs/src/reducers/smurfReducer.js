const initialState ={
  isFetching:false,
  smurfs:[],
  error:'',
  hasData: false

}

export const smurfReducer = (state = initialState, action) => {
  console.log("state:", state);
  console.log("action:", action);
  switch (action.type){
    case "FETCH_SMURFS_START":
      return {...state, isFetching: true, error: ''};
    case "FETCH_SMURFS_SUCCESS":
      return {...state, smurfs: action.payload, isFetching:false, error:'', hasData: true }
    case "FETCH_SMURFS_FAIL":
      return {...state, error: action.payload}
    case "POST_SMURFS_START":
      return {...state, isFetching: true, error: ''};
    case "POST_SMURFS_SUCCESS":
      return {...state, smurfs: [...state.smurfs, action.payload], isFetching:false, error:'', hasData: true }
    case "POST_SMURFS_FAIL":
      return {...state, error: action.payload}
    default:
      return state;

  }

}
