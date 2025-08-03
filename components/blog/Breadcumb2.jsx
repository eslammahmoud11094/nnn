import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Breadcumb2({
  translations,
  title = "Blog Grid",
  type = "Blog Grid Style.",
}) {

    const { locale } = useRouter();
  const isRTL = locale === 'ar';
  return (
    <div className="breadcrumb-area breadcarumb-style-1 ptb--120" 
    

    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner text-center" >
              <h1 className="title theme-gradient h2">{type}</h1>
              <ul className="page-list" dir={isRTL ? 'rtl' : 'ltr'}>
                <li className="rainbow-breadcrumb-item">
                  <Link href={`/`}>{translations.menu.home}</Link>
                </li>
                <li className="rainbow-breadcrumb-item active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
