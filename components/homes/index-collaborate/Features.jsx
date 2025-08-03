"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Features({ translations }) {
  const [isOpen, setOpen] = useState(false);
    const { locale } = useRouter();
  const isRTL = locale === 'ar';


  return (
    <>
      {/* فاصل */}
      <div className="rbt-separator-mid" >
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="slider-area rainbow-section-gap" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">{translations.mission.title}</h3>
                <p className="description">{translations.mission.p}</p>
                <div className="button-group">
                  <a
                  dir={isRTL ? 'rtl' : 'ltr'}
                    className="btn-collaborate-play popup-video"
                    onClick={() => setOpen(true)}
                  >
                    <i className="feather-play" />
                    <span>{translations.mission.btn}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <Image
                  alt="Our Mission"
                  src="/assets/images/about/Our-Mission.jpg"
                  width={531}
                  height={472}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* فاصل */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* Vision Section */}
      <div id="vision" className="slider-area rainbow-section-gap" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <Image
                  alt="Our Vision"
                  src="/assets/images/about/Our-Vision.jpg"
                  width={543}
                  height={641}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">{translations.vision.title}</h3>
                <p className="description">{translations.vision.p}</p>
                <div className="button-group">
                  <a
                  dir={isRTL ? 'rtl' : 'ltr'}
                    className="btn-collaborate-play popup-video"
                    onClick={() => setOpen(true)}
                  >
                    <i className="feather-play" />
                    <span>{translations.vision.btn}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="tj9-MGHCs38"
        onClose={() => setOpen(false)}
      />
    </>
  );
}