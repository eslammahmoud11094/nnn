"use client";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useRouter } from "next/router";

export default function Blogs({translations}) {
  const {locale} =useRouter()
  const blogPosts = translations.values.items.map((item, index) => ({
    ...item,
  imgSrc: item.img,
    alt: "card Images",
    salDelay: index * 100,
  }));


  const options = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // adaptiveHeight: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="values" className="rainbow-blog-grid-area mt--80 mb--80"  >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4 className="title mb--0">{translations.values.sectionTitle}</h4>
            </div>
          </div>
        </div>
        <Slider
  rtl={locale === 'ar'}

        autoplay
          {...options}
          className="blog-carousel-activation rainbow-slick-dot slick-grid-15 mb--60 mt_dec--30 gx-5"
        >
          {blogPosts.map((elm, i) => (
            <div key={i} className="slide-single-layout mt--30">
              <div className="rainbow-card box-card-style-default">
                <div className="inner">
                  <div className="thumbnail">
                      <Image
                        className="w-100"
                        alt="Blog Image"
                        src={elm.imgSrc}
                        width={390}
                        height={240}
                      />
                  </div>
<div className={`content`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                   
                    <h4 className="title">
                     {elm.title}
                    </h4>

                    <p>{elm.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
