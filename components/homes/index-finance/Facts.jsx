import React from "react";
import Image from "next/image";
import { countersData, countersData2 } from "@/data/facts";
import CounterComponent from "@/components/common/Counter";
export default function Facts() {
  return (
    <div className="rainbow-split-area">
      <div className="wrapper">
        <div className="rainbow-splite-style bg-color-blackest">
          <div className="split-wrapper">
            <div className="row g-0 radius-10 align-items-center">
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="thumbnail">
                  <Image
                    alt="split Images"
                    src="/assets/images/testimonial/testimonial-01.jpg"
                    width={945}
                    height={709}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="split-inner">
                  <h4 className="title">About the Founder</h4>
                  <p className="description">

  Talently is a boutique HR consultancy that helps organizations bring out the best in their people and culture. We specialize in building culture, developing talent, and designing innovative, human-centered HR solutions that drive sustainable growth and long-term success.
  <br /><br />
  We partner with both organizations and individuals who believe in the power of people. Whether you're a company building your culture, or a professional shaping your career, we're here to help you grow.
  <br /><br />
  Our business revolves around: people, culture, growth, engagement, employee experience, and a strong belief that business success starts with human potential. The founder worked closely with businesses to solve real HR challenges, build strong teams, and create healthier work environments. Her approach is hands-on, practical, and rooted in the deep belief that real growth starts with people when they feel seen, heard, and truly supported.


                  </p>
                  <div className="row">
                    {countersData2.map((elm, i) => (
                      <div
                        key={i}
                        className="col-lg-6 col-md-6 col-sm-6 col-12"
                      >
                        <div className="count-box counter-style-4 text-start">
                          <div>
                            <div className="count-number">
                              <span className="counter">
                                {" "}
                                <CounterComponent max={elm.number} />
                              </span>
                            </div>
                          </div>
                          <h5 className="counter-title">{elm.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
