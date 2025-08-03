import ProgressLine from "@/components/common/ProgressLine";
import { useRouter } from "next/router";
import React from "react";




export default function Skills({ translations }) {
    const progressData = [
    {
      title: translations.founder.skills.skillsList.culture,
      value: 95,
      colorClass: "bar-color-1",
    },
    {
      title: translations.founder.skills.skillsList.talent,
      value: 90,
      colorClass: "bar-color-2",
    },
    {
      title: translations.founder.skills.skillsList.strategic,
      value: 88,
      colorClass: "bar-color-3",
    },
    {
      title: translations.founder.skills.skillsList.coaching,
      value: 85,
      colorClass: "bar-color-4",
    },
    {
      title: translations.founder.skills.skillsList.experience,
      value: 92,
      colorClass: "bar-color-2",
    },
  ];


        const { locale } = useRouter();
    const isRTL = locale === 'ar';

  
  return (
    <div className="rainbow-about-area rainbow-section-gap" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="section-title text-left"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">
                  {translations.founder.skills.subtitle}
                </span>
              </h4>
              <h2 className="title w-600 mb--20">
                {translations.founder.skills.title}
              </h2>
              <p className="description b1">
                {translations.founder.skills.description1} <br />
                {translations.founder.skills.description2}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-progress-style-1 mt--10">
              {progressData.map((elm, i) => (
                <div key={i} className="single-progress">
                  <h6 className="title">{elm.title}</h6>
                  <div className="progress">
                    <span className="progress-number" dir={isRTL ? 'rtl' : 'ltr'}>{elm.value}%</span>
                    <ProgressLine
                    translations={translations}
                      progress={elm.value}
                      className={`progress-bar wow fadeInLeft ${elm.colorClass}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import ProgressLine from "@/components/common/ProgressLine";
// import { progressData } from "@/data/progress";
// import React from "react";

// export default function Skills() {
//   return (
//     <div className="rainbow-about-area rainbow-section-gap">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div
//               className="section-title text-left"
//               data-sal="slide-up"
//               data-sal-duration={700}
//               data-sal-delay={100}
//             >
//               <h4 className="subtitle">
//                 <span className="theme-gradient">See my All Skill.</span>
//               </h4>
//               <h2 className="title w-600 mb--20">My Working Skill</h2>
//               <p className="description b1">
//                 We provide company and finance service for <br />
//                 startups and company business.
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="rbt-progress-style-1 mt--10">
//               {progressData.map((elm, i) => (
//                 <div key={i} className="single-progress">
//                   <h6 className="title">{elm.title}</h6>
//                   <div className="progress">
//                     <span className="progress-number">{elm.value}%</span>
//                     <ProgressLine
//                       progress={elm.value}
//                       className={`progress-bar wow fadeInLeft ${elm.colorClass}`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
