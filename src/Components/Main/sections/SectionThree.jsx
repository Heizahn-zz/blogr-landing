import React from 'react'
import imgOne from '../../../img/illustration-laptop-mobile.svg';
import imgTwo from '../../../img/illustration-laptop-desktop.svg';
import './SectionThree.css';


function SectionThree (){
  return(
    <section className="sectionThree">
      <picture className="img">
        <source srcSet={imgOne} alt="imgMobile" media='(max-width: 1023px)' />
        <img className="imgDesktop" src={imgTwo} alt="imgDestok" />
      </picture>
    <div className="articulos">
      <article>
        <h3 className="title">Free, open, simple</h3>
        <p className="parrafo">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, Rss feeds, social media integration. third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
      </article>
      <article>
        <h3 className="title">Powerful tooling</h3>
        <p className="parrafo">Betteries included. We built a simple and straightforward CLI tool that makes customization and deplyment a breeze, but capable of producing even the most complicate sites.</p>
      </article>
    </div>
  </section>
  );
}

export { SectionThree };