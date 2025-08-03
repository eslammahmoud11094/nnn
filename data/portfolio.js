export const portfolios = [
  {
    id: 1,
    categories: "cat--1 cat--4",
    title: "Talent Development Program",
    subtitle: "Tailored growth plans for high-potential employees.",
    imgSrc: "assets/images/services/Talent.jpg",
    altText: "Talent Development Program",
  },
  {
    id: 2,
    categories: "cat--2 cat--3",
    title: "Employee Experience Redesign",
    subtitle: "Mapping to improve engagement & retention.",
    imgSrc: "/assets/images/services/Employee.jpg",
    altText: "Employee Experience Redesign",
  },
  {
    id: 3,
    categories: "cat--3 cat--2 cat--1",
    title: "Leadership Coaching Initiative",
    subtitle: "One‑on‑one coaching for emerging leaders.",
    imgSrc: "/assets/images/services/Leadership.jpg",
    altText: "Leadership Coaching Initiative",
  },
  {
    id: 4,
    categories: "cat--4",
    title: "Strategic HR Planning",
    subtitle: "Data‑driven HR strategy & culture building.",
    imgSrc: "/assets/images/services/Strategic.jpg",
    altText: "Strategic HR Planning",
  },
];
export const portfolioItems = [
  {
    id: 7,
    category: "cat--1 cat--4",
    imageSrc: "/assets/images/portfolio/portfolio-01.jpg",
    alt: "Portfolio-01",
  },
  {
    id: 8,
    category: "cat--2 cat--3",
    imageSrc: "/assets/images/portfolio/portfolio-02.jpg",
    alt: "Portfolio-02",
  },
  {
    id: 9,
    category: "cat--3 cat--4 cat--1",
    imageSrc: "/assets/images/portfolio/portfolio-03.jpg",
    alt: "Portfolio-03",
  },
  {
    id: 10,
    category: "cat--3 cat--2",
    imageSrc: "/assets/images/portfolio/portfolio-04.jpg",
    alt: "Portfolio-04",
  },
  {
    id: 11,
    category: "cat--2 cat--4",
    imageSrc: "/assets/images/portfolio/portfolio-05.jpg",
    alt: "Portfolio-05",
  },
  {
    id: 12,
    category: "cat--3 cat--2 cat--1",
    imageSrc: "/assets/images/portfolio/portfolio-06.jpg",
    alt: "Portfolio-06",
  },
  {
    id: 13,
    category: "cat--4",
    imageSrc: "/assets/images/portfolio/portfolio-02.jpg",
    alt: "Portfolio-02",
  },
  {
    id: 14,
    category: "cat--4 cat--2",
    imageSrc: "/assets/images/portfolio/portfolio-01.jpg",
    alt: "Portfolio-01",
  },
  {
    id: 15,
    category: "cat--1 cat--4",
    imageSrc: "/assets/images/portfolio/portfolio-01.jpg",
    alt: "Portfolio-01",
  },
  {
    id: 16,
    category: "cat--2 cat--3",
    imageSrc: "/assets/images/portfolio/portfolio-02.jpg",
    alt: "Portfolio-02",
  },
  {
    id: 17,
    category: "cat--3 cat--4 cat--1",
    imageSrc: "/assets/images/portfolio/portfolio-03.jpg",
    alt: "Portfolio-03",
  },
  {
    id: 18,
    category: "cat--3 cat--2",
    imageSrc: "/assets/images/portfolio/portfolio-04.jpg",
    alt: "Portfolio-04",
  },
];

export const allPortfolios = [...portfolios, ...portfolioItems];

export const filterButtons = [
  { filter: "*", label: "All" },
  { filter: ".cat--1", label: "Strategy" },
  { filter: ".cat--2", label: "People & Culture" },
  { filter: ".cat--3", label: "Coaching" },
  { filter: ".cat--4", label: "Programs" },
];
