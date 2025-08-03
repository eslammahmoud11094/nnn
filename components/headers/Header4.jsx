"use client";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import ModeSwitcher from "../common/ModeSwitcher";
import { openMenu } from "@/utlis/toggleMenu";
import { useLang } from "@/context/LangContext";
import { useRouter } from "next/router";
import ClientOnly from "@/components/ClientOnly";

export default function Header4({
  translations,
  parentClass = "rainbow-header header-default header-not-transparent header-sticky",
  btnClass = "btn-default btn-small round",
}) {
  const router = useRouter();
  const { locale, asPath } = router;

  const newLocale = locale === "ar" ? "en" : "ar";

  const handleLangSwitch = () => {
    const pathWithoutBase = asPath.split("?")[0];
    router.push(pathWithoutBase, undefined, { locale: newLocale });
  };

  return (
    <header className={parentClass} dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="container position-relative">
        <div className="row align-items-center row--0">
          <div className="col-lg-3 col-md-6 col-4">
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
          <div className="col-lg-9 col-md-6 col-8 position-static">
            <div className="header-right">
              <nav className="mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                  {/* <Nav /> */}

                  <Nav translations={translations} />
                </ul>
              </nav>
              {/* Start Header Btn  */}
              <div className="header-btn">
                <button
                  onClick={handleLangSwitch}
                  className="btn-default btn-small round"
                >
                  {newLocale.toUpperCase()}
                </button>
              </div>
              {/* End Header Btn  */}
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button onClick={openMenu} className="hamberger-button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <ModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
