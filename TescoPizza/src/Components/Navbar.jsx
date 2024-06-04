import React from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='AllNavbarPage' style={{ width: '100%' }}>
      <div className='NavbarButtonsMain'>
        <Link to="/Home"> <button style={{ fontSize: '35px', color: 'orange' }}><HomeIcon fontSize="inherit" /></button> </Link>
        <Link to="/Checkout"><button><AccountBalanceWalletIcon /></button> </Link>
        <Link to="/Settings"> <button><SettingsIcon /></button> </Link>
        <Link to="/ContactUs"><button><EmailIcon /></button></Link>
        <Link to="/Notification"> <button><ChatBubbleIcon /></button> </Link>
      </div>
    </div>
  )
}

export default Navbar