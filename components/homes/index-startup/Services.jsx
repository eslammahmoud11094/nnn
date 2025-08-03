"use client";
import { useRouter } from "next/router";
import React from "react";

export default function Services({ translations }) {
  const {locale} = useRouter();
  const services10 = [
    {
      id: 1,
      sal: "slide-up",
      salDuration: 400,
      salDelay: 200,
      link: "#",
      title: translations?.services10?.items[0].title,
      description: translations?.services10?.items[0].description,
    },
    {
      id: 2,
      sal: "slide-up",
      salDuration: 400,
      salDelay: 300,
      link: "#",
      title: translations?.services10?.items[1].title,
      description: translations?.services10?.items[1].description,
    },
    {
      id: 3,
      sal: "slide-up",
      salDuration: 400,
      salDelay: 400,
      link: "#",
      title: translations?.services10?.items[2].title,
      description: translations?.services10?.items[2].description,
    },
    {
      id: 4,
      sal: "slide-up",
      salDuration: 400,
      salDelay: 500,
      link: "#",
      title: translations?.services10?.items[3].title,
      description: translations?.services10?.items[3].description,
    },
  ];
  const sectionTitle = translations?.services10?.sectionTitle;

  return (
    <div className="rainbow-service-area rainbow-section-gap" dir={locale === 'ar' ? 'rtl':'ltr'}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={150}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">{sectionTitle.subtitle}</span>
              </h4>
              <h2 className="title w-600 mb--20">{sectionTitle.title}</h2>
            </div>
          </div>
        </div>
        <div className="row row--15 service-wrapper" >
          {services10?.map((service) => (
            <div
              key={service.id}
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              data-sal={service.sal}
              data-sal-duration={service.salDuration}
              data-sal-delay={service.salDelay}
            >
              <div className="service service__style--1 icon-circle-style with-working-process text-center">
                <div className="icon">
                  <div className="line"  dir={locale === 'ar' ? 'rtl':'ltr'}/>
                  {service.id}
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href={service.link}>{service.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import { services10 } from "@/data/service";
// import React from "react";

// export default function Services() {
//   return (
//     <div className="rainbow-service-area rainbow-section-gap">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div
//               className="section-title text-center"
//               data-sal="slide-up"
//               data-sal-duration={400}
//               data-sal-delay={150}
//             >
//               <h4 className="subtitle">
//                 <span className="theme-gradient">What we can do for you</span>
//               </h4>
//               <h2 className="title w-600 mb--20">Services provide for you.</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row row--15 service-wrapper">
//           {services10?.map((service) => (
//             <div
//               key={service.id}
//               className="col-lg-3 col-md-6 col-sm-6 col-12"
//               data-sal={service.sal}
//               data-sal-duration={service.salDuration}
//               data-sal-delay={service.salDelay}
//             >
//               <div className="service service__style--1 icon-circle-style with-working-process text-center">
//                 <div className="icon">
//                   <div className="line" />
//                   {service.id}
//                 </div>
//                 <div className="content">
//                   <h4 className="title">
//                     <a href={service.link}>{service.title}</a>
//                   </h4>
//                   <p className="description b1 color-gray mb--0">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
