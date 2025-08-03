"use client";

import { NextArrow, PrevArrow } from "@/components/common/SliderArrows";
import Link from "next/link";
import Slider from "react-slick";

export default function Hero({ translations }) {
  const options = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
  };

  const sliderData = [
    {
      id: 1,
      bgImageClass: "bg_image--1",
      title: translations.hero.slides[0].title,
      description: translations.hero.slides[0].description,
    },
    {
      id: 2,
      bgImageClass: "bg_image--2",
      title: translations.hero.slides[1].title,
      description: translations.hero.slides[1].description,
    },
    {
      id: 3,
      bgImageClass: "bg_image--3",
      title: translations.hero.slides[2].title,
      description: translations.hero.slides[2].description,
    },
    {
      id: 4,
      bgImageClass: "bg_image--4",
      title: translations.hero.slides[3].title,
      description: translations.hero.slides[3].description,
    },
    {
      id: 5,
      bgImageClass: "bg_image--1",
      title: translations.hero.slides[4].title,
      description: translations.hero.slides[4].description,
    },
  ];

  return (
    <Slider
      {...options}
      className="slider-area slider-style-4 variation-2 slider-activation slider-dot rainbow-slick-dot rainbow-slick-arrow"
    >
      {sliderData.map((slider) => (
        <div
          key={slider.id}
          className={`height-950 bg-overlay ${slider.bgImageClass} d-flex align-items-center`}
          data-black-overlay={5}
        >
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="col-12">
                <div className="inner text-center">
                  <h3 className="title">
                    {slider.title.split("\n")[0]}
                    <br />
                    {slider.title.split("\n")[1]}
                  </h3>
                  <p className="description">
                    {slider.description.split("\n")[0]}
                    <br />
                    {slider.description.split("\n")[1]}
                  </p>
                  <div className="button-group mt--30">
                    <Link
                      className="btn-default btn-large round"
                      href="/contact"
                    >
                      {translations.hero.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

// "use client";

// import { NextArrow, PrevArrow } from "@/components/common/SliderArrows";
// import Link from "next/link";
// import { useTranslation } from "react-i18next";
// import Slider from "react-slick";

// export default function Hero() {
//   const options = {
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     arrows: true,
//     // adaptiveHeight: true,
//     cssEase: "linear",
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   const { t } = useTranslation("common");

//   const sliderData = [
//     {
//       id: 1,
//       bgImageClass: "bg_image--1",
//       title: t("hero.slides.0.title"),
//       description: t("hero.slides.0.description"),
//     },
//     {
//       id: 2,
//       bgImageClass: "bg_image--2",
//       title: t("hero.slides.1.title"),
//       description: t("hero.slides.1.description"),
//     },
//     {
//       id: 3,
//       bgImageClass: "bg_image--3",
//       title: t("hero.slides.2.title"),
//       description: t("hero.slides.2.description"),
//     },
//     {
//       id: 4,
//       bgImageClass: "bg_image--4",
//       title: t("hero.slides.3.title"),
//       description: t("hero.slides.3.description"),
//     },
//   ];

//   return (
//     <Slider
//         autoplay
//       {...options}
//       className="slider-area slider-style-4 variation-2 slider-activation slider-dot rainbow-slick-dot rainbow-slick-arrow"
//     >
//       {sliderData.map((slider) => (
//         <div
//           key={slider.id}
//           className={`height-950 bg-overlay ${slider.bgImageClass} d-flex align-items-center`}
//           data-black-overlay={5}
//         >
//           <div className="container">
//             <div className="row row--30 align-items-center">
//               <div className="col-12">
//                 <div className="inner text-center">
//                   <h1 className="title">
//                     {slider.title.split("\n")[0]}

//                     <br />
//                     {slider.title.split("\n")[1]}
//                   </h1>
//                   <p className="description">
//                     {slider.description.split("\n")[0]}
//                     <br />
//                     {slider.description.split("\n")[1]}
//                   </p>
//                   <div className="button-group mt--30">
//                     <Link className="btn-default btn-large round" href="/contact">
//                       {t('hero.cta')}
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// }
