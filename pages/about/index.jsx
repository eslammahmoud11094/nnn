import React from "react";
import Breadcumb2 from "@/components/blog/Breadcumb2";
import About from "@/components/homes/index-business-consulting-2/About";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Features from "@/components/homes/index-collaborate/Features";
import Head from "next/head";

export default function page({ translations }) {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>{translations.meta.about.title}</title>
        <meta
          name="description"
          content={translations.meta.about.description}
        />
        <meta
          name="keywords"
          content={translations.meta.about.keywords.join(", ")}
        />
        <meta name="author" content="Talently" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content={translations.meta.about.title} />
        <meta
          property="og:description"
          content={translations.meta.about.description}
        />
        <meta property="og:url" content="https://talentlyme.com/about" />
        <meta property="og:site_name" content="Talently" />
        <meta property="og:image" content="/assets/favicon3.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Talently" />
        <meta name="twitter:creator" content="@Talently" />
        <meta name="twitter:title" content={translations.meta.about.title} />
        <meta
          name="twitter:description"
          content={translations.meta.about.description}
        />
        <meta name="twitter:image" content="/assets/favicon3.png" />
      </Head>

      <Header4
        translations={translations}
        parentClass="rainbow-header header-default header-transparent header-sticky"
      />

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      {/* <Hero /> */}
      <Breadcumb2
        translations={translations}
        title={translations.about.breadcrumbTitle}
        type={translations.about.breadcrumbType}
      />
      <About translations={translations} />

      <Features translations={translations} />

      {/* <Service2 /> */}
      {/* <Brands /> */}

      <Footer3 translations={translations} />
    </>
  );
}

import fs from "fs";
import path from "path";
import { useRouter } from "next/router";

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
