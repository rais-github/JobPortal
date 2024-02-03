import React from "react";
import { getAuth, signOut } from "firebase/auth";
// import app from "../firebase/firebase.config"

const Logout = () => {
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      // You may want to redirect the user to the login page or perform other actions
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button onClick={handleLogout}>
      <span>Logout</span>
    </button>
  );
};

export default Logout;
