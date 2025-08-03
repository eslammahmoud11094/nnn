"use client";
import React from "react";
import Image from "next/image";

export default function Testimonials({ translations }) {
  const testimonials = translations.testimonials.items.map((item, index) => ({
    ...item,
    imgSrc: `/assets/images/testimonial/${index + 1}.jpg`,
    salDelay: index * 100,
  }));

  return (
    <div className="rainbow-testimonial-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center sal-animate"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">
                  {translations.testimonials.subtitle}
                </span>
              </h4>
              <h2 className="title w-600 mb--20">
                {translations.testimonials.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--15 justify-content-center">
          {testimonials.map((elm, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
              data-sal="slide-up"
              data-sal-duration={elm.salDelay}
            >
              <div className="rainbow-box-card card-style-default testimonial-style-one">
                <div className="inner">
                  <div className="thumbnail">
                    <Image
                      alt={elm.alt}
                      src={elm.imgSrc}
                      width={645}
                      height={645}
                    />
                  </div>
                  <div className="content">
                    <p className="description">{elm.description}</p>
                    <h2 className="title">{elm.title}</h2>
                    <h6 className="subtitle theme-gradient">{elm.subtitle}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import Image from "next/image";
// export const testimonials2 = [
//   {
//     imgSrc: "/assets/images/testimonial/1.jpg",
//     alt: "Corporate Template",
//     description:
//       "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„",
//     title: "Janen Sara",
//     subtitle: "Sr Product Designer",
//     salDelay: 0,
//   },
//   {
//     imgSrc: "/assets/images/testimonial/2.jpg",
//     alt: "Corporate React Template",
//     description:
//       "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„",
//     title: "Afsana Nila",
//     subtitle: "App Developer",
//     salDelay: 100,
//   },
//   {
//     imgSrc: "/assets/images/testimonial/3.jpg",
//     alt: "Corporate React Template",
//     description:
//       "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„",
//     title: "Hasina",
//     subtitle: "Accounts Manager",
//     salDelay: 200,
//   },
//   {
//     imgSrc: "/assets/images/testimonial/4.jpg",
//     alt: "Corporate React Template",
//     description:
//       "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„",
//     title: "Lamia Aktar",
//     subtitle: "Accounts Manager",
//     salDelay: 200,
//   },
//   {
//     imgSrc: "/assets/images/testimonial/5.jpg",
//     alt: "Corporate React Template",
//     description:
//       "“Proin libero vel lorem dui lupus est aliquet luctus purus justo eget libero sed lorem.„",
//     title: "Nora Fati",
//     subtitle: "Accounts Manager",
//     salDelay: 200,
//   },

// ];
// export default function Testimonials({translations}) {
//   return (
//     <div className="rainbow-testimonial-area rainbow-section-gap">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div
//               className="section-title text-center sal-animate"
//               data-sal="slide-up"
//               data-sal-duration={700}
//               data-sal-delay={100}
//             >
//               <h4 className="subtitle">
//                 <span className="theme-gradient">Client Feedback</span>
//               </h4>
//               <h2 className="title w-600 mb--20">Our Clients Feedback.</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row row--15     justify-content-center">
//           {testimonials2.map((elm, i) => (
//             <div
//               key={i}
//               className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
//               data-sal="slide-up"
//               data-sal-duration={elm.salDelay}
//             >
//               <div className="rainbow-box-card card-style-default testimonial-style-one">
//                 <div className="inner">
//                   <div className="thumbnail">
//                     <Image
//                       alt="Corporate Template"
//                       src={elm.imgSrc}
//                       width={645}
//                       height={645}
//                     />
//                   </div>
//                   <div className="content">
//                     <p className="description">{elm.description}</p>
//                     <h2 className="title">{elm.title}</h2>
//                     <h6 className="subtitle theme-gradient">{elm.subtitle}</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
