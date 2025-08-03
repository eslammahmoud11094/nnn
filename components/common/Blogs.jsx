import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";
export default function Blogs() {
  return (
    <div className="blog-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={400}
              data-sal-delay={100}
            >
         
              <h2 className="title w-600 mb--20">Industries</h2>
              {/* <p className="description b1">
                We provide company and finance service for <br />
                startups and company business.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row row--15">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12 col-12 mt--30"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={post.salDelay}
            >
              <div className="rainbow-card box-card-style-default">
                <div className="inner">
                  <div className="thumbnail">
                      <Image
                        className="w-100"
                        alt={post.alt}
                        src={post.imgSrc}
                        width={390}
                        height={240}
                      />
                  </div>
                  <div className="content">
            
                    <h4 className="title">
                        {post.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
