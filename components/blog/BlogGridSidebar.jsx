"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";
import { useRouter } from "next/router";

export default function BlogGridSidebar({
  blogPosts3,
  blogPosts4,
  categories,
  title,
  callUs,
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const getFilteredPosts = () => {
    if (activeCategory === "all") return [...blogPosts3, ...blogPosts4];
    if (activeCategory === "inv") return blogPosts3;
    if (activeCategory === "org") return blogPosts4;
    return [];
  };

  const filteredPosts = getFilteredPosts();

  useEffect(() => {
    sal({ once: false, threshold: 0.1 });
    setTimeout(() => {
      sal().reset();
    }, 50);
  }, [activeCategory]);

  const { locale } = useRouter();
  const isRTL = locale === "ar";

  return (
    <div
      className="rainbow-blog-area rainbow-section-gap padd"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="row row--30 reverse-mobile">
          <div className="col-lg-8">
            <div className="row mt_dec--30">
              <div className="col-lg-12">
                <div className="row row--15">
                  {filteredPosts.map((post, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-md-6 col-12 mt--30"
                      data-sal="slide-up"
                      data-sal-duration={700}
                      data-sal-delay={post.salDelay || 0}
                    >
                      <div className="rainbow-card undefined">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link
                              className="image"
                              href={`/services/${post.id}`}
                            >
                              <Image
                                className="w-100"
                                alt={post.alt}
                                src={post.imgSrc}
                                width={390}
                                height={240}
                              />
                            </Link>
                          </div>
                          <div className="content">
                            <ul className="rainbow-meta-list">
                              {post.tags?.map((tag, i) => (
                                <li key={i}>{tag}</li>
                              ))}
                            </ul>
                            <h4 className="title">
                              <Link href={`/services/${post.id}`}>
                                {post.title}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <div className="rainbow-load-more text-center mt--60">
                  <Link href={"/contact"} className="btn btn-default btn-icon">
                    <span>{callUs}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt_md--40 mt_sm--40">
            <aside className="rainbow-sidebar">
              <div className="rbt-single-widget widget_categories mt--40">
                <h3 className="title">{title}</h3>
                <div className="inner">
                  <ul className="category-list">
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className={
                          activeCategory === category.key ? "active" : ""
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveCategory(category.key)}
                      >
                        <span className="left-content">{category.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
