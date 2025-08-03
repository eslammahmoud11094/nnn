import React from "react";
import Link from "next/link";
import CalendlyBadge from "@/components/common/CalendlyBadge";

export default function Hero() {
  return (
    <div
    id="home"
      className="slider-area slider-style-1 variation-default height-850 bg_image bg_image--3"
      data-black-overlay={7}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <span className="subtitle">Talently</span>
              <h1 className="title display-one">
                {/* Unique Business <span>Consulting</span>. */}

 

                Empowering People, <span>Transforming Cultures</span>.
              </h1>
              
              <p className="description">
                {/* We help our clients succeed by creating brand identities,
                digital experiences, and print materials. */}



   Talently is a boutique HR consultancy dedicated to unlocking human potential and crafting human-centered workplace cultures. <br />
    We partner with organizations and individuals to design bespoke strategies that drive sustainable growth, develop talent, and deliver measurable results. <br />


              </p>

              <div className="button-group">
       

                <CalendlyBadge cc={'btn-default btn-medium round btn-icon'} />

                <Link
                  className="btn-default btn-medium btn-border round btn-icon"
                  href={`/contact`}
                >
                  Contact Us <i className="icon feather-arrow-right"> </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
