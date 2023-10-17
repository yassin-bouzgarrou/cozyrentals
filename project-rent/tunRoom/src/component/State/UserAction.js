import { fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFailure } from './userSlice';

import axios from "axios";


export const fetchUserData = (token) => async (dispatch) => {

    dispatch(fetchUserDataStart());
    try {
      const userResponse = await axios.get("http://localhost:3000/user/info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log(userResponse); 
  
      dispatch(fetchUserDataSuccess(userResponse.data));
      
    } catch (error) {
        console.error("API request failed:", error);

      dispatch(fetchUserDataFailure());
    }
  };
  