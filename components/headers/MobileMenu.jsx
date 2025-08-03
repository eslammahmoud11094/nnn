"use client";
import { closeMenu } from "@/utlis/toggleMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import ModeSwitcher from "../common/ModeSwitcher";
import { useLang } from "@/context/LangContext";

export default function MobileMenu() {
  const pathname = usePathname();
  const popupRef = useRef(null);
  const innerRef = useRef(null);
  const menuRefs = useRef([]);
  const router = useRouter();
  const { translations ,lang} = useLang();
  const handleOutsideClick = (e) => {
    if (
      popupRef.current &&
      popupRef.current.contains(e.target) &&
      innerRef.current &&
      !innerRef.current.contains(e.target)
    ) {
      const el = document.querySelector(".popup-mobile-menu");
      if (el) closeMenu();
    }
  };
    useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        popupRef.current &&
        popupRef.current.contains(e.target) &&
        innerRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        const el = document.querySelector(".popup-mobile-menu");
        if (el) closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
    useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  

  // 🛡️ حماية من الكراش أثناء التحميل
  if (!translations?.menu) return null;

  const menuItems = [
    {
      title: translations.menu.home,
      href: "/",
    },
    {
      title: translations.menu.about,
      hasDropdown: true,
      submenu: [
        { label: translations.menu.whoWeAre, href: "/about#" },
        { label: translations.menu.ourValues, href: "/about/#mission" },
        { label: translations.menu.missionVision, href: "/about/#vision" },
      ],
    },
    {
      title: translations.menu.aboutFounder,
      href: "/founder",
    },
    {
      title: translations.menu.services,
      hasDropdown: true,
      submenu: [
        { label: translations.menu.individualServices, href: "/services#" },
        { label: translations.menu.organizationalServices, href: "/services#" },
      ],
    },
    {
      title: translations.menu.contact,
      href: "/contact",
    },
  ];

  const handleMenuClick = (index) => {
    menuRefs.current.forEach((menu, idx) => {
      if (menu) {
        const nextElement = menu.nextElementSibling;
        if (idx === index) {
          menu.classList.toggle("open");
          if (nextElement) {
            nextElement.style.height = menu.classList.contains("open")
              ? `${nextElement.scrollHeight}px`
              : "0px";
          }
        } else {
          menu.classList.remove("open");
          if (nextElement) nextElement.style.height = "0px";
        }
      }
    });
  };





  const isActiveParent = (menu) => {
    if (menu.submenu?.some((el) => el.href.split("/")[1] === pathname.split("/")[1])) {
      return true;
    }
    if (menu.megamenuColumns) {
      return menu.megamenuColumns.some((col) =>
        col.some((el) => el.href.split("/")[1] === pathname.split("/")[1])
      );
    }
    return false;
  };

  const handleScroll = (href) => {
    const el = document.querySelector(".popup-mobile-menu");
    if (el) closeMenu();

    const isExternal = href.startsWith("http");
    const isAnchor = href.startsWith("#") || href.startsWith("/#");

    if (isExternal) {
      window.location.href = href;
    } else if (isAnchor && router.pathname === "/") {
      const targetId = href.replace(/^\/?#/, "");
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };
  console.log(translations ,"translations MOBB")

  return (
    <div ref={popupRef} className="popup-mobile-menu">
      <div ref={innerRef} className="inner">
        <div className="header-top">
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

          <div className="close-menu d-flex">
            <button
              onClick={() => {
                const el = document.querySelector(".popup-mobile-menu");
                if (el) closeMenu();
              }}
              className="close-button"
            >
              <i className="feather-x" />
            </button>
            <ModeSwitcher />
          </div>
        </div>

        {console.log(lang === 'ar' ? 'rtl':'ltr')}
        {console.log(lang ,"locale")}

        <ul className="mainmenu" dir={lang === 'ar' ? 'rtl':'ltr'}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${
                item.hasMegamenu ? "with-megamenu has-menu-child-item" : ""
              } ${item.hasDropdown ? "has-droupdown has-menu-child-item" : ""} ${
                item.megamenuClass === "with-mega-item-2" ? "position-relative" : ""
              }`}
            >
              {item.href ? (
                <Link
                  className={
                    item.title === "hiring"
                      ? ""
                      : pathname.split("/")[1] === item.href.split("/")[1]
                      ? "active"
                      : ""
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.href.replace("#", ""), item.href);
                  }}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  ref={(el) => (menuRefs.current[index] = el)}
                  onClick={() => handleMenuClick(index)}
                >
                  <span className={isActiveParent(item) ? "activeParent" : ""}>
                    {item.title}
                  </span>
                </a>
              )}

              {item.hasDropdown && (
                <ul className="submenu">
                  {item.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        className={
                          pathname.split("/")[1] === submenuItem.href.split("/")[1]
                            ? "active"
                            : ""
                        }
                        href={submenuItem.href}
                      >
                        {submenuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {item.hasMegamenu && (
                <div className={`rainbow-megamenu ${item.megamenuClass}`}>
                  <div className="wrapper">
                    <div className="row row--0">
                      {item.megamenuColumns.map((column, colIndex) => (
                        <div key={colIndex} className={item.colclass}>
                          <ul className="mega-menu-item">
                            {column.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link
                                  className={
                                    pathname.split("/")[1] === link.href.split("/")[1]
                                      ? "active"
                                      : ""
                                  }
                                  href={link.href}
                                >
                                  {link.label}
                                  {link.badge && (
                                    <span className="rainbow-badge-card">
                                      {link.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// "use client";
// import { closeMenu } from "@/utlis/toggleMenu";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import React, { useEffect, useRef } from "react";
// import ModeSwitcher from "../common/ModeSwitcher";
// import { useLang } from "@/context/LangContext";

// export default function MobileMenu() {
//   const pathname = usePathname();
//   const popupRef = useRef(null); 
//   const innerRef = useRef(null); 
//   const router = useRouter();
//   const { translations } = useLang();

// if (!translations?.menu) return null;

//  const menuItems = [
//     {
//       title: translations?.menu?.home,
//       href: "/",
//     },
//     {
//       title: translations?.menu?.about,
//       hasDropdown: true,
//       submenu: [
//         { label: translations?.menu?.whoWeAre, href: "/about#" },
//         { label: translations?.menu?.ourValues, href: "/about/#mission" },
//         { label: translations?.menu?.missionVision, href: "/about/#vision" },
//       ],
//     },
//     {
//       title: translations?.menu.aboutFounder,
//       href: "/founder",
//     },
//     {
//       title: translations?.menu.services,
//       hasDropdown: true,
//       submenu: [
//         { label: translations?.menu.individualServices, href: "/services#" },
//         { label: translations?.menu.organizationalServices, href: "/services#" },
//       ],
//     },
//     {
//       title: translations?.menu.contact,
//       href: "/contact",
//     },
//   ];
//   const menuRefs = useRef([]); 
//   const handleMenuClick = (index) => {
//     menuRefs.current.forEach((menu, idx) => {
//       if (menu) {
//         if (idx === index) {
//           if (menu.classList.contains("open")) {
//             menu.classList.remove("open");

//             const nextElement = menu.nextElementSibling;
//             if (nextElement) {
//               nextElement.style.height = "0px";
//             }
//           } else {
//             menu.classList.add("open");

//             const nextElement = menu.nextElementSibling;
//             if (nextElement) {
//               nextElement.style.height = nextElement.scrollHeight + "px";
//             }
//           }
//         } else {
//           menu.classList.remove("open");
//           const nextElement = menu.nextElementSibling;
//           if (nextElement) {
//             nextElement.style.height = "0px";
//           }
//         }
//       }
//     });
//   };

//   // Handler for clicking outside of .inner
//   const handleOutsideClick = (e) => {
//     if (
//       popupRef.current &&
//       popupRef.current.contains(e.target) &&
//       innerRef.current &&
//       !innerRef.current.contains(e.target)
//     ) {
//       closeMenu();
//       // Add your logic to handle outside click here
//     }
//   };

//   useEffect(() => {
//     // Attach the event listener for outside clicks
//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       // Cleanup the event listener when the component unmounts
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, []);

//   const isActiveParent = (menu) => {
//     var isActive = false;
//     if (menu.megamenuColumns) {
//       menu.megamenuColumns.forEach((elm) => {
//         if (elm.some((el) => el.href.split("/")[1] == pathname.split("/")[1])) {
//           isActive = true;
//         }
//       });
//     }
//     if (menu.submenu) {
//       if (
//         menu.submenu.some(
//           (el) => el.href.split("/")[1] == pathname.split("/")[1]
//         )
//       ) {
//         isActive = true;
//       }
//     }
//     return isActive;
//   };



// const handleScroll = (href) => {
//   closeMenu();

//   const isExternal = href.startsWith("http");
//   const isAnchor = href.startsWith("#") || href.startsWith("/#");

//   if (isExternal) {
//     window.location.href = href;
//   } else if (isAnchor && router.pathname === "/") {
//     const targetId = href.replace(/^\/?#/, "");
//     document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
//   } else {
//     router.push(href); // بيروح على /founder زي ما هو
//   }
// };

  
//   return (
//     <div ref={popupRef} className="popup-mobile-menu">
//       <div ref={innerRef} className="inner">
//         <div className="header-top">
//           <div className="logo">
//             <Link href={`/`}>
//               <Image
//                 className="logo-light"
//                 alt="Corporate Logo"
//                 src="/assets/images/logo/logo-dark.png"
//                 width={288}
//                 height={100}
//               />
//               <Image
//                 className="logo-dark"
//                 alt="Corporate Logo"
//                 src="/assets/images/logo/logo-light.png"
//                 width={288}
//                 height={100}
//               />
//             </Link>
//           </div>

//           <div className="close-menu d-flex">
//             <button onClick={closeMenu} className="close-button">
//               <i className="feather-x" />
//             </button>

//         <ModeSwitcher />

//           </div>
//         </div>
//         <ul className="mainmenu">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className={`${
//                 item.hasMegamenu ? "with-megamenu has-menu-child-item " : ""
//               } ${
//                 item.hasDropdown ? "has-droupdown has-menu-child-item" : ""
//               } ${
//                 item.megamenuClass == "with-mega-item-2"
//                   ? "position-relative"
//                   : ""
//               }`}


              
//             >
//               {item.href ? (
//                 // <Link
//                 //   // className={
//                 //   //   pathname.split("/")[1] == item.href.split("/")[1]
//                 //   //     ? "active"
//                 //   //     : ""
//                 //   // }
//                 //   className={item.title === "hiring" ? "" : pathname.split("/")[1] === item.href.split("/")[1] ? "active" : ""}
//                 //   onClick={(e) => {
//                 //     e.preventDefault();
//                 //     handleScroll(item.href.replace("#", ""));
//                 //   }}
//                 //   href={item.href}
//                 // >
//                 //   {item.title}
//                 // </Link>

//                 <Link
//   className={item.title === "hiring" ? "" : pathname.split("/")[1] === item.href.split("/")[1] ? "active" : ""}
//   onClick={(e) => {
//     e.preventDefault();
// handleScroll(item.href.replace("#", ""), item.href)
//   }}
//   href={item.href}
// >
//   {item.title}
// </Link>

//               ) : (
//                 <a
//                 data-set='tete'
//                   ref={(el) => (menuRefs.current[index] = el)} // Store refs for each menu item
//                   onClick={() => handleMenuClick(index)}
//                 >
//                   <span className={isActiveParent(item) ? "activeParent" : ""}>
//                     {item.title}
//                   </span>
//                 </a>
//               )}
//               {item.hasMegamenu && (
//                 <div className={`rainbow-megamenu ${item.megamenuClass}`}>
//                   <div className="wrapper">
//                     <div className="row row--0">
//                       {item.megamenuColumns.map((column, colIndex) => (
//                         <div key={colIndex} className={item.colclass}>
//                           <ul className="mega-menu-item">
//                             {column.map((link, linkIndex) => (
//                               <li key={linkIndex}>
//                                 <Link
//                                   className={
//                                     pathname.split("/")[1] ==
//                                     link.href.split("/")[1]
//                                       ? "active"
//                                       : ""
//                                   }
//                                   href={link.href}
//                                 >
//                                   {link.label}{" "}
//                                   {link.badge && (
//                                     <span className="rainbow-badge-card">
//                                       {link.badge}
//                                     </span>
//                                   )}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {item.hasDropdown && (
//                 <ul className="submenu">
//                   {item.submenu.map((submenuItem, submenuIndex) => (
//                     <li key={submenuIndex}>
//                       <Link
//                         className={
//                           pathname.split("/")[1] ==
//                           submenuItem.href.split("/")[1]
//                             ? "active"
//                             : ""
//                         }
//                         href={submenuItem.href}
//                       >
//                         {submenuItem.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//       </div>

//     </div>
//   );
// }
