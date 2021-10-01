import React from 'react';
import imgOne from '../../../img/illustration-editor-mobile.svg';
import imgTwo from '../../../img/illustration-editor-desktop.svg';
import './SectionOne.css';



function SectionOne (){
  return(
    <section className="sectionOne">
      <picture className='img'>
        <source srcSet={imgOne} alt="imgMobile" media='(max-width: 1023px)' />
        <img className="imgDesktop" src={imgTwo} alt="imgDesktop" />
      </picture>
    <div className="articulos">
      <article>
        <h3 className="title">Introducing an extensible editor</h3>
        <p className="parrafo">Blogr features and exceedingly intuitive interface which lets you focus on one thins: creating content. The editor supports management of multiple blogs and allows ease manupulation of embeds such as images, video, and Markdown. Extensibility with plugins and thmes provide easy ways to add functionality or change the looks of a blog.</p>
      </article>
      <article>
        <h3 className="title">Robust content management</h3>
        <p className="parrafo">Flexible content management enables users to easily move through post. Increase the usability of your blog by adding customizes categories, sections, format, or flow. With this funcionality, you´re in full control.</p>
      </article>
    </div>
  </section>
  );
}

export { SectionOne };