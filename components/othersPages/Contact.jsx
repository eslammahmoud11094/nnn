"use client";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Contact({ contactT }) {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const emailPromise = fetch("/api/send-email", {
      method: "POST",
      body: formData,
    }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong");
      formRef.current.reset();
      return "Your message has been successfully sent. We will contact you soon.";
    });

    toast.promise(emailPromise, {
      loading: "Sending your message...",
      success: (message) => message,
      error: (err) =>
        err.message || "Failed to send the message. Please try again later.",
    });
  };

  const { locale } = useRouter();
  const isRTL = locale === "ar";

  return (
    <div className="main-content" dir={isRTL ? "rtl" : "ltr"}>
      <div className="rainbow-contact-area mt--40">
        <div className="container">
          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rainbow-contact-address mt_dec--30">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-clock" />
                      </div>
                      <div className="inner">
                        <h4 className="title">{contactT.working.title}</h4>
                        <p>{contactT.working.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-mail" />
                      </div>
                      <div className="inner">
                        <h4 className="title">{contactT.email.title}</h4>
                        <p>
                          <a href="mailto:admin@gmail.com">
                            info@talentlyme.com
                          </a>
                        </p>
              
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="rainbow-address">
                      <div className="icon">
                        <i className="feather-map-pin" />
                      </div>
                      <div className="inner">
                        <h4 className="title">{contactT.location.title}</h4>
                        <p>{contactT.location.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<div className="row mt--20">
  <div className="col-lg-12 text-center">
    <div className="rainbow-address">
      <h4 className="title">اتصل بنا</h4>
      <p>
        <i className="feather-phone" style={{ marginRight: "5px" }} />
        اتصال: 02 564 5737 | موبايل: 050 511 02 51
      </p>
    </div>
  </div>
</div>
          <div className="row mt--80">
            <div className="col-lg-12 mb--40">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">{contactT.form.title}</span>
                </h4>
                <h2 className="title w-600 mb--20">{contactT.form.subtitle}</h2>
              </div>
            </div>
          </div>
          <div className="row mt--40 row--15">
            <div className="col-lg-7">
              <form
                ref={formRef}
                className="contact-form-1 rainbow-dynamic-form"
                onSubmit={sendEmail}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    placeholder={contactT.form.name}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-phone"
                    id="contact-phone"
                    placeholder={contactT.form.phone}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact-email"
                    name="contact-email"
                    placeholder={contactT.form.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    placeholder={contactT.form.message}
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn-default btn-large rainbow-btn"
                  >
                    <span>{contactT.form.send}</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-5 mt_md--30 mt_sm--30">
              <div className="google-map-style-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9075811381794!2d54.3427952!3d24.4758728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e655ce9556a71%3A0xd1f6741d62c10b27!2sAl%20Sawari%20Tower%20B!5e0!3m2!1sen!2seg!4v1720253287596!5m2!1sen!2seg"
                  width={600}
                  height={550}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
