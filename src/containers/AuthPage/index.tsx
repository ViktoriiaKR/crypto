import React, { useContext } from 'react'
import firebase from 'firebase';
// styles
import styles from './styles.module.scss'
import { Context } from 'index';
import Lottie from 'react-lottie';
import { defaultOptionsGoogle, defaultOptionsFacebook } from 'utils/const';

const AuthPage: React.FC = () => {
    const { auth } = useContext(Context);

    const authGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    };

    const authFacebook = async () => {
      const provider = new firebase.auth.FacebookAuthProvider()
      await auth.signInWithPopup(provider)
    };

    

  return (
    <div className={styles.auth_section}>
      <div className={styles.auth_btn_wrapper}>
        <button onClick={authGoogle} className={styles.btn_auth}>
         <Lottie 
            options={defaultOptionsGoogle}
            height={50}
            width={50}
        />
        <span>Login with google</span>
       </button>
        <button onClick ={authFacebook} className={styles.btn_auth}>
          <Lottie 
              options={defaultOptionsFacebook}
              height={50}
              width={50}
          />
          <span>Login with facebook</span>
        </button>
      </div>
    </div>
  
  )
}

export default AuthPage
