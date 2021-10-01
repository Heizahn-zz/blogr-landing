import React from "react";
import img from "../../../img/illustration-phones.svg";
import "./SectionTwo.css";

function SectionTwo() {
  return (
    <div className="colorFondo">
      <section className="sectionTwo">
        <div className="img">
          <img className="imgPhone" src={img} alt="" />
        </div>
        <div className="articulo">
          <article>
            <h3 className="title">State of the Art Infrastructure</h3>
            <p className="parrafo">
              With reliability and speed in mind, world wide data centers
              provide the backbone for ultra-fast conectivity. This ensures
              yours site will load instantly, no matter where your readers,
              keeping your site competitive.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export { SectionTwo };
