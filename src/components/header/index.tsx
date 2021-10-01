import React, { useContext } from 'react'
import { observer } from 'mobx-react';
//styles
import 'antd/dist/antd.css';
import styles from './styles.module.scss'
import ICON_LOGO from './../../sources/image/logo.svg';
import ICON_AVATAR from './../../sources/image/account_avatar_client_man_person_icon.svg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from 'index';

const Header: React.FC = observer(() => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <header>
      <div className={styles.logo}>
        <img src={ICON_LOGO} alt='logo' />
      </div>
      <nav className={styles.nav_menu}>
          <ul>
            <li><a href="#">Exchange</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Balances</a></li>
            <li><a href="#">Wallet</a></li>
          </ul>
      </nav>
      <div className={styles.user_info}>
         <div className={styles.user_initials}>
           <h3>{user?.displayName}</h3>
           <p>{user?.email}</p>
         </div>
         <div className={styles.avatar}>
           <img src={ICON_AVATAR} alt='avatar' />
           {/* <div className={styles.status}></div> */}
           <button onClick={() => auth.signOut()}>Log out</button>
         </div>
      </div>
    </header>
  )
})

export default Header