import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';

const SignUp = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert('Successful Sign Up/Log In with Google');
      console.log('Successfully signed up/logged in with Google:', user);
      // You can perform additional actions after successful sign-up/log in, such as redirecting to another page.
    } catch (error) {
      console.error('Error during Google sign up/log in:', error);
    }
  };

  // This is just an example, you may want to replace it with your actual sign-up logic
  const handleEmailSignUp = async () => {
    try {
      const email = 'user@example.com';
      const password = 'password123';
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      alert('Successful Email Sign Up');
      console.log('Successfully signed up with email:', user);
      // You can perform additional actions after successful sign-up, such as redirecting to another page.
    } catch (error) {
      console.error('Error during email sign up:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up to Your App</h2>
      <button className="googleSignUpButton mb-10" onClick={handleGoogleSignUp} style={styles.button}>
        Sign Up with Google
      </button>
      {/* Example email/password sign-up button */}
      <button className="emailSignUpButton" onClick={handleEmailSignUp} style={styles.button}>
        Sign Up with Email
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

export default SignUp;
