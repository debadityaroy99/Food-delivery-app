import React from 'react'
import "./header.css"
import logo from './logo.png'
<meta name="viewport" content="width=device-width, initial-scale=1" />
const Header = () => {
  return (


    <div className='header'>
      <div className='header-logo-wrapper'>
        <img src={logo}
         alt='zomato-logo' className='header-logo'>
        </img>
        </div>
        <div className='header-right max-width'>
            <div className='header-location-search-container'>
                <div className='location-wrapper'>
                    <div className='location-icon-name'>
                    <i className="fi fi-sr-marker absolute-center location-icon"></i>
                    <div>Aryabhatta Hostel</div>
                    </div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className='location-search-separator'></div>
                <div className='header-searchbar'>
                <i className="fi fi-rr-search search-icon"></i>
                <input placeholder='Search for dish' className='search-input' />
                </div>
            </div>
            <div className='profile-wrapper'>
                <img src='https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A'
                 alt='profile' className='header-profile-image'></img>
                  <span className='header-username'>Debaditya</span> 
                  <i className="fi fi-rr-angle-small-down absolute-center profile-options icon"></i>
             </div>
        </div>
    </div>

  );
};

export default Header
