import React from 'react';
import "./Header.css";
import { Navbar } from './Navbar/Navbar';
import {HeaderInfo} from './HeaderInfo/HeaderInfo';


function Header(){
  return (
    <div className="header">
      <div className="imgFondo">
        <Navbar />
        <HeaderInfo />
      </div>
    </div>
  );
}

export {Header};