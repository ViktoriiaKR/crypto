import React from 'react'
import { observer } from 'mobx-react';
//styles
import 'antd/dist/antd.css';
import styles from './styles.module.scss'
import ICON_LOGO from './../../sources/image/logo.svg';
import ICON_AVATAR from './../../sources/image/avatar.svg'

const Header: React.FC = observer(() => {

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
           <h3>Kamil Bachabek</h3>
           <p>ACCOUNT VERFIED</p>
         </div>
         <div className={styles.avatar}>
           <img src={ICON_AVATAR} alt='avatar' />
           <div className={styles.status}></div>
         </div>
      </div>
    </header>
  )
})

export default Header