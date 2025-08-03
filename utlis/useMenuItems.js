"use client";
import en from '@/public/locales/en.json';
import ar from '@/public/locales/ar.json';
import { useLang } from "@/context/LangContext";

export const useMenuItems = () => {
  const { lang } = useLang();
  const t = lang === "ar" ? ar.menu : en.menu;

  return [
    {
      title: t.home,
      href: "/",
    },
    {
      title: t.about,
      hasDropdown: true,
      submenu: [
        { label: t.whoWeAre, href: "/about#" },
        { label: t.founderMessage, href: "/about#founder_message" },
        { label: t.aboutFounder, href: "/about#founder" },
      ],
    },
    {
      title: t.services,
      hasDropdown: true,
      submenu: [
        { label: t.ourServices, href: "/services#services" },
        { label: t.ourProcess, href: "/services#our_process" },
        { label: t.missionVision, href: "about/#mission_vision" },
        { label: t.ourValues, href: "/about#values" },
      ],
    },
    { title: t.contact, href: "/contact" },
  ];
};
