"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeIntro() {
  const [showIntro, setShowIntro] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("isDarkmode") === "true";
    setIsDarkMode(isDark);

    const hasVisited = localStorage.getItem("hasVisitedTalently");
    if (!hasVisited) {
      setShowIntro(true);
      localStorage.setItem("hasVisitedTalently", "true");
      setTimeout(() => {
        setShowIntro(false);
      }, 2000);
    }
    setChecked(true);
  }, []);

  return (
    <AnimatePresence>
      {checked && showIntro && (
        <motion.div
          className={`welcome-overlay ${isDarkMode ? "dark" : "light"}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            width={200}
            height={200}
            className="welcome-logo"
            src={
              isDarkMode
                ? "/assets/images/logo/logo-dark.png"
                : "/assets/images/logo/logo-light.png"
            }
            alt="Talently Logo"
          />
          <motion.div
            className="logo-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function WelcomeIntro() {
//   const [showIntro, setShowIntro] = useState(false);
//   const [checked, setChecked] = useState(false); // نستخدمه لمنع الريندر قبل التحقق من localStorage

//   useEffect(() => {

//     const hasVisited = localStorage.getItem("hasVisitedTalently");
//     if (!hasVisited) {
//       setShowIntro(true);
//       localStorage.setItem("hasVisitedTalently", "true");
//       setTimeout(() => {
//         setShowIntro(false);
//       }, 4000);
//     }
//     setChecked(true);
//   }, []);
// localStorage.removeItem("hasVisitedTalently");

//   return (
//     <AnimatePresence>
//       {checked && showIntro && (
//         <motion.div
//           className="welcome-overlay"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 1 } }}
//         >
//           <motion.img
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1.2, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             width={200}
//             height={200}
//             className="welcome-title"
//         src="/assets/images/logo/logo-light.png"
// />
        
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
