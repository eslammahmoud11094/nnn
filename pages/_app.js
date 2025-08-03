// pages/_app.js
import "../public/assets/scss/main.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import sal from "sal.js";
import BackToTop from "@/components/common/BackToTop";
import MobileMenu from "@/components/headers/MobileMenu";
import Hiring from "@/components/common/Hiring";
import { Toaster } from "react-hot-toast";
import { LangProvider } from "@/context/LangContext";
import WelcomeIntro from "@/components/WelcomeIntro";
import { closeMenu } from "@/utlis/toggleMenu";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  // Scroll Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        document.querySelector(".header-sticky")?.classList.add("sticky");
      } else {
        document.querySelector(".header-sticky")?.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // sal.js Animation
  useEffect(() => {
    sal({ threshold: 0.01, once: true });
  }, [router.pathname]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [router.pathname]);

  // Bootstrap JS
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.esm");
  }, []);

  // Dark mode setup
  useEffect(() => {
    const isDarkmode = localStorage.getItem("isDarkmode");
    if (isDarkmode === "true") {
      document.body.setAttribute("class", "active-dark-mode");
    } else {
      document.body.setAttribute("class", "active-light-mode");
    }
  }, []);

  

  return (
    <>
      <LangProvider>
        <WelcomeIntro />
      <MobileMenu />
      </LangProvider>
        <Component {...pageProps} />

      <BackToTop />
      <Hiring />
      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: "#363636", color: "#fff" },
        }}
      />
    </>
  );
}

export default appWithTranslation(MyApp);


