"use client";

// import { useState, useEffect, useRef } from "react";
// import CalendlyBadgeH from "../CalendlyBadgeH";
// import HiringBtn from "./HiringBtn";

// export default function Hiring() {
//   const [isMounted, setIsMounted] = useState(false);

// useEffect(() => {
//   setIsMounted(true);
// }, []);

//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   // Toggle menu visibility
//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Close menu when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="hiring-container">
//       {/* Hiring Button */}
      
    

//       <HiringBtn toggleMenu={toggleMenu}/>
//       {isMounted && (

//       <div ref={menuRef} className={`hiring-menu ${isOpen ? "open" : ""}`}>
//         <div className="hiring-header">
//           <button onClick={() => setIsOpen(false)} className="close-button"> 
//                      <i className="feather-x" />
//           </button>
//           <h2>Nexus hiring applications</h2>
//         </div>

      


//             <CalendlyBadgeH  cc={"btn-default btn-icon"}/>




//           <div>
//                 <div className="rainbow-gradient-circle" />
//                 <div className="rainbow-gradient-circle theme-pink" />
//               </div>
//       </div>
// )}
//       {/* Dark Mode Support */}
//       <style jsx>{`
//         .hiring-container {
//           position: relative;
//         }
     
//         .hiring-menu {
//           position: fixed;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 300px;
//           background: var(--menu-text, black);
//           color: var(--menu-text, white);
//           box-shadow: var(--shadow);
//           padding: 20px;
//           border-radius: 10px;
//           opacity: 1;
//           transition: opacity 0.3s ease, transform 0.3s ease;
//           pointer-events: none;
//           z-index: 999 !important;
//           text-align:center;
// visibility: hidden;
          
//         }
//           h2{
//           margin-top:14px;
//           font-size: 18px;
//           color:white !important;
//           text-align:center;
//           }
//         .hiring-menu.open {
//           pointer-events: all;
//             visibility: visible;
//         }
//         .close-button {
//           background: transparent;
//           border: none;
//           cursor: pointer;
//         }

//         .close-button i {
//         color:white;
//         }
//         .add-button {
//           width: 100%;
//           background: var(--primary);
//           color: white;
//           padding: 10px;
//           border-radius: 5px;
//           transition: 0.3s;
//         }
//         .add-button:hover {
//           background: var(--primary-hover);
//         }
//         /* Dark Mode */
     
//         .active-dark-mode {
//           --menu-bg: #1a1a1a;
//           --menu-text: white;
//         }
//       `}</style>
//     </div>
//   );
// }

 {/* <div ref={menuRef} className={`hiring-menu ${isOpen ? "open" : ""}`}>
        <div className="hiring-header">
          <button onClick={() => setIsOpen(false)} className="close-button"> 
                     <i className="feather-x" />
          </button>
          <h2>Nexus hiring applications</h2>
        </div>



            <CalendlyBadgeH  cc={"btn-default btn-icon"}/>




          <div>
                <div className="rainbow-gradient-circle" />
                <div className="rainbow-gradient-circle theme-pink" />
              </div>
      </div>     */}

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import CalendlyBadgeH from "../CalendlyBadgeH";
// import HiringBtn from "./HiringBtn";

// export default function Hiring() {
//   const [isMounted, setIsMounted] = useState(false);
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   // Toggle menu visibility
//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Close menu when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);



//   return (
//     <div className="hiring-container">
//       {/* Hiring Button */}
//       <HiringBtn toggleMenu={toggleMenu} />
      
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             ref={menuRef}
//             initial={{ opacity: 0, scale: 0.8, y: -20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: -20 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//           <div className="hiring-menu"  >
//             <div className="hiring-header">
//               <button onClick={() => setIsOpen(false)} className="close-button">
//                 <i className="feather-x" />
//               </button>
//               <h2>Nexus hiring applications</h2>
//             </div>
//             <CalendlyBadgeH cc={"btn-default btn-icon"} />
//             <div>
//               <div className="rainbow-gradient-circle" />
//               <div className="rainbow-gradient-circle theme-pink" />
//             </div>
//           </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
    
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CalendlyBadgeH from "../CalendlyBadgeH";
import HiringBtn from "./HiringBtn";

export default function Hiring() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="hiring-container">
      {/* Hiring Button */}
      <HiringBtn toggleMenu={toggleMenu} />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="hiring-menu"
            initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div className="hiring-header">
         
             <button onClick={() => setIsOpen(false)}  className="close-button">
                        <i className="feather-x" />
                      </button>



              <h2>Talently hiring applications</h2>
            </div>
            <CalendlyBadgeH cc={"btn-default btn-icon"} />
            <div>
              <div className="rainbow-gradient-circle" />
              <div className="rainbow-gradient-circle theme-pink" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}