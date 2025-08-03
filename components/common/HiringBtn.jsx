"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HiringBtn.module.scss";
export default function HiringBtn({ toggleMenu }) {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const scrollTop = document.querySelector(".rainbow-back-top2");

    const handleScroll = () => {
      const topPos = window.scrollY || document.documentElement.scrollTop;
      if (topPos > 150) {
        scrollTop.style.opacity = "1";
      } else {
        scrollTop.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smoothly hide message after 5 seconds
    const timeout = setTimeout(() => setShowMessage(false), 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={styles.hiring_btn_container}>
      {/* Smoothly Animate the Message */}
      {/* <AnimatePresence>
        {showMessage && (
          <motion.div
            className={` ${styles.hiring_message}`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            We're Hiring<span className={styles.apply_text}>Apply Here!</span>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Animated Button */}
      <motion.a
        target="_blank"
        // href="https://wa.me/9710505110251"
        href="https://wa.me/971505110251"
        className="rainbow-back-top2"
        style={{ opacity: 1 }}
        // onClick={toggleMenu}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* <i className="feather-user-plus" /> */}

        <i class="fab fa-whatsapp"></i>
      </motion.a>

      {/* Styles */}
      <style jsx>{`
        .hiring-btn-container {
          position: fixed;
          bottom: 79px;
          left: 7px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .rainbow-back-top2 {
          background: #ff4d4f;
          color: white;
          width: 55px;
          height: 55px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }

        .rainbow-back-top2:hover {
          background: #d9363e;
        }

        .feather-user-plus {
          font-size: 26px;
        }
      `}</style>
    </div>
  );
}
