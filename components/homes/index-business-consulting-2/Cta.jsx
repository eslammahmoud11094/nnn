import React from "react";
import CalendlyBadge from "@/components/common/CalendlyBadge";

export default function Cta() {
  return (
    <div className="rainbow-callto-action-area">
      <div className="wrapper">
        <div className="rainbow-callto-action clltoaction-style-default style-5">
          <div className="container">
            <div className="row row--0 align-items-center content-wrapper theme-shape">
              <div className="col-lg-12">
                <div className="inner">
                  <div
                    className="content text-center"
                    data-sal="slide-up"
                    data-sal-duration={700}
                  >
                    <h2 className="title">
                    Let’s grow your business together!                     
                    </h2>
                    <h6 className="subtitle">
                    Schedule a free consultation today and discover how  Nexus can streamline your lead generation and boost your success.
                    
                    </h6>
                             <div className="call-to-btn text-center">
                    <CalendlyBadge  cc={"btn-default btn-icon"}/>
                                        </div>
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
