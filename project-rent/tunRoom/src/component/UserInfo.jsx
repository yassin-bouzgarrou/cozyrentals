import React from 'react';
import { useSelector } from 'react-redux';

export default function UserInfo() {
  const user = useSelector((state) => state.user);

  if (user === null) {
    // User data is not available yet (initial state)
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <p>Name: {user.user.username}</p>
      <p>Email: {user.user.email}</p>
    </div>
  );
}
