import React from 'react';
import "./Header.css";
import Logo from "../img/HI_Logo.jpg"
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from "@mui/icons-material/Home"
import FlagIcon from "@mui/icons-material/Flag"
import SubscriptionOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined"
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined"
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle"
import { Avatar, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add"
import ForumIcon from "@mui/icons-material/Forum"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={Logo} alt='logo' />
        <div className='header__input' >
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option'>
          <HomeIcon fontSize="large" />
        </div>
        <div className='header__option'>
          <FlagIcon fontSize="large" />
        </div>
        <div className='header__option'>
          <SubscriptionOutlinedIcon fontSize="large" />
        </div>
        <div className='header__option'>
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar />
          <h4>vivek</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header;
