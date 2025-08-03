"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function About({ translations }) {
  const { locale } = useRouter();
  const isRTL = locale === "ar";
  return (
    <div
      className="about-style-5 rainbow-section-gapBottom"
      id="about-talently"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              {/* Image Section */}
              <div className="col-lg-6">
                <div className="thumbnail">
                  <Image
                    alt="Talently Founder"
                    src="/assets/images/about/about-5.png"
                    width={800}
                    height={600}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-lg-6 mt_md--30 mt_sm--30">
                <div className="content">
                  <div className="inner">
                    <h4 className="mt--20">
                      {translations.founder.about.title}
                    </h4>
                    <p className="mb--0">
                      “{translations.founder.about.quote}”
                    </p>
                    <p>{translations.founder.about.description}</p>

                    <ul
                      className="contact-address mt--20"
                      dir={isRTL ? "rtl" : "ltr"}
                    >
                      <li>
                        <i className="feather-user" />{" "}
                        {translations.founder.about.nameTitle}
                      </li>
                      <li>
                        <i className="feather-map-pin" />{" "}
                        {translations.founder.about.location}
                      </li>
                      <li>
                        <i className="feather-mail" /> info@talentlyme.com
                      </li>
                    </ul>

                    <div className="download-button mt--20">
                      <a className="btn-read-more" href="/services">
                        <span>{translations.founder.about.cta}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";

// export default function About() {
//   return (
//     <div className="about-style-5 rainbow-section-gapBottom" id="about-talently">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-10 offset-lg-1">
//             <div className="row row--0 about-wrapper align-items-center theme-shape">
//               {/* Image Section */}
//               <div className="col-lg-6">
//                 <div className="thumbnail">
//                   <Image
//                     alt="Talently Founder"
//                     src="/assets/images/about/about-5.png"
//                     width={800}
//                     height={600}
//                   />
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="col-lg-6 mt_md--30 mt_sm--30">
//                 <div className="content">
//                   <div className="inner">

//                     <h4 className="mt--20">Founder’s Insight</h4>
//                     <p className="mb--0">
//                       “Culture eats strategy for breakfast.” – Peter Drucker
//                     </p>
//                     <p>
//                       With 17+ years of experience, our founder <strong>Mais Al Kayal</strong> built Talently to empower people-first organizations with practical, purpose-driven HR strategies. Our approach is personal, impactful, and rooted in human experience.
//                     </p>

//                     <ul className="contact-address mt--20">
//                       <li>
//                         <i className="feather-user" /> Mais Al Kayal – Founder & Managing Director
//                       </li>
//                       <li>
//                         <i className="feather-map-pin" /> Abu Dhabi, UAE
//                       </li>
//                       <li>
//                         <i className="feather-mail" /> info@talentlyme.com
//                       </li>
//                     </ul>

//                     <div className="download-button mt--20">
//                       <a className="btn-read-more" href="/services">
//                         <span>Explore Our Services</span>
//                       </a>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//               {/* End Content */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
