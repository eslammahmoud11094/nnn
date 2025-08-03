module.exports = {
  siteUrl: "https://talentlyme.com",
  generateRobotsTxt: false,
  sitemapSize: 7000,
  exclude: ["/admin/**"],
  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: path,
        priority: 1.0,
        changefreq: "daily",
      };
    }

    const sectionPaths = [
      "#home",
      "#Why_nexus",
      "#service",
      "#Working_Process",
      "#testimonials",
      "#about",
      "/contact",
    ];

    if (sectionPaths.includes(path)) {
      return {
        loc: `https://talentlyme.com${path}`,
        priority: 0.8,
        changefreq: "weekly",
      };
    }

    return {
      loc: path,
      priority: 0.5,
      changefreq: "monthly",
    };
  },
};
