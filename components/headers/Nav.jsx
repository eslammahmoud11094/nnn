"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

export default function Nav({ translations }) {
  const pathname = usePathname();
  const {locale} =useRouter()

  const menuItems = [
    {
      title: translations?.menu?.home,
      href: "/",
    },
    {
      title: translations?.menu?.about,
      hasDropdown: true,
      submenu: [
        { label: translations?.menu.whoWeAre, href: "/about#" },
        { label: translations?.menu.ourValues, href: "/about/#mission" },
        { label: translations?.menu.missionVision, href: "/about/#vision" },
      ],
    },
    {
      title: translations?.menu.aboutFounder,
      href: "/founder",
    },
    {
      title: translations?.menu.services,
      hasDropdown: true,
      submenu: [
        { label: translations?.menu.individualServices, href: "/services#" },
        { label: translations?.menu.organizationalServices, href: "/services#" },
      ],
    },
    {
      title: translations?.menu.contact,
      href: "/contact",
    },
  ];

  const isActiveParent = (menu) => {
    let isActive = false;
    if (menu.megamenuColumns) {
      menu.megamenuColumns.forEach((elm) => {
        if (elm.some((el) => el.href.split("/")[1] === pathname.split("/")[1])) {
          isActive = true;
        }
      });
    }
    if (menu.submenu) {
      if (
        menu.submenu.some(
          (el) => el.href.split("/")[1] === pathname.split("/")[1]
        )
      ) {
        isActive = true;
      }
    }
    return isActive;
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`${
            item.hasMegamenu ? "with-megamenu has-menu-child-item " : ""
          } ${item.hasDropdown ? "has-droupdown has-menu-child-item" : ""} ${
            item.megamenuClass === "with-mega-item-2" ? "position-relative" : ""
          }`}
        >
          {item.href ? (
            <Link
              className={
                pathname.split("/")[1] === item.href.split("/")[1]
                  ? "active"
                  : ""
              }
              href={item.href}
            >
              {item.title}
            </Link>
          ) : (
            <a className={isActiveParent(item) ? "active" : ""}>
              {item.title}
            </a>
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
                              href={link.href}
                              className={
                                pathname.split("/")[1] === link.href.split("/")[1]
                                  ? "active"
                                  : ""
                              }
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

          {item.hasDropdown && (
            <ul className="submenu" dir={locale === 'ar'?'rtl':'ltr'}>
              {item.submenu.map((submenuItem, submenuIndex) => (
                <li key={submenuIndex}>
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
        </li>
      ))}
    </>
  );
}

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// export default function Nav({translations}) {
//  const menuItems = [
//   {
//     title: t("menu.home"),
//     href: "/",
//   },
//   {
//     title: t("menu.about"),
//     hasDropdown: true,
//     submenu: [
//       { label: t("menu.whoWeAre"), href: "/about#" },
//       { label: t("menu.ourValues"), href: "/about/#mission" },
//       { label: t("menu.missionVision"), href: "/about/#vision" },
//     ],
//   },
//   {
//     title: t("menu.aboutFounder"),
//     href: "/founder",
//   },
//   {
//     title: t("menu.services"),
//     hasDropdown: true,
//     submenu: [
//       { label: t("menu.individualServices"), href: "/services#" },
//       { label: t("menu.organizationalServices"), href: "/services#" },
//     ],
//   },
//   {
//     title: t("menu.contact"),
//     href: "/contact",
//   },
// ];

//   const pathname = usePathname();

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

//   return (
//     <>
//       {menuItems?.map((item, index) => (
//         <li
//           key={index}
//           className={`${
//             item.hasMegamenu ? "with-megamenu has-menu-child-item " : ""
//           } ${item.hasDropdown ? "has-droupdown has-menu-child-item" : ""} ${
//             item.megamenuClass == "with-mega-item-2" ? "position-relative" : ""
//           }`}
//         >
//                 {item.href ? (
//             <Link
//               className={
//                 pathname.split("/")[1] === item.href.split("/")[1]
//                   ? "active"
//                   : ""
//               }
//               href={item.href}
//             >
//               {item.title}
//             </Link>
//           ) : (
//             <a className={isActiveParent(item) ? "active" : ""}>{item.title}</a>
//           )}

//           {item.hasMegamenu && (
//             <div className={`rainbow-megamenu ${item.megamenuClass}`}>
//               <div className="wrapper">
//                 <div className="row row--0">
//                   {item.megamenuColumns.map((column, colIndex) => (
//                     <div key={colIndex} className={item.colclass}>
//                       <ul className="mega-menu-item">
//                         {column.map((link, linkIndex) => (
//                           <li key={linkIndex}>
//                             <Link
//                               href={link.href}
//                               className={
//                                 pathname.split("/")[1] ==
//                                 link.href.split("/")[1]
//                                   ? "active"
//                                   : ""
//                               }
//                             >
//                               {link.label}
//                               {link.badge && (
//                                 <span className="rainbow-badge-card">
//                                   {link.badge}
//                                 </span>
//                               )}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//           {item.hasDropdown && (
//             <ul className="submenu">
//               {item.submenu.map((submenuItem, submenuIndex) => (
//                 <li key={submenuIndex}>
//                   <Link
//                     className={
//                       pathname.split("/")[1] == submenuItem.href.split("/")[1]
//                         ? "active"
//                         : ""
//                     }
//                     href={submenuItem.href}
//                   >
//                     {submenuItem.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </>
//   );
// }
// "use client";
// // import { menuItems } from "@/data/menu";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";
// import { useTranslation } from "react-i18next";

// export default function Nav() {
//   const pathname = usePathname();
//   const {t}= useTranslation('common')

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

//   return (
//     <>
//       {menuItems.map((item, index) => (
//         <li
//           key={index}
//           className={`${
//             item.hasMegamenu ? "with-megamenu has-menu-child-item " : ""
//           } ${item.hasDropdown ? "has-droupdown has-menu-child-item" : ""} ${
//             item.megamenuClass == "with-mega-item-2" ? "position-relative" : ""
//           }`}
//         >
//           {item.href ? (
//             <Link
//               className={
//                 pathname.split("/")[1] == item.href.split("/")[1]
//                   ? "active"
//                   : ""
//               }
//               href={item.href}
//             >
//               {t(item.title)}
//             </Link>
//           ) : (
//             <a className={isActiveParent(item) ? "active" : ""}>{t(item.title)}</a>
//           )}
//           {item.hasMegamenu && (
//             <div className={`rainbow-megamenu ${item.megamenuClass}`}>
//               <div className="wrapper">
//                 <div className="row row--0">
//                   {item.megamenuColumns.map((column, colIndex) => (
//                     <div key={colIndex} className={item.colclass}>
//                       <ul className="mega-menu-item">
//                         {column.map((link, linkIndex) => (
//                           <li key={linkIndex}>
//                             <Link
//                               href={link.href}
//                               className={
//                                 pathname.split("/")[1] ==
//                                 link.href.split("/")[1]
//                                   ? "active"
//                                   : ""
//                               }
//                             >
//                               {link.label}
//                               {link.badge && (
//                                 <span className="rainbow-badge-card">
//                                   {link.badge}
//                                 </span>
//                               )}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//           {item.hasDropdown && (
//             <ul className="submenu">
//               {item.submenu.map((submenuItem, submenuIndex) => (
//                 <li key={submenuIndex}>
//                   <Link
//                     className={
//                       pathname.split("/")[1] == submenuItem.href.split("/")[1]
//                         ? "active"
//                         : ""
//                     }
//                     href={submenuItem.href}
//                   >
//                     {t(submenuItem.label)}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </>
//   );
// }





