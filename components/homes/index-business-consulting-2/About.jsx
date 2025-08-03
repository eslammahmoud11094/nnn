"use client";
import React from "react";
import Image from "next/image";
import TyperComponent from "@/components/common/TyperComponent";
import Link from "next/link";
import { useRouter } from "next/router";

export default function About({ translations }) {
  const strings = translations.about.typerStrings;
  const { locale } = useRouter();
  const isRTL = locale === "ar";
  return (
    <div
      className="rainbow-about-area rainbow-section-gap"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div
              className="thumbnail"
              data-sal="slide-right"
              data-sal-duration={800}
            >
              <Image
                className="w-100"
                alt="About Images"
                src="/assets/images/about/Who-We-Are.jpg"
                width={543}
                height={642}
              />
            </div>
          </div>
          <div className="col-lg-7 mt_md--40 mt_sm--40">
            <div
              className="content"
              data-sal="slide-left"
              data-sal-duration={800}
            >
              <div className="section-title">
                <h2 className="title">
                  {translations.about.breadcrumbTitle} <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent strings={strings} />
                    </span>
                  </span>
                </h2>
                <p>{translations.about.p1}</p>
                <p>{translations.about.p2}</p>
                <p>{translations.about.p3}</p>
                <p>{translations.about.p4}</p>
                <p>{translations.about.p5}</p>

                <div className="read-more-btn mt--40">
                  <Link className="btn-default" href={"/about"}>
                    <span>{translations.about.moreBtn}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import Image from "next/image";
// import TyperComponent from "@/components/common/TyperComponent";
// import Link from "next/link";
// export default function About() {
//   return (
//     <div className="rainbow-about-area rainbow-section-gap">
//       <div className="container">
//         <div className="row row--30 align-items-center">
//           <div className="col-lg-5">
//             <div
//               className="thumbnail"
//               data-sal="slide-right"
//               data-sal-duration={800}
//             >
//               <Image
//                 className="w-100"
//                 alt="About Images"
//                 src="/assets/images/about/Who-We-Are.jpg"
//                 width={543}
//                 height={642}
//               />
//             </div>
//           </div>
//           <div className="col-lg-7 mt_md--40 mt_sm--40">
//             <div
//               className="content"
//               data-sal="slide-left"
//               data-sal-duration={800}
//             >
//               <div className="section-title">
//                 <h2 className="title">
//                   Who We Are <br />
//                   <span className="header-caption">
//                     <span className="cd-headline clip is-full-width">
//                       <TyperComponent
//                         strings={["HR.", "Consulting.", "Agency."]}
//                       />

//                     </span>
//                   </span>
//                 </h2>
//                 <p>
// Talently is a boutique HR consultancy that helps organizations bring out the best in their people and culture.
// <br />
// We specialize in building culture, developing talent, and designing innovative, human-centered HR solutions that drive sustainable growth and long-term success.
//                 </p>
//                 <p>
// Our founder, Mais Al Kayal, brings over 17 years of global HR expertise—across startups, scale-ups and enterprises—to every partnership. <br />
//  With a mobile, multilingual team and data-driven tools, we deliver cost-effective programs that maximize ROI, reduce turnover, and future-proof your talent pipeline.

//                 </p>
//                 <div className="read-more-btn mt--40">
//                   <Link className="btn-default" href={"/about"}>
//                     <span>More About Us</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
