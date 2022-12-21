import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Watch from '../assets/google-watch.png'
import './Store.css'
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Avatar } from "@material-ui/core";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import MenuIcon from '@material-ui/icons/Menu';



function Store() {
  return (
    <div className="store">
        <div className="storePage__header">
            <div className="storePage__headerBanner">
                <p className="BannerTitle">
                    Free shipping. Simple returns. Holiday shopping has been easier. <a href="" className='no-cursor'>Shop Now.</a>
                </p>
            </div>
            <div className="storePage__headerOptions">
                <div className="storePage__headerOptionsLeft">
                <div className="storePage__option modal__menu">
                <MenuIcon className='no-cursor'></MenuIcon>
            </div>
                <Link to="/"><img className="storePage__headerLogo"src={Logo} alt="" /></Link>
                <div className="storePage__headerOption">
                    <Link className="no-cursor" to="/">Phones</Link>
                </div>
                <div className="storePage__headerOption">
                    <Link className="no-cursor" to="/">Earbuds</Link>
                </div>
                <div className="storePage__headerOption">
                    <Link className="no-cursor" to="/">Watches</Link>
                </div>
                <div className="storePage__headerOption">
                    <Link className="no-cursor" to="/">Smart Home</Link>
                </div>
                <div className="storePage__headerOption">
                    <Link className="no-cursor" to="/">Laptops</Link>
                </div>
                <div className="storePage__headerOption">
                    <Link className="no-cursor" to="/">Accessories</Link>
                </div>
                <div className="storePage__headerOption">
                    <Link className="no-cursor" to="/">Subscriptions</Link>
                </div>
                <div className="storePage__headerOption">
                    <Link className="no-cursor" to="/">Offers</Link>
                </div>
                </div>
                <div className="storePage__headerOptionsRight">
                <div className="storePage__headerOptionRight">
                    <SearchIcon></SearchIcon>
                </div>
                <div className="storePage__headerOption">
                    <HelpIcon></HelpIcon>
                </div>
                <div className="storePage__headerOptionRight">
                    <ShoppingCartIcon></ShoppingCartIcon>
                </div>
                <div className="storePage__headerOptionRight">
                    <Avatar></Avatar>
                </div>
                    
                </div>
            </div>
        </div>
        <div className="storePage__body">
            <div className="storePage__bodyHero">
                <div className="storePage__bodyHeroLeft">
                    <div className="bodyHeroLeftTitle">
                        Inhale. <br/>
                        Gift. Exhale.
                    </div>
                    <div className="bodyHeroLeftSubTitle">
                        The gifts you need, stress-free. Shop the best of Google with <br/>ease.
                    </div>
                    <div className="bodyHeroButtons">
                        <button className='bodyHeroButton outline'>Browse Deals</button>
                        <button className='bodyHeroButton'>Browse the gift Guide<KeyboardArrowRightIcon></KeyboardArrowRightIcon></button>
                    </div>
                </div>
                <div className="storePage__bodyHeroRight">
                    <img className="bodyHeroRightImage"src={Watch} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Store