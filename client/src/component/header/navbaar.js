import React from 'react'
import "./navbaar.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbaar = () => {
  return (
    <header>

      <nav>
        
        <div className='left'>

          <NavLink className='navlogo'to='/'>
            <img src='./logo.png'></img>
            <div className="shop_name">
              LDSHOP
            </div>
          </NavLink>

         

          <div className='nav_searchbaar'>
            <input type="text" name='' id=''/>
          <div className="search_icon">
            <SearchIcon/>
          </div>
          </div>
        </div>

        <div div className='right'>
        <Avatar className='avtar'/>
          <div className="nav_btn">
            <NavLink to='/login'>Sigin</NavLink>
          </div>  
          <NavLink to='/Cart' className="cart_btn" id='icon'>
            <ShoppingCartOutlinedIcon/>
            Giỏ Hàng
          </NavLink>
        </div>

      </nav>
      
    </header>
  )
}

export default Navbaar
