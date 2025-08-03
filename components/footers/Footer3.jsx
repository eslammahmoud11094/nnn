"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/footerLinks";
import { useRouter } from "next/router";

export default function Footer3({ translations }) {
  const { locale } = useRouter();
  const isRTL = locale === "ar";
  const footerSections = translations.footer.sections;

  return (
    <>
      <footer
        className="rainbow-footer footer-style-default variation-two"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="rainbow-callto-action clltoaction-style-default style-7">
          <div className="container">
            <div className="row row--0 align-items-center content-wrapper">
              <div className="col-lg-8 col-md-8">
                <div className="inner">
                  <div
                    className={`content ${isRTL ? "text-right" : "text-left"}`}
                  >
                    <div className="logo">
                      <Link href="/">
                        <Image
                          className="logo-light"
                          alt="Corporate Logo"
                          src="/assets/images/logo/logo-dark.png"
                          width={288}
                          height={100}
                        />
                        <Image
                          className="logo-dark"
                          alt="Corporate Logo"
                          src="/assets/images/logo/logo-light.png"
                          width={288}
                          height={100}
                        />
                      </Link>
                    </div>
                    <p
                      dir={isRTL ? "rtl" : "ltr"}
                      className="subtitle"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={150}
                    >
                      {translations.footer.callout}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <div
                  className={`call-to-btn mt_sm--20 ${
                    isRTL
                      ? "text-lg-left text-right"
                      : "text-left text-lg-right"
                  }`}
                >
                  <a className="btn-default" href="/contact">
                    {translations.footer.ctaBtn}{" "}
                    <i
                      className={`feather-arrow-${isRTL ? "left" : "right"}`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Area */}
        {/* <footer className="rainbow-footer footer-style-default variation-two" dir={locale === 'ar' ? 'rtl' : 'ltr'}> 
        <div className="rainbow-callto-action clltoaction-style-default style-7">
          <div className="container">
            <div className="row row--0 align-items-center content-wrapper">
              <div className="col-lg-8 col-md-8">
                <div className="inner">
                  <div className="content text-left">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          className="logo-light"
                          alt="Corporate Logo"
                          src="/assets/images/logo/logo-dark.png"
                          width={288}
                          height={100}
                        />
                        <Image
                          className="logo-dark"
                          alt="Corporate Logo"
                          src="/assets/images/logo/logo-light.png"
                          width={288}
                          height={100}
                        />
                      </Link>
                    </div>
                    <p
                      className="subtitle"
                      data-sal="slide-up"
                      data-sal-duration={400}
                      data-sal-delay={150}
                    >
                      {translations.footer.callout}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4"
                data-sal="slide-up"
                data-sal-duration={400}
                data-sal-delay={150}
              >
                <div className="call-to-btn text-left mt_sm--20 text-lg-right">
                  <a className="btn-default" href="/contact">
                    {translations.footer.ctaBtn}{" "}
                    <i className="feather-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Footer Sections */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {footerSections.map((section, index) => (
                <div className="col-lg-2 col-md-6 col-sm-6 col-12" key={index}>
                  <div className="rainbow-footer-widget">
                    <h4 className="title">{section.title}</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        {section.links.map((link, i) => (
                          <li key={i}>
                            <Link href={link.href}>{link.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Contact Info */}
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <h4 className="title">{translations.footer.contactTitle}</h4>
                  <div className="inner">
                    <p dir={isRTL ? "rtl" : "ltr"} className="subtitle">
                      {translations.footer.contactText} <br />
                      <strong>📧</strong>{" "}
                      <a href="mailto:info@talentlyme.com">
                        info@talentlyme.com
                      </a>
                      <br />
                      <strong>🌍</strong>{" "}
                      <a
                        href="https://www.talentlyme.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.talentlyme.com
                      </a>
                      <br />
                      <strong>📍</strong> Abu Dhabi, UAE. Corniche Road. Al
                      Sawari Tower B
                    </p>
                    <ul
                      className={`social-icon social-default ${
                        isRTL ? "justify-content-end" : "justify-content-start"
                      } mt--10`}
                    >
                      {socialLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.href}>
                            <i className={link.iconClass} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Start Copy Right Area */}
      <div className="copyright-area copyright-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="copyright-left">
                <ul className="ft-menu link-hover">
                  {translations.footer.bottomLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-12">
              <div className="copyright-right text-center text-lg-end">
                <p className="copyright-text">
                  Talently©{new Date().getFullYear()}{" "}
                  {translations.footer.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {  socialLinks } from "@/data/footerLinks";
// export default function Footer3() {

//    const footerSections = [
//   {
//     title: "About",
//     links: [
//       { href: "/about", label: "Who We Are" },
//       { href: "/about#mission", label: "Mission" },
//       { href: "/about#vision", label: "Vision" },
//       { href: "/founder#message", label: "Founder’s Message" },
//     ],
//   },
//   {
//     title: "Services",
//     links: [
//       { href: "/services#services", label: "Our Services" },
//       { href: "/services#our_process", label: "Our Process" },
//       { href: "/about#values", label: "Our Values" },
//     ],
//   },
//   {
//     title: "Resources",
//     links: [
//       { href: "/contact", label: "Contact Us" },
//       { href: "#", label: "Post a Job" },
//       { href: "#", label: "Upload CV" },
//       { href: "#", label: "Privacy Policy" },
//     ],
//   },
// ];

//   return (
//     <>
//       {/* Start Footer Area  */}
//       <footer className="rainbow-footer footer-style-default variation-two">
//         <div className="rainbow-callto-action clltoaction-style-default style-7">
//           <div className="container">
//             <div className="row row--0 align-items-center content-wrapper">
//               <div className="col-lg-8 col-md-8">
//                 <div className="inner">
//                   <div className="content text-left">
//                     <div className="logo">
//                       <Link href={`/`}>
//                         <Image
//                           className="logo-light"
//                           alt="Corporate Logo"
//                           src="/assets/images/logo/logo-dark.png"
//                           width={288}
//                           height={100}
//                         />
//                         <Image
//                           className="logo-dark"
//                           alt="Corporate Logo"
//                           src="/assets/images/logo/logo-light.png"
//                           width={288}
//                           height={100}
//                         />
//                       </Link>
//                     </div>
//                     <p
//                       className="subtitle"
//                       data-sal="slide-up"
//                       data-sal-duration={400}
//                       data-sal-delay={150}
//                     >
// Looking to build a people-first organization?  <br />
// Let Talently help you create a thriving culture and unlock your team’s full potential.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="col-lg-4 col-md-4"
//                 data-sal="slide-up"
//                 data-sal-duration={400}
//                 data-sal-delay={150}
//               >
//                 <div className="call-to-btn text-left mt_sm--20 text-lg-right">
//                   <a
//                     className="btn-default"
//                     href="/"
//                   >
//                     Get In Touch <i className="feather-arrow-right" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer-top">
//           <div className="container">
//             <div className="row">
//               {footerSections.map((section, index) => (
//                 <div className="col-lg-2 col-md-6 col-sm-6 col-12" key={index}>
//                   <div className="rainbow-footer-widget">
//                     <h4 className="title">{section.title}</h4>
//                     <div className="inner">
//                       <ul className="footer-link link-hover">
//                         {section.links.map((link, i) => (
//                           <li key={i}>
//                             <Link href={link.href}>{link.label}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//              {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
//                 <div className="rainbow-footer-widget">
//                   <h4 className="title">Stay With Us.</h4>
//                   <div className="inner">
//                     <h6 className="subtitle">
//                       2000+ Our clients are subscribe Around the World
//                     </h6>
//                     <ul className="social-icon social-default justify-content-start">
//                       {socialLinks.map((link, index) => (
//                         <li key={index}>
//                           <a href={link.href}>
//                             <i className={link.iconClass} />
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>  */}

// <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//   <div className="rainbow-footer-widget">
//     <h4 className="title">Let’s Connect</h4>
//     <div className="inner">
//       <p className="subtitle">
//         Ready to build a workplace your people will love?<br />
//         <strong>📧</strong> <a href="mailto:info@talentlyme.com">info@talentlyme.com</a><br />
//         <strong>🌍</strong> <a href="https://www.talentlyme.com" target="_blank">www.talentlyme.com</a><br />
//         <strong>📍</strong> Abu Dhabi, UAE
//       </p>
//       <ul className="social-icon social-default justify-content-start mt--10">
//         {socialLinks.map((link, index) => (
//           <li key={index}>
//             <a href={link.href}>
//               <i className={link.iconClass} />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>

// {/*
//               <div className="col-lg-4 col-md-6 col-sm-6 col-12">
//   <div className="rainbow-footer-widget">
//     <h4 className="title">
//                             <Link href={'/contact'}>Let’s Connect</Link>

//       </h4>
//     <div className="inner">
//       <p className="subtitle">
//         Ready to build a workplace your people will love?<br />
//         <strong>📧</strong> info@talentlyme.com<br />
//         <strong>🌍</strong> www.talentlyme.com<br />
//         <strong>📍</strong> Abu Dhabi, UAE
//       </p>
//       <ul className="social-icon social-default justify-content-start mt--10">
//         {socialLinks.map((link, index) => (
//           <li key={index}>
//             <a href={link.href}>
//               <i className={link.iconClass} />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>  */}

//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* End Footer Area  */}
//       {/* Start Copy Right Area  */}
//       <div className="copyright-area copyright-style-one">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6 col-md-8 col-sm-12 col-12">
//               <div className="copyright-left">
//                 <ul className="ft-menu link-hover">
//                   <li>
//                     <Link href={`/privacy-policy`}>Post a Job</Link>
//                   </li>
//                   <li>
//                     <a href="#">Upload CV</a>
//                   </li>
//                   <li>
//                     <Link href={`/contact`}>Contact Us</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-4 col-sm-12 col-12">
//               <div className="copyright-right text-center text-lg-end">
//                 <p className="copyright-text">
//                   Talently©{new Date().getFullYear()} All Rights Has Reseved
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
