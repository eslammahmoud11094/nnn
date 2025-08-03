import Testimonials2 from "@/components/common/Testimonials2";
import Footer3 from "@/components/footers/Footer3";
import About from "@/components/homes/index-personal-portfolio/About";
import Hero from "@/components/homes/index-personal-portfolio/Hero";
import Skills from "@/components/homes/index-personal-portfolio/Skills";
import React from "react";

export default function page({ translations }) {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{translations.meta.founder.title}</title>
        <meta
          name="description"
          content={translations.meta.founder.description}
        />
        <meta
          name="keywords"
          content={translations.meta.founder.keywords.join(", ")}
        />
        <meta name="author" content="Mais Al Kayal" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={translations.meta.founder.title} />
        <meta
          property="og:description"
          content={translations.meta.founder.ogDescription}
        />
        <meta property="og:url" content="https://talentlyme.com/founder" />
        <meta property="og:site_name" content="Talently" />
        <meta property="og:image" content="/assets/favicon4.png" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content={locale} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Talently" />
        <meta name="twitter:creator" content="@MaisAlKayal" />
        <meta name="twitter:title" content={translations.meta.founder.title} />
        <meta
          name="twitter:description"
          content={translations.meta.founder.twitterDescription}
        />
        <meta name="twitter:image" content="/assets/favicon4.png" />
      </Head>

      <Header4 translations={translations} />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero translations={translations} />
      <About translations={translations} />

      <Skills translations={translations} />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Testimonials2 translations={translations} />

      <Footer3 translations={translations} />
    </>
  );
}

import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import Header4 from "@/components/headers/Header4";
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
