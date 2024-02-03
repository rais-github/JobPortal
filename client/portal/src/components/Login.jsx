import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert("Successful Login")
      console.log('Successfully logged in with Google:', user);
      // You can perform additional actions after successful login, such as redirecting to another page.
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to Your App</h2>
      <button className="loginButton" onClick={handleGoogleLogin} style={styles.button}>
        Login with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Make the container take the full height of the viewport
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: 'brown',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transform: 'perspective(1px) translateZ(0)',
    transition: 'all 0.3s ease',
    border: 'none',
    outline: 'none',
    '&:hover, &:focus': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.05)',
    },
  },
};

export default Login;
