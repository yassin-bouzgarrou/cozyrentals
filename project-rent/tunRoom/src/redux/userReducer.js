// userReducer.js
const initialState = {
    user: "user"
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STORE_USER_DATA':
        return {
          ...state,
          user: action.user,
        };

      default:
        return state; 
    }
  };
  
  export default userReducer;
  