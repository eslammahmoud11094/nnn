import Breadcumb2 from "@/components/blog/Breadcumb2";
import Timeline from "@/components/elements/Timeline";
import Footer3 from "@/components/footers/Footer3";
import React from "react";
import Services from "@/components/homes/index-collaborate/Services";
import BlogGridSidebar from "@/components/blog/BlogGridSidebar";

export default function page({ translations }) {
  const services = translations.services;
  const inv = services.individual;
  const org = services.organizational;

  const meta = translations.services.meta;
  const blogPosts3 = [
    {
      id: 1,
      title: inv["career-coaching"]?.title,
      slug: "career-coaching",
      desc: inv["career-coaching"]?.desc,
      fullDesc: inv["career-coaching"]?.fullDesc,
      imgSrc: "/assets/images/services/Career.jpg",
      imgAlt: inv["career-coaching"]?.alt,
    },
    {
      id: 2,
      title: inv["interview-preparation"]?.title,
      slug: "interview-preparation",
      desc: inv["interview-preparation"]?.desc,
      fullDesc: inv["interview-preparation"]?.fullDesc,
      imgSrc: "/assets/images/services/Interview.jpg",
      imgAlt: inv["interview-preparation"]?.alt,
    },
    {
      id: 3,
      title: inv["cv-review-enhancement"]?.title,
      slug: "cv-review-enhancement",
      desc: inv["cv-review-enhancement"]?.desc,
      fullDesc: inv["cv-review-enhancement"]?.fullDesc,
      imgSrc: "/assets/images/services/CV.jpg",
      imgAlt: inv["cv-review-enhancement"]?.alt,
    },
  ];

  const blogPosts4 = [
    {
      id: 4,
      title: org["strategic-hr-consulting"]?.title,
      slug: "strategic-hr-consulting",
      desc: org["strategic-hr-consulting"]?.desc,
      fullDesc: org["strategic-hr-consulting"]?.fullDesc,
      imgSrc: "/assets/images/services/Strategic2.jpg",
      imgAlt: org["strategic-hr-consulting"]?.alt,
    },
    {
      id: 5,
      title: org["recruitment-talent-acquisition"]?.title,
      slug: "recruitment-talent-acquisition",
      desc: org["recruitment-talent-acquisition"]?.desc,
      fullDesc: org["recruitment-talent-acquisition"]?.fullDesc,
      imgSrc: "/assets/images/services/Recruitment.jpg",
      imgAlt: org["recruitment-talent-acquisition"]?.alt,
    },
    {
      id: 6,
      title: org["employee-experience-design"]?.title,
      slug: "employee-experience-design",
      desc: org["employee-experience-design"]?.desc,
      fullDesc: org["employee-experience-design"]?.fullDesc,
      imgSrc: "/assets/images/services/Employee2.jpg",
      imgAlt: org["employee-experience-design"]?.alt,
    },
    {
      id: 7,
      title: org["leadership-development"]?.title,
      slug: "leadership-development",
      desc: org["leadership-development"]?.desc,
      fullDesc: org["leadership-development"]?.fullDesc,
      imgSrc: "/assets/images/services/Leadership2.jpg",
      imgAlt: org["leadership-development"]?.alt,
    },
    {
      id: 8,
      title: org["wellbeing-inclusion"]?.title,
      slug: "wellbeing-inclusion",
      desc: org["wellbeing-inclusion"]?.desc,
      fullDesc: org["wellbeing-inclusion"]?.fullDesc,
      imgSrc: "/assets/images/services/Wellbeing.jpg",
      imgAlt: org["wellbeing-inclusion"]?.alt,
    },
    {
      id: 9,
      title: org["emiratization-nationalization"]?.title,
      slug: "emiratization-nationalization",
      desc: org["emiratization-nationalization"]?.desc,
      fullDesc: org["emiratization-nationalization"]?.fullDesc,
      imgSrc: "/assets/images/services/Emiratization.jpg",
      imgAlt: org["emiratization-nationalization"]?.alt,
    },
  ];
  const categories = [
    { key: "all", label: services.categories.all },
    { key: "org", label: services.categories.org },
    { key: "inv", label: services.categories.inv },
  ];
  const allBlogs = [...blogPosts3, ...blogPosts4];

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />

        {/* Icons */}
        <link rel="icon" href="/assets/favicon3.png" />
        <link rel="shortcut icon" href="/assets/favicon3.png" />
        <link rel="apple-touch-icon" href="/assets/favicon3.png" />

        {/* OpenGraph */}
        <meta property="og:title" content={meta.openGraph.title} />
        <meta property="og:description" content={meta.openGraph.description} />
        <meta property="og:url" content="https://talentlyme.com/services" />
        <meta property="og:site_name" content="Talently" />
        <meta property="og:image" content="/assets/favicon3.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={meta.openGraph.alt} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Talently" />
        <meta name="twitter:creator" content="@Talently" />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description} />
        <meta name="twitter:image" content="/assets/favicon3.png" />
      </Head>
      <Header4
        translations={translations}
        parentClass="rainbow-header header-default header-transparent header-sticky"
      />

      <Breadcumb2
        translations={translations}
        title={meta.openGraph.title2}
        type={meta.openGraph.title2}
      />

      {/* <CombinedServices />
       */}

      <BlogGridSidebar
        callUs={translations.footer.ctaBtn}
        title={meta.openGraph.title2}
        blogPosts3={blogPosts3}
        blogPosts4={blogPosts4}
        categories={categories}
        allBlogs={allBlogs}
        translations={translations}
      />

      <Services translations={translations} />

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      <Timeline translations={translations} />

      <Footer3 translations={translations} />
    </>
  );
}

import fs from "fs";
import path from "path";
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
