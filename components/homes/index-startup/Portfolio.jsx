"use client";
import { useEffect, useRef, useState } from "react";
import { portfolios } from "@/data/portfolio"; // فقط البيانات مش الفلاتر
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Portfolio({ translations }) {
  const { locale } = useRouter();
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".portfolio-3",
      layoutMode: "masonry",
    });

    imagesloaded(isotopContainer.current).on("progress", function () {
      isotope.current.layout();
    });
  };

  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({ filter: val });
  };

  useEffect(() => {
    initIsotop();
  }, []);

  const sectionTitle = translations?.portfolios?.filter?.title;
  const sectionCta = translations?.portfolios?.filter?.cta;
  const filterLabels = translations?.portfolios?.filter?.buttons;

  const filterButtons = [
    { filter: "*", label: filterLabels?.[0] },
    { filter: ".cat--1", label: filterLabels?.[1] },
    { filter: ".cat--2", label: filterLabels?.[2] },
    { filter: ".cat--3", label: filterLabels?.[3] },
    { filter: ".cat--4", label: filterLabels?.[4] },
  ];

  const translatedPortfolios = translations?.portfolios?.items.map(
    (item, index) => ({
      id: index + 1,
      categories: portfolios[index]?.categories,
      title: item.title,
      subtitle: item.subtitle,
      imgSrc: portfolios[index]?.imgSrc,
      altText: item.altText,
    })
  );

  return (
    <div className="rainbow-portfolio-area rainbow-section-gap masonary-wrapper-activation">
      <div className="container-fluid plr--30">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--50"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={150}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">{sectionTitle}</span>
              </h4>
              <h2 className="title w-600 mb--20">{sectionCta}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="rainbow-portfolio-filter filter-button-default messonry-button text-center mb--30"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              {filterButtons.map((button) => (
                <button
                  key={button.filter}
                  onClick={() => updateCategory(button.filter)}
                  data-filter={button.filter}
                  className={currentFilter == button.filter ? "is-checked" : ""}
                >
                  <span className="filter-text">{button.label}</span>
                </button>
              ))}
            </div>

            <div
              ref={isotopContainer}
              className="portfolio-items grid-metro3 mesonry-list"
            >
              <div className="resizer" />
              {translatedPortfolios.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className={`portfolio-3 box-grid-layout ${portfolio.categories}`}
                >
                  <div className="rainbow-card portfolio">
                    <div className="inner">
                      <div className="thumbnail">
                        <figure className="card-image">
                          <Link href={`/contact`}>
                            <Image
                              alt={portfolio.altText}
                              src={portfolio.imgSrc}
                              width={1270}
                              height={950}
                            />
                          </Link>
                        </figure>
                        <Link className="rainbow-overlay" href={`/services`} />
                      </div>
                      <div
                        className={`content `}
                        dir={locale === "ar" ? "rtl" : "ltr"}
                      >
                        <h5 className="title mb--10">
                          <Link href={`/contact`}>{portfolio.title}</Link>
                        </h5>
                        <span className="subtitle b2">
                          {portfolio.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row row--15">
          <div className="col-lg-12">
            <div className="rainbow-load-more text-center mt--60">
              <Link
                href={`/contact`}
                className="btn btn-default btn-large btn-icon"
              >
                <span>
                  {translations?.portfolios?.filter?.cta || "Get In Touch"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
