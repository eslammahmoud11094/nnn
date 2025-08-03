import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Testimonials2({ translations }) {
  const section = translations.testimonialsSection;
  const testimonial = section.testimonials?.[0];
  const { locale } = useRouter();
  const isRTL = locale === 'ar';

  // حماية من undefined
  if (!section || !testimonial) return null;

  return (
    <div id="message" className="rainbow-testimonial-area rainbow-section-gap" dir={isRTL ? 'rtl' : 'ltr'}>
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
                <span className="theme-gradient">{section.sectionTitle}</span>
              </h4>
              <p className="description b1">{section.sectionDescription}</p>
            </div>
          </div>
        </div>

        <div className="row row--15">
          <div className="col" data-sal="slide-up" data-sal-duration={100}>
            <div className="rainbow-box-card card-style-default testimonial-style-one style-two">
              <div className="inner">
                <div className="thumbnail">
                  <Image
                    alt={testimonial.alt}
                    src={
                      testimonial.imgSrc ||
                      "/assets/images/testimonial/testimonial-01.jpg"
                    }
                    width={645}
                    height={645}
                  />
                </div>
                <div className="content">
                  <h2 className="title">{testimonial.title}</h2>
                  <h6 className="subtitle theme-gradient">{testimonial.subtitle}</h6>
                  <p className="description">{testimonial.description}</p>
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
// import { testimonials } from "@/data/testimonials";
// export default function Testimonials2({translations}) {
//    const text = translations.testimonialsSection;
//    const testimonials = translations.testimonialsSection;

// console.log(testimonials,"testimonials")
//   return (
//     <div id="message" className="rainbow-testimonial-area rainbow-section-gap">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div
//               className="section-title text-center"
//               data-sal="slide-up"
//               data-sal-duration={700}
//               data-sal-delay={100}
//             >
//               <h4 className="subtitle">
//                 <span className="theme-gradient">
//                   {text.sectionTitle}
//                 </span>
//               </h4>
//               <p className="description b1">
//                 {text.sectionDescription}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row row--15">
//             <div
//               className="col"
//               data-sal="slide-up"
//               data-sal-duration={100}
//             >
//               <div className="rainbow-box-card card-style-default testimonial-style-one style-two">
//                 <div className="inner">
//                   <div className="thumbnail">
//                     <Image
//                       alt={testimonials.alt}
//                       src={testimonials.imgSrc || "/assets/images/testimonial/testimonial-01.jpg"}
//                       width={645}
//                       height={645}
//                     />
//                   </div>
//                   <div className="content">
//                     <h2 className="title">{testimonials.title}</h2>
//                     <h6 className="subtitle theme-gradient">{testimonials.subtitle}</h6>
//                     <p className="description">{testimonials.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//         </div>
//       </div>
//     </div>

//   );
// }
