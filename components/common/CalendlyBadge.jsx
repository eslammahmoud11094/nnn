// "use client";
// import { useEffect } from "react";

// export default function CalendlyBadge() {
//   useEffect(() => {
//     // Load Calendly CSS
//     const link = document.createElement("link");
//     link.href = "https://assets.calendly.com/assets/external/widget.css";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);

//     // Load Calendly JS
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (window.Calendly) {
//         window.Calendly.initBadgeWidget({
//           url: "https://calendly.com/ahmedezzat18990/30min",
//           text: "Book Appointment",
//           color: "#1a1a1a",
//           textColor: "#ffffff",
//         });
//       }
//     };

//     return () => {
//       document.head.removeChild(link);
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null; // No UI needed, just script execution
// }



"use client";
import { useEffect } from "react";

export default function CalendlyPopup({cc}) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // Function to open the Calendly popup
  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/ahmedezzat18990/30min",
      });
    }
  };

  return (
    <>
                      <a
                        className={cc}
                        href="#" onClick={openCalendly}                       >
                        Book an Appointment<i className="icon feather-arrow-right" />
                      </a>
    </>
  );
}
