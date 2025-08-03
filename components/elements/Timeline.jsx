import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Timeline({translations}) {
    const process = translations.services.ourProcess;

    const rainbowTimelines = process?.steps?.map((step, index) => ({
        title: step.title,
        description: step.desc,
        delay: 200,
    }));


        const { locale } = useRouter();
  const isRTL = locale === 'ar';

  return (
        <div id={'our_process'} className="main-content" >
      <div className="rainbow-timeline-area rainbow-section-gap">
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
                  <span className="theme-gradient">{process?.subtitle}</span>
                </h4>
                <h2 className="title w-600 mb--20">{process?.title}</h2>
                <p>{process?.desc}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--50">
              <div className="timeline-style-two bg-color-blackest">
                <div className="row row--0">
                  {/* {rainbowTimelines.reverse().map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-md-3 rainbow-timeline-single"
                    >
                      <div className="rainbow-timeline">
                        <h6
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay}
                        >
                          {item.title}
                        </h6>
                        <div className="progress-line">
                          <div className="line-inner" />
                        </div>
                        <div className="progress-dot">
                          <div className="dot-level">
                            <div className="dot-inner" />
                          </div>
                        </div>
                        <p
                          className="description"
                          data-sal="slide-up"
                          data-sal-duration={700}
                          data-sal-delay={item.delay + 100}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))} */}


                  {(isRTL ? [...rainbowTimelines].reverse() : rainbowTimelines).map((item, index) => (
  <div
    key={index}
    className="col-lg-3 col-md-3 rainbow-timeline-single"
  >
    <div className="rainbow-timeline">
      <h6
        className="title"
        data-sal="slide-up"
        data-sal-duration={700}
        data-sal-delay={item.delay}
      >
        {item.title}
      </h6>
      <div className="progress-line">
        <div className="line-inner" />
      </div>
      <div className="progress-dot">
        <div className="dot-level">
          <div className="dot-inner" />
        </div>
      </div>
      <p
        className="description"
        data-sal="slide-up"
        data-sal-duration={700}
        data-sal-delay={item.delay + 100}
      >
        {item.description}
      </p>
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

  );
}
