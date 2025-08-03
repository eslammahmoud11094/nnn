"use client";
import React from "react";
import Link from "next/link";
import { blogPosts, blogPosts2, blogPosts3, blogPosts4, categories } from "@/data/blogs";


export default function Sidebar() {
  return (
    <aside className="rainbow-sidebar">
      <div className="rbt-single-widget widget_search mt--40">
        <div className="inner">
          <form className="blog-search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" required placeholder="Search ..." />
            <button className="search-button">
              <i className="feather-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="rbt-single-widget widget_categories mt--40">
        <h3 className="title">Our Sevices</h3>
        <div className="inner">
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`/blog-grid/category/${category}`}>
                  <span className="left-content">{category}</span>
                  <span className="count-text">
                    {
                      blogPosts2.filter((elm) =>
                        elm.categories.includes(category)
                      ).length
                    }
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rbt-single-widget widget_recent_entries mt--40">
        <h3 className="title">Individual Services</h3>
        <div className="inner">
          <ul>
            {blogPosts3.slice(0, 4).map((elm, i) => (
              <li key={i}>
                <Link className="d-block" href={`/blog-details/${elm.id}`}>
                  {elm.title}
                </Link>
                <span className="cate">{elm.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
   <div className="rbt-single-widget widget_recent_entries mt--40">
        <h3 className="title">Organizational Services</h3>
        <div className="inner">
          <ul>
            {blogPosts4.slice(0, 4).map((elm, i) => (
              <li key={i}>
                <Link className="d-block" href={`/blog-details/${elm.id}`}>
                  {elm.title}
                </Link>
                <span className="cate">{elm.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
 
    </aside>
  );
}
