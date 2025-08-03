import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Contact from "@/components/othersPages/Contact";
import BreadCumb from "@/components/portfolio/BreadCumb";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Breadcumb2 from "@/components/blog/Breadcumb2";

export default function page({ translations }) {
  const meta = translations.contact;
  const contactT = translations.contact;

  console.log(process.env.EMAIL_USER, "process.env.EMAIL_USER");
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        {/* Open Graph */}
        <meta property="og:title" content={meta.openGraph.title} />
        <meta property="og:description" content={meta.openGraph.description} />
        <meta property="og:image" content="/assets/favicon3.png" />
        <meta property="og:image:alt" content={meta.openGraph.alt} />
        <meta property="og:url" content="https://talentlyme.com/contact" />
        <meta property="og:site_name" content="Talently" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Talently" />
        <meta name="twitter:creator" content="@Talently" />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description} />
        <meta name="twitter:image" content="/assets/favicon3.png" />

        {/* Icons */}
        <link rel="icon" href="/assets/favicon3.png" />
        <link rel="shortcut icon" href="/assets/favicon3.png" />
        <link rel="apple-touch-icon" href="/assets/favicon3.png" />
      </Head>

      <Header4
        translations={translations}
        parentClass="rainbow-header header-default header-transparent header-sticky"
      />
      {/* <BreadCumb translations={translations} title={"We’d love to hear from you"} />
      
      */}

      <Breadcumb2
        translations={translations}
        title={translations.footer.ctaBtn}
        type={translations.contact.welcome}
      />

      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      <Contact contactT={contactT} />

      <Footer3 translations={translations} />
    </>
  );
}

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
