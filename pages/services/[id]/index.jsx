// pages/services/[slug].js

import BlogDetails from "@/components/blog/BlogDetails";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import fs from "fs";
import Head from "next/head";
import path from "path";

export default function Page({ blog, translations }) {
  return (
    <>
      <Head>
        <title>
          {translations.meta.home.title} | {blog.title}
        </title>
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

      <Topbar />
      <Header4 translations={translations} />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <BlogDetails blog={blog} translations={translations} />
      <Footer3 translations={translations} />
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const allIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const paths = allIds.flatMap((id) =>
    locales.map((locale) => ({
      params: { id: id.toString() },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "locales",
    locale,
    "common.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const translations = JSON.parse(fileContents);

  const inv = translations.services?.individual || {};
  const org = translations.services?.organizational || {};

  const allBlogs = [
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

  const blog = allBlogs.find((elm) => elm.id === Number(params.id));

  if (!blog) return { notFound: true };

  return {
    props: {
      blog,
      translations,
    },
  };
}
