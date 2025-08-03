"use client";
import ClientOnly from "@/components/ClientOnly";
import CirculerProgress from "@/components/common/CirculerProgress";
import Link from "next/link";

export default function Progress({translations}) {

const subtitle = translations.progress.subtitle;
  const title = translations.progress.title;

  const progressDataCirculer = translations.progress.items.map((item, index) => ({
    id: index + 1,
    percent: [80, 90, 70, 95][index], 
    barColor: "#a909ff",
    trackColor: "#0f0f11",
    title: item.title,
    subtitle: item.subtitle,
  }));

  return (
      <div className="rainbow-progressbar-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    {subtitle}
                  </span>
                </h4>
                <h2 className="title w-600 mb--20">

{title}

                </h2>
              </div>
            </div>
          </div>
          <div className="row mt--40">
            <div className="col-lg-10 offset-lg-1">
              <div className="row row--30 mt_dec--30">
                {progressDataCirculer.map((progress) => (
                  <div
                    key={progress.id}
                    className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30"
                  >
                    <div className="radial-progress-single">
                      <CirculerProgress
                        barColor={progress.barColor}
                        tracColor={progress.trackColor}
                        percent={progress.percent}
                      />
                      <Link href={"/services"} className="circle-info">
                        <h4 className="title">{progress.title}</h4>
                        <h6 className="subtitle">{progress.subtitle}</h6>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

