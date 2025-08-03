import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  cardItems,
} from "@/data/service";
export default function Service() {
  return (
    <div className="main-content" id="service">
 
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* End Seperator Area  */}
      {/* Start Service-3 Area  */}
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">What we can do for you</span>
                </h4>
                <h2 className="title w-600 mb--20">
                Our Values
                </h2>
            
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={item.salDelay}
              >
                <div className="card-box card-style-1 text-left">
                  <div className="inner">
                    <div className="image">
                      <a href="#">
                        <Image
                          alt={item.imgAlt}
                          src={item.imgSrc}
                          width={590}
                          height={332}
                          quality={70}
                          priority={index < 2} // Load first 2 images faster
                          loading={index >= 2 ? "lazy" : "eager"}
                        
                        />
                       </a>
                    </div>
                    <div className="content">
                      <h4 className="title mb--20">
                       {item.title}
                      </h4>
                      <p className="description b1 color-gray mb--0">
                        {item.description}
                      </p>
                
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
    
    </div>
  );
}
