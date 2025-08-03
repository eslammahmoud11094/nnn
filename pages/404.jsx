import Error from "@/components/elements/Error";
import Footer1 from "@/components/footers/Footer1";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Header5 from "@/components/headers/Header5";
import HeaderPreview from "@/components/headers/HeaderPreview";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title:
    "Page Not Found | Talently",
  description: "Talently",
};
export default function page() {
  return (
    <>
      <Header4 parentClass="rainbow-header header-default header-transparent header-sticky" />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Error />

      <Footer1 />
    </>
  );
}
