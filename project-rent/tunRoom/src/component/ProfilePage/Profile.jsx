import React from 'react'
import { useSelector } from "react-redux";

function Profile() {

  
  const userData = useSelector((state) => state.auth.userData);
console.log(userData );
  return (
    <div>
<h1>my mail :{userData.email}</h1>
    </div>
  );
}

export default Profile