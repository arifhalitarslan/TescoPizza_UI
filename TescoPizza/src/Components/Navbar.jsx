import React from 'react'
import './Navbar.css'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


function Navbar() {
  return (
    <div className='AllNavbarPage' style={{width:'100%'}}>
     <div className='NavbarButtonsMain'>
     <button style={{ fontSize: '35px', color: 'orange',marginTop:'200px'}}><HomeIcon fontSize="inherit" /></button>
           <button><PersonIcon/></button>
           <button><AccountBalanceWalletIcon/></button>
           <button><SettingsIcon/></button>
           <button><EmailIcon/></button>
           <button><ChatBubbleIcon/></button>
     </div>
    </div>
  )
}

export default Navbar