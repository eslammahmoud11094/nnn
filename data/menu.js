export const menuItems = [
  {
    title: "Home",
    href:'/',
  },


   {
    title: " About Us",
    hasDropdown: true,
    submenu: [
    { label: "Who We Are", href: "/about#" },
    { label: "Our Mission", href: "/about/#mission" },
    { label: "Our Vision", href: "/about/#vision" },
    ],
  },
    { title: "About The Founder", href: "/founder" },


   {
    title: "Our Services",
    hasDropdown: true,
    submenu: [
  { label: "Individual Services", href: "/services#" },
   { label: "Organizational Services", href: "/services#" },
    ],
  },


  { title: "Get In Touch", href: "/contact" },
];
