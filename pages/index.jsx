import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Hero from "@/components/homes/index-startup/Hero";
import Portfolio from "@/components/homes/index-startup/Portfolio";
import Progress from "@/components/homes/index-startup/Progress";
import Services from "@/components/homes/index-startup/Services";
import CombinedServices from "@/components/homes/home-landing/CombinedServices";
import React from "react";
import Blogs2 from "@/components/homes/index-magazine/Blogs";
import Cta from "@/components/homes/index-collaborate/Cta";
import Testimonials from "@/components/common/Testimonials";

export default function page({ translations }) {
  return (
    <>
      <Head>
        <title>{translations.meta.home.title}</title>
        <meta name="description" content={translations.meta.home.description} />
        <meta
          name="keywords"
          content={translations.meta.home.keywords.join(", ")}
        />
        <meta name="author" content="Talently" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content={translations.meta.home.title} />
        <meta
          property="og:description"
          content={translations.meta.home.description}
        />
        <meta property="og:url" content="https://talentlyme.com" />
        <meta property="og:site_name" content="Talently" />
        <meta property="og:image" content="/assets/favicon3.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:locale"
          content={translations.lang === "ar" ? "ar" : "en"}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Talently" />
        <meta name="twitter:creator" content="@Talently" />
        <meta name="twitter:title" content={translations.meta.home.title} />
        <meta
          name="twitter:description"
          content={translations.meta.home.description}
        />
        <meta name="twitter:image" content="/assets/favicon3.png" />
      </Head>

      <Header4
        translations={translations}
        parentClass="rainbow-header header-default  header-sticky"
      />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      <Hero translations={translations} />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <Progress translations={translations} />

      <Portfolio translations={translations} />

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Services translations={translations} />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Blogs2 translations={translations} />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <CombinedServices translations={translations} />

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <Cta translations={translations} />

      <Testimonials translations={translations} />

      <Footer3 translations={translations} />
    </>
  );
}

import fs from "fs";
import path from "path";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "locales",
    locale,
    "common.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const translations = JSON.parse(fileContents);

  return {
    props: {
      translations,
    },
  };
}
