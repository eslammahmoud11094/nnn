import React from "react";

export default function Accordions() {
  return (
    <div className="" id="Why_nexus">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div
            className="col-lg-10 offset-lg-1 text-center"
            data-sal="slide-up"
            data-sal-duration={700}
            data-sal-delay={100}
          >
            <h4 className="subtitle">
              <span className="theme-gradient">Talently</span>
            </h4>
            <h2 className="title w-600 mb--20">Our Services & Values</h2>

            <div className="description b1 mb--20">
              Talently isn’t just a boutique HR consultancy—it’s your strategic
              partner in unlocking human potential.
            </div>
            <hr />
          </div>
        </div>

        {/* Accordion Style Wrapper */}
        <div className="row mt--35">
          <div className="col-lg-10 offset-lg-1">
            <div className="rainbow-accordion-style rainbow-accordion-04 accordion">
              <div className="accordion" id="talentlyAccordion">
                {/* Values Accordion Item */}
                <div className="accordion-item card">
                  <h2
                    className="accordion-header card-header"
                    id="headingValues"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseValues"
                      aria-expanded="true"
                      aria-controls="collapseValues"
                    >
                      Our Values
                    </button>
                  </h2>
                  <div
                    id="collapseValues"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingValues"
                    data-bs-parent="#talentlyAccordion"
                  >
                    <div className="accordion-body card-body">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <strong>People First:</strong> We put people at the
                          heart of everything — from strategy to implementation.
                        </li>
                        <li>
                          <strong>Integrity:</strong> We uphold honesty,
                          transparency, and respect in all our interactions.
                        </li>
                        <li>
                          <strong>Excellence:</strong> We deliver with care,
                          precision, and a commitment to quality.
                        </li>
                        <li>
                          <strong>Innovation:</strong> We constantly seek new
                          ways to solve old problems, creatively and
                          practically.
                        </li>
                        <li>
                          <strong>Collaboration:</strong> We build partnerships
                          based on trust, shared goals, and open communication.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Services Accordion Item */}
                <div className="accordion-item card">
                  <h2
                    className="accordion-header card-header"
                    id="headingServices"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseServices"
                      aria-expanded="false"
                      aria-controls="collapseServices"
                    >
                      Our Services
                    </button>
                  </h2>
                  <div
                    id="collapseServices"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingServices"
                    data-bs-parent="#talentlyAccordion"
                  >
                    <div className="accordion-body card-body">
                      <h5 className="mb-3">Organizational Services</h5>
                      <ul className="list-unstyled">
                        {/* <li><strong>Strategic HR Consulting:</strong> HR audits, culture design, engagement strategy, and policy development.</li> */}
                        <li>
                          <strong>Recruitment & Talent Acquisition:</strong>{" "}
                          Sourcing, shortlisting, employer branding, and
                          onboarding planning.
                        </li>
                        <li>
                          <strong>Employee Experience Design:</strong> Employee
                          experience mapping, performance systems, feedback
                          design, retention programs.
                        </li>
                        <li>
                          <strong>Leadership Development:</strong> Coaching,
                          leadership training, performance reviews, succession
                          planning.
                        </li>
                        <li>
                          <strong>Wellbeing & Inclusion:</strong> Mental health
                          programs, diversity strategy, and workplace wellness.
                        </li>
                        <li>
                          <strong>Emiratization & Nationalization:</strong>{" "}
                          Advisory on UAE compliance and building effective
                          Emirati workforce plans.
                        </li>
                      </ul>

                      <h5 className="mt-4 mb-3">Individual Services</h5>
                      <ul className="list-unstyled">
                        <li>
                          <strong>Career Coaching & Advisory:</strong>{" "}
                          Supporting professionals in navigating workplace
                          challenges, improving communication, and building
                          stronger professional relationships.
                        </li>
                        <li>
                          <strong>Interview Preparation:</strong> Providing mock
                          interview sessions with real-time feedback and
                          guidance on answering interview questions to help
                          candidates perform with confidence and clarity.
                        </li>
                        <li>
                          <strong>CV Review and Enhancement:</strong> Review and
                          improve CV to reflect strengths, align with goals, and
                          stand out to employers.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-10 offset-lg-1 text-center"
            data-sal="slide-up"
            data-sal-duration={700}
            data-sal-delay={100}
          >
            <div className="description b1 mt--35">
              Whether you’re a company shaping a people-first culture or a
              professional charting your career path, we partner with you every
              step of the way.
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// export default function Accordions() {
//   return (
//     <div className="main-content" id="Why_nexus">

//       {/* Start Accordion-4 Area  */}
//       <div className="rainbow-accordion-area rainbow-section-gap">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-10 offset-lg-1">
//               <div
//                 className="section-title text-center"
//                 data-sal="slide-up"
//                 data-sal-duration={700}
//                 data-sal-delay={100}
//               >
//                 <h4 className="subtitle">
//                   <span className="theme-gradient">Talently</span>
//                 </h4>
//                 <h2 className="title w-600 mb--20">Our Values ?</h2>
//                 <div className="description b1 ">
// Talently isn’t just a boutique HR consultancy—it’s your strategic partner in unlocking human potential.
//               </div>
//             </div>
// <hr />
// <br />
//                 <div className="description b1 text-center">
// Whether you’re a company shaping a people-first culture or a professional charting your career path, we partner with you every step of the way                           </div>
//               </div>

//           </div>
//           <div className="row mt--35 row--20">
//             <div className="col-lg-10 offset-lg-1">
//               <div className="rainbow-accordion-style rainbow-accordion-04 accordion">
//                 <div className="accordion" id="accordionExampled">
//                   <div className="accordion-item card">
//                     <h2
//                       className="accordion-header card-header"
//                       id="headingFive"
//                     >
//                       <button
//                         className="accordion-button"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseFive"
//                         aria-expanded="true"
//                         aria-controls="collapseFive"
//                       >
// People-First Approach
//                       </button>
//                     </h2>
//                     <div
//                       id="collapseFive"
//                       className="accordion-collapse collapse show"
//                       aria-labelledby="headingFive"
//                       data-bs-parent="#accordionExampled"
//                     >
//                       <div className="accordion-body card-body">
// We put people at the heart of everything — from strategy to implementation.
//                                   </div>
//                     </div>
//                   </div>
//                   <div className="accordion-item card">
//                     <h2
//                       className="accordion-header card-header"
//                       id="headingSix"
//                     >
//                       <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseSix"
//                         aria-expanded="false"
//                         aria-controls="collapseSix"
//                       >
//                         Integrity
//                       </button>
//                     </h2>
//                     <div
//                       id="collapseSix"
//                       className="accordion-collapse collapse"
//                       aria-labelledby="headingSix"
//                       data-bs-parent="#accordionExampled"
//                     >
//                       <div className="accordion-body card-body">
// We  uphold honesty, transparency, and respect in all our interactions.

//                                             </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item card">
//                     <h2
//                       className="accordion-header card-header"
//                       id="headingSeven"
//                     >
//                       <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseSeven"
//                         aria-expanded="false"
//                         aria-controls="collapseSeven"
//                       >
// 	Excellence
//                         </button>
//                     </h2>
//                     <div
//                       id="collapseSeven"
//                       className="accordion-collapse collapse"
//                       aria-labelledby="headingSeven"
//                       data-bs-parent="#accordionExampled"
//                     >
//                       <div className="accordion-body card-body">
//                      We deliver with care, precision, and a commitment to quality.
//                                     </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item card">
//                     <h2
//                       className="accordion-header card-header"
//                       id="headingSeven"
//                     >
//                       <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#collapseSeven"
//                         aria-expanded="false"
//                         aria-controls="collapseSeven"
//                       >
// 	Innovation
//                         </button>
//                     </h2>
//                     <div
//                       id="collapseSeven"
//                       className="accordion-collapse collapse"
//                       aria-labelledby="headingSeven"
//                       data-bs-parent="#accordionExampled"
//                     >
//                       <div className="accordion-body card-body">
// We constantly seek new ways to solve old problems,creatively and practically.
//                                     </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Accordion-4 Area  */}
//     </div>
//   );
// }
