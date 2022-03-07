const initialState = {
    loginuserid: "",
    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "upload":
        return {
          ...state,
          loginuserid: action.payload.loginuserid,
          
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  