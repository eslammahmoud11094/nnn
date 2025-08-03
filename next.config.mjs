/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localePath: "./public/locales",
  },
  images: {
    unoptimized: true,
    domains: [
      "talently-v0.vercel.app", // بدون https://
      "tse4.mm.bing.net",
      "tse3.mm.bing.net",
      "tse2.mm.bing.net",
    ],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     i18n: {
//     locales: ['en', 'ar'],
//     defaultLocale: 'en',

//   },
//   images: {
//     unoptimized: true,

//     domains: [
//       "https://talentlyme.com/",
//       "tse4.mm.bing.net",
//       "tse3.mm.bing.net",
//       "tse2.mm.bing.net",
//     ],

//   },
// };

// export default nextConfig;
