"use client";
import React, { useEffect, useState } from "react";
import { openMenu } from "@/utlis/toggleMenu";
import Link from "next/link";
import ModeSwitcher from "../common/ModeSwitcher";
import { menuItems } from "@/data/menu";

export default function HeaderPreview() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const links = document.querySelectorAll(
      ".scrollSpyLinks a[href^='#']"
    );

    const handleScroll = () => {
      let current = "";
      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href || href === "#" || !href.startsWith("#") || href.length < 2) return;
        const section = document.querySelector(href);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          if (window.scrollY >= offsetTop) {
            current = href.substring(1);
          }
        }
      });
      setActiveSection(current);
    };

    links.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || !href.startsWith("#") || href.length < 2) return;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filter only anchor items (href starts with #)
  const navLinks = menuItems.filter(item =>
    typeof item.href === 'string' && item.href.startsWith('#')
  );

  return (
    <header className="rainbow-header header-default header-not-transparent header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center row--0 row align-items-center justify-content-between">
          <div className="col-lg-2 col-md-6 col-4 header-logo">
            <div className="logo">
              <Link href="/">
                <img
                  className="logo-dark"
                    src="/assets/images/logo/logo-light.png"
                  alt="Corporate Logo"
                />
                <img
                  className="logo-light"
                    src="/assets/images/logo/logo-dark.png"
                  alt="Corporate Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-md-6 col-8 position-static header-rest scrollSpyLinks">
            <div className="header-right">
              <nav className="mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                  {navLinks.map(({ href, title }) => {
                    const key = href.substring(1);
                    return (
                      <li key={key}>
                        <a
                          href={href}
                          className={`smoth-animation ${
                            activeSection === key ? "active" : ""
                          }`}
                        >
                          {title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              {/* <div className="header-btn">
                <a
                  className="btn-default btn-small round"
                  target="_blank"
                  href="https://themeforest.net/user/rainbow-themes/portfolio"
                >
                  BUY NOW
                </a>
              </div> */}
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button className="hamberger-button" onClick={openMenu}>
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
