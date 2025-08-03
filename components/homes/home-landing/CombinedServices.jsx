"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function CombinedServices({ translations }) {
  const { locale } = useRouter();
  const [active, setActive] = useState("org");

  const tabs = [
    {
      id: "org",
      label: translations.combinedServices.tabs.org.label,
      icon: "feather-briefcase",
    },
    {
      id: "ind",
      label: translations.combinedServices.tabs.ind.label,
      icon: "feather-user-check",
    },
  ];

  const orgList = translations.combinedServices.tabs.org.items;
  const indList = translations.combinedServices.tabs.ind.items;

  return (
    <section
      className="rbt-tabs-area rainbow-section-gap"
      id="services"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="row align-items-start">
          {/* Left: Title & Nav */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div
              className={`section-title  ${
                locale === "ar" ? "text-end" : "text-start"
              }`}
            >
              <h4 className="subtitle theme-gradient">
                {translations.global.site_name}
              </h4>
              <h2 className="title w-600">
                {translations.combinedServices.title}
              </h2>
              <p className="description b1">
                {translations.combinedServices.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="rainbow-default-tab">
              <ul className="tab-button flex-column mt-4" role="tablist">
                {tabs.map(({ id, label, icon }) => (
                  <li className="tabs__tab mb-2" role="presentation" key={id}>
                    <button
                      className={`nav-link d-flex align-items-center gap-3 ${
                        active === id ? "active" : ""
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={active === id}
                      onClick={() => setActive(id)}
                    >
                      <div className="service service__style--1 radius text-center">
                        <div className="icon">
                          <i className={`${icon}`} />
                        </div>
                      </div>
                      <span>{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Content */}
          {/* <div className="col-lg-7">
            <div className="rainbow-default-tab rainbow-no-padding">
              <div className="rainbow-tab-content">
                <div className="tab-pane show active" role="tabpanel">
                  <ul className="list-unstyled mb-3 ps-3">
                    {(active === "org" ? orgList : indList).map((item, index) => (
                      <li key={index} className="mb-2">
                        <strong>{item.title}</strong>: {item.desc}
                      </li>
                    ))}
                  </ul>

                  <div className="button-group mt-3">
                    <a
                      className={`btn-default btn-small ${
                        active === "ind" ? "btn-border" : ""
                      }`}
                      href={active === "org" ? "#post-job" : "#upload-cv"}
                    >
                      {active === "org"
                        ? translations.combinedServices.tabs.org.button
                        : translations.combinedServices.tabs.ind.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-lg-7">
            <div className="rainbow-default-tab rainbow-no-padding">
              <div className="rainbow-tab-content">
                <div className="tab-pane show active" role="tabpanel">
                  <ul className="list-unstyled mb-3 ps-3">
                    {(active === "org" ? orgList : indList).map(
                      (item, index) => (
                        <li key={index} className="mb-2">
                          <strong>{item.title}</strong>:
                          {item.desc.includes("*") ? (
                            <>
                              <span> {item.desc.split("*")[0].trim()} </span>
                              <ul className="list-disc ps-4 mt-1 space-y-1">
                                {item.desc
                                  .split("*")[1]
                                  .split("-")
                                  .map((point, idx) => (
                                    <li key={idx}>{point.trim()}</li>
                                  ))}
                              </ul>
                            </>
                          ) : (
                            <span> {item.desc} </span>
                          )}
                        </li>
                      )
                    )}
                  </ul>

                  <div className="button-group mt-3">
                    <a
                      className={`btn-default btn-small ${
                        active === "ind" ? "btn-border" : ""
                      }`}
                      href={active === "org" ? "#post-job" : "#upload-cv"}
                    >
                      {active === "org"
                        ? translations.combinedServices.tabs.org.button
                        : translations.combinedServices.tabs.ind.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
