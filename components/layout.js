"use client";
import { useEffect } from "react";
import "../public/assets/scss/main.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import { usePathname } from "next/navigation";
import sal from "sal.js";
import BackToTop from "@/components/common/BackToTop";
import MobileMenu from "@/components/headers/MobileMenu";
import { closeMenu } from "@/utlis/toggleMenu";
import Hiring from "@/components/common/Hiring";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { LangProvider } from "@/context/LangContext";
import WelcomeIntro from "@/components/WelcomeIntro";
import { useRouter } from "next/router";


export default function RootLayout({ children }) {
const {locale} = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
      // setTimeout(() => {
      //   import("../utlis/mmenu").then(() => {
      //     // Module is imported, you can access any exported functionality if
      //     new window.Mmenu(document.querySelector("#menu"));
      //   });
      // }, 200);
    }
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, [pathname]);
  useEffect(() => {
    // Close any open modal
    closeMenu();
  }, [pathname]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        document.querySelector(".header-sticky")?.classList.add("sticky");
      } else {
        document.querySelector(".header-sticky")?.classList.remove("sticky");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const isDarkmode = localStorage.getItem("isDarkmode");

    // Compare to the string "true"
    if (isDarkmode === "true") {
      document.body.setAttribute("class", "active-dark-mode");
    } else if (isDarkmode === "false") {
      document.body.setAttribute("class", "active-light-mode");
    }
  }, []);

  return (
      <body className="active-dark-mode">
        <main className={`page-wrapper ${locale}`}>
           <LangProvider>
              <WelcomeIntro />
            {children}
            </LangProvider>
          </main>
        <MobileMenu />
        <Toaster
  position="top-center"
  reverseOrder={false}

  toastOptions={{
    style: {
      background: '#363636',
      color: '#fff',
    },
  }}
/>
        <BackToTop />
        <Hiring />
      </body>
  );
}
