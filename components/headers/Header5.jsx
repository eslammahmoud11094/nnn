"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeSwitcher from "../common/ModeSwitcher";
import { openMenu } from "@/utlis/toggleMenu";
import addScrollspy from "@/utlis/addScrollSpy";

const navLinks = [
  {
    title: "Home",
    href:'/',
  },


   {
    title: " About Us",
    hasDropdown: true,
    submenu: [
    { label: "Who We Are", href: "/about#" },
    { label: "Our Mission", href: "/about/#mission" },
    { label: "Our Vision", href: "/about/#vision" },
    ],
  },
    { title: "About The Founder", href: "/founder" },


   {
    title: "Our Services",
    hasDropdown: true,
    submenu: [
  { label: "Individual Services", href: "/services#" },
   { label: "Organizational Services", href: "/services#" },
    ],
  },


  { title: "Get In Touch", href: "/contact" },

];


export default function Header5({ btnClass = "btn-default btn-small round" }) {
  const pathname = usePathname();

  const isActiveParent = (menu) => {
    if (menu.submenu) {
      return menu.submenu.some(
        (el) => el.href.split("/")[1] === pathname.split("/")[1]
      );
    }
    return false;
  };

  useEffect(() => {
    window.addEventListener("scroll", addScrollspy);
    return () => window.removeEventListener("scroll", addScrollspy);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(
      '.scrollSpyLinks a[href^="#"]:not([href="#"])'
    );
    links.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(
          this.getAttribute("href")
        );
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-6 col-6">
            <div className="header-left d-flex">
              <div className="logo">
                <Link href={`/`}>
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
            </div>
          </div>
          <div className="col-lg-8 position-static d-none d-lg-block">
            <nav className="mainmenu-nav onepagenav">
              <ul className="mainmenu justify-content-center scrollSpyLinks">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className={`${item.className || ""} ${
                      pathname === item.href ||
                      isActiveParent(item)
                        ? "current"
                        : ""
                    }`}
                  >
                    {item.href ? (
                      <Link
                        className={
                          pathname.split("/")[1] ===
                          item.href.split("/")[1]
                            ? "active"
                            : ""
                        }
                        href={item.href}
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <a
                        className={
                          isActiveParent(item) ? "active" : ""
                        }
                      >
                        {item.text}
                      </a>
                    )}
                    {item.submenu && (
                      <ul className="submenu">
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              className={
                                pathname.split("/")[1] ===
                                sub.href.split("/")[1]
                                  ? "active"
                                  : ""
                              }
                            >
                              {sub.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-1 col-md-6 col-6">
            <div className="header-right">
          
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button onClick={openMenu} className="hamberger-button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
              <ModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


// "use client";
// const navLinks = [
//   {
//     text: "Home",
//     href:'/',
//   },

//    {
//     text: " About Us",
//     className: "has-droupdown", 
//     submenu: [
//   { text: "Who We Are", href: "/about" },
//   { text: "Mission & Vision", href: "/about" },
//   { text: "Founder’s Message", href: "/about" },
//   { text: "Our Values", href: "/about" },
//   { text: "About The Founder", href: "/about" },

//     ],
//   },
//    {
//     text: "Our Services",
//     className: "has-droupdown", 

//     submenu: [
//   { text: "Our Services", href: "/services" },
//   { text: "Our Process", href: "/services#our_process" },
//     ],
//   },
  


//   { text: "Get In Touch", href: "/contact" },



// ];

// import React, { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import ModeSwitcher from "../common/ModeSwitcher";
// import { openMenu } from "@/utlis/toggleMenu";
// import addScrollspy from "@/utlis/addScrollSpy";
// import { usePathname } from 'next/navigation'

// export default function Header5({ btnClass = "btn-default btn-small round" }) {
//   const pathname = usePathname()
//   console.log(pathname,"router")
//   useEffect(() => {
//     window.addEventListener("scroll", addScrollspy);

//     return () => {
//       window.removeEventListener("scroll", addScrollspy);
//     };
//   }, []);
//   useEffect(() => {
//     const links = document.querySelectorAll('.scrollSpyLinks a[href^="#"]');

//     links.forEach((anchor) => {
//       anchor.addEventListener("click", function (e) {
//         e.preventDefault();

//         const targetSection = document.querySelector(this.getAttribute("href"));
//         if (targetSection) {
//           targetSection.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       });
//     });

//     // Cleanup function to remove event listeners when the component unmounts
//     return () => {
//       links.forEach((anchor) => {
//         anchor.removeEventListener("click", () => {});
//       });
//     };
//   }, []);
//   return (
//     <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
//       <div className="container position-relative">
//         <div className="row align-items-center">
//           <div className="col-lg-2 col-md-6 col-6">
//             <div className="header-left d-flex">
//               <div className="logo">
//                 <Link href={`/`}>
//                   <Image
//                     className="logo-light"
//                     alt="Corporate Logo"
//                     src="/assets/images/logo/logo.png"
//                     width={288}
//                     height={100}
//                   />
//                   <Image
//                     className="logo-dark"
//                     alt="Corporate Logo"
//                     src="/assets/images/logo/logo-dark.png"
//                     width={288}
//                     height={100}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 position-static d-none d-lg-block">
//             <nav className="mainmenu-nav onepagenav">
//    <ul className="mainmenu justify-content-center scrollSpyLinks">
//   {navLinks.map((link, index) => (

    
// <li
//   key={index}
//   className={`${pathname === link.href ? 'current' : ''} ${typeof link.className === 'string' ? link.className : ''}`}
// >      {link.submenu ? (
//         <>
//           <a href="#">{link.text}</a>
//           <ul className="submenu">
//             {link.submenu.map((sub, subIndex) => (
//               <li key={subIndex}>
//                 <a href={sub.href}>{sub.text}</a>
//               </li>
//             ))}
//           </ul>
//         </>
//       ) : (
//         <a  href={link.href}>{link.text}</a>
//       )}
//     </li>
//   ))}
// </ul>


//             </nav>
//           </div>
//           <div className="col-lg-2 col-md-6 col-6">
//             <div className="header-right">
//               <div className="header-btn d-none d-xl-block">
//                 <a
//                   className={btnClass}
//                   target="_blank"
//                   href="https://themeforest.net/user/rainbow-themes/portfolio"
//                 >
//                   BUY NOW
//                 </a>
//               </div>
//               {/* Start Mobile-Menu-Bar */}
//               <div className="mobile-menu-bar ml--5 d-block d-lg-none">
//                 <div className="hamberger">
//                   <button onClick={openMenu} className="hamberger-button">
//                     <i className="feather-menu" />
//                   </button>
//                 </div>
//               </div>
//               {/* Start Mobile-Menu-Bar */}
//               {/* Start Switcher Area  */}
//               <ModeSwitcher />
//               {/* Start Switcher Area  */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";



// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import ModeSwitcher from "../common/ModeSwitcher";
// import { openMenu } from "@/utlis/toggleMenu";
// import addScrollspy from "@/utlis/addScrollSpy";
// import { usePathname } from "next/navigation";

// export default function Header5({ btnClass = "btn-default btn-small round" }) {
//   const [currentHash, setCurrentHash] = useState("");

//   const pathname = usePathname();
// useEffect(() => {
//   const updateHash = () => {
//     setCurrentHash(window.location.hash);
//   };

//   updateHash(); // أول تحميل

//   window.addEventListener("hashchange", updateHash);
//   return () => {
//     window.removeEventListener("hashchange", updateHash);
//   };
// }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", addScrollspy);

//     return () => {
//       window.removeEventListener("scroll", addScrollspy);
//     };
//   }, []);
//   useEffect(() => {
// const links = document.querySelectorAll('.scrollSpyLinks a[href^="#"]:not([href="#"])');

//     links.forEach((anchor) => {
//       anchor.addEventListener("click", function (e) {
//         e.preventDefault();

//         const targetSection = document.querySelector(this.getAttribute("href"));
//         if (targetSection) {
//           targetSection.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       });
//     });

//     // Cleanup function to remove event listeners when the component unmounts
//     return () => {
//       links.forEach((anchor) => {
//         anchor.removeEventListener("click", () => {});
//       });
//     };
//   }, []);
//   return (
//     <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
//       <div className="container position-relative">
//         <div className="row align-items-center">
//           <div className="col-lg-2 col-md-6 col-6">
//             <div className="header-left d-flex">
//               <div className="logo">
//                 <Link href={`/`}>
//                   <Image
//                     className="logo-light"
//                     alt="Corporate Logo"
//                     src="/assets/images/logo/logo-dark.png"
//                     width={288}
//                     height={100}
//                   />
//                   <Image
//                     className="logo-dark"
//                     alt="Corporate Logo"
//                     src="/assets/images/logo/logo-light.png"
//                     width={288}
//                     height={100}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 position-static d-none d-lg-block">
//             <nav className="mainmenu-nav onepagenav">
// <ul className="mainmenu justify-content-center scrollSpyLinks">
//   {navLinks.map((link, index) => {
//     const isActive = pathname === link.href;
//     return (
//       <li key={index} className={`${link.className || ""} ${isActive ? "current" : ""}`}>
//         {link.submenu ? (
//           <>
//             <a href="#">{link.text}</a>
//             <ul className="submenu">
//               {link.submenu.map((sub, subIndex) => {
// const isSubActive = `${pathname}${currentHash}` === sub.href;
//                 return (
//                   <li key={subIndex}>
//                     <a className={isSubActive ? "active" : ""} href={sub.href}>{sub.text}</a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </>
//         ) : (
//           <a className={isActive ? "active" : ""} href={link.href}>{link.text}</a>
//         )}
//       </li>
//     );
//   })}
// </ul>


//             </nav>
//           </div>
//           <div className="col-lg-2 col-md-6 col-6">
//             <div className="header-right">
              
//               {/* Start Mobile-Menu-Bar */}
//               <div className="mobile-menu-bar ml--5 d-block d-lg-none">
//                 <div className="hamberger">
//                   <button onClick={openMenu} className="hamberger-button">
//                     <i className="feather-menu" />
//                   </button>
//                 </div>
//               </div>
//               {/* Start Mobile-Menu-Bar */}
//               {/* Start Switcher Area  */}
//               <ModeSwitcher />
//               {/* Start Switcher Area  */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";
// const navLinks = [
//   { href: "#home", text: "Home", className: "current" },
//   { href: "#service", text: "Service" },
//   { href: "#projects", text: "Projects" },
//   { href: "#clients", text: "Clients" },
//   { href: "#team", text: "Meet The Team" },
//   { href: "#contact", text: "Contact With Us" },
// ];
// import React, { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import ModeSwitcher from "../common/ModeSwitcher";
// import { openMenu } from "@/utlis/toggleMenu";
// import addScrollspy from "@/utlis/addScrollSpy";
// export default function Header5({ btnClass = "btn-default btn-small round" }) {
//   useEffect(() => {
//     window.addEventListener("scroll", addScrollspy);

//     return () => {
//       window.removeEventListener("scroll", addScrollspy);
//     };
//   }, []);
//   useEffect(() => {
//     const links = document.querySelectorAll('.scrollSpyLinks a[href^="#"]');

//     links.forEach((anchor) => {
//       anchor.addEventListener("click", function (e) {
//         e.preventDefault();

//         const targetSection = document.querySelector(this.getAttribute("href"));
//         if (targetSection) {
//           targetSection.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       });
//     });

//     // Cleanup function to remove event listeners when the component unmounts
//     return () => {
//       links.forEach((anchor) => {
//         anchor.removeEventListener("click", () => {});
//       });
//     };
//   }, []);
//   return (
//     <header className="rainbow-header header-default header-transparent header-center-align header-sticky">
//       <div className="container position-relative">
//         <div className="row align-items-center">
//           <div className="col-lg-2 col-md-6 col-6">
//             <div className="header-left d-flex">
//               <div className="logo">
//                 <Link href={`/`}>
//                   <Image
//                     className="logo-light"
//                     alt="Corporate Logo"
//                     src="/assets/images/logo/logo-dark.png"
//                     width={288}
//                     height={100}
//                   />
//                   <Image
//                     className="logo-dark"
//                     alt="Corporate Logo"
//                     src="/assets/images/logo/logo-light.png"
//                     width={288}
//                     height={100}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 position-static d-none d-lg-block">
//             <nav className="mainmenu-nav onepagenav">
//               <ul className="mainmenu justify-content-center scrollSpyLinks">
//                 {navLinks.map((link, index) => (
//                   <li key={index} className={link.className || ""}>
//                     <a href={link.href}>{link.text}</a>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//           <div className="col-lg-1 col-md-6 col-6">
//             <div className="header-right">
             
//               {/* Start Mobile-Menu-Bar */}
//               <div className="mobile-menu-bar ml--5 d-block d-lg-none">
//                 <div className="hamberger">
//                   <button onClick={openMenu} className="hamberger-button">
//                     <i className="feather-menu" />
//                   </button>
//                 </div>
//               </div>
//               {/* Start Mobile-Menu-Bar */}
//               {/* Start Switcher Area  */}
//               <ModeSwitcher />
//               {/* Start Switcher Area  */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
