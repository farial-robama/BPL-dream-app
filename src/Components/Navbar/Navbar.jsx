import React from 'react';
import navImg from "../../assets/images/logo.png";
import dollarImg from "../../assets/images/dollar-1.png";

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto mb-3">
                <div className="flex-1">
                  <a className="text-xl">
                    <img className="w-[60px] h-[60px]" src={navImg} alt="" />
                  </a>
                </div>
                <div className="flex items-center font-semibold">
                  <span className="mr-1">${availableBalance}</span>
                  <span className="mr-1">Coin</span>
                  <img src={dollarImg} alt="" />
                </div>
              </div>
    );
};

export default Navbar;