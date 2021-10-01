import React from 'react';
import './Main.css';
import { SectionOne } from './sections/SectionOne';
import { SectionThree } from './sections/SectionThree';
import { SectionTwo } from './sections/SectionTwo';


function Main() {
  return(
    <div className="container">
      <h2 className="subTitle">Designe for the future</h2>
      <SectionOne />
      <SectionTwo  />
      <SectionThree />
    </div>
  );
}

export { Main };