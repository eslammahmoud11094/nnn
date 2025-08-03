import Link from "next/link";
import React from "react";

export default function Cta({ translations }) {
  return (
    <div className="rainbow-callto-action-area mt--200">
      <div className="wrapper">
        <div
          className="rainbow-callto-action clltoaction-style-default bg-image bg-image2 bg_image_fixed"
          data-black-overlay={7}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="inner">
                  <div className="content text-center">
                    <h2
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={200}
                    >
                      {translations.cta.title}
                    </h2>
                    <h6
                      className="subtitle"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={300}
                    >
                      {translations.cta.subtitle}
                    </h6>
                    <div
                      className="call-to-btn"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={350}
                    >
                      <Link className="btn-default" href="/login">
                        {translations.cta.button}
                      </Link>
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

// import Link from "next/link";
// import React from "react";

// export default function Cta({translations}) {
//   return (
//     <div className="rainbow-callto-action-area mt--200">
//       <div className="wrapper">
//         <div
//           className="rainbow-callto-action clltoaction-style-default bg-image bg-image2 bg_image_fixed"
//           data-black-overlay={7}
//         >
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8 offset-lg-2">
//                 <div className="inner">
//                   <div className="content text-center">
//                     <h2
//                       className="title"
//                       data-sal="slide-up"
//                       data-sal-duration={400}
//                       data-sal-delay={200}
//                     >
// Start your journey with Talently  
//                     </h2>
//                     <h6
//                       className="subtitle"
//                       data-sal="slide-up"
//                       data-sal-duration={400}
//                       data-sal-delay={300}
//                     >
// From expert coaching to standout CVs — your growth starts here.  
//                     </h6>
//                     <div
//                       className="call-to-btn"
//                       data-sal="slide-up"
//                       data-sal-duration={400}
//                       data-sal-delay={350}
//                     >
//                       <Link className="btn-default" href="/login">
//                         Book a Session

//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
