import React, { useContext } from 'react'
import firebase from 'firebase';
import animSignIn from 'sources/animation/38870-google-logo-effect.json'
// styles
import styles from './styles.module.scss'
import { Context } from 'index';
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animSignIn,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const AuthPage: React.FC = () => {
    const { auth } = useContext(Context);

    const authorization = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    };

  return (
    <div className={styles.auth_section}>
        <button onClick={authorization} className={styles.btn_auth}>
         <Lottie 
            options={defaultOptions}
            height={200}
            width={200}
        />
        <span>Login with google</span>
       </button>
    </div>
  
  )
}

export default AuthPage
