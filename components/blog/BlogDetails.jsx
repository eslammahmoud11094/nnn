"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import Comment from "./Comment";
import { useRouter } from "next/router";

export default function BlogDetails({ blog }) {
  const { locale } = useRouter();
  const isRTL = locale === "ar";

  return (
    <div className="rainbow-blog-details-area">
      <div className="post-page-banner rainbow-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content text-center">
                <div className="page-title">
                  <h1 className="theme-gradient">{blog.title}</h1>
                </div>

                <div className="thumbnail alignwide mt--60">
                  <Image
                    className="w-100 radius"
                    alt="Blog Images"
                    src={blog.imgSrc}
                    width={390}
                    height={240}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="blog-details-content pt--60 rainbow-section-gapBottom"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content">
                <p>{blog.desc}</p>
                {/* <p>{blog.fullDesc}</p> */}

                {blog.fullDesc?.startsWith("*") ? (
                  <ul className="list-disc ps-5 space-y-1">
                    {blog.fullDesc
                      .substring(1) // remove the leading '*'
                      .split("-")
                      .map((point, idx) => (
                        <li key={idx}>{point.trim()}</li>
                      ))}
                  </ul>
                ) : (
                  <p>{blog.fullDesc}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
