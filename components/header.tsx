"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";

import { Locale } from "@/lang/languages";

export default function Header({ lang }: { lang: Locale }) {
  const router = useRouter();

  useEffect(() => {
    if (getCookie("lang") !== lang) {
      setCookie("lang", lang);
      router.refresh();
    }
  }, [lang]);

  const handleLangChange = (lang: Locale) => {
    const getUrl: string =
      (typeof window !== "undefined" &&
        `${window.location.pathname}${window?.location.search}`) ||
      "";
    const tempUrl: string = getUrl.slice(3);
    router.push(`/${lang}${tempUrl}`);
  };

  return (
    <div className="flex justify-between p-6">
      <div className="text-xl">Logo</div>
      <div className="flex flex-row">
        <div
          className="cursor-pointer text-blue-600"
          onClick={() => handleLangChange("en")}
        >
          En
        </div>
        <div className="text-gray-500 mx-6">|</div>
        <div
          className="cursor-pointer text-blue-600"
          onClick={() => handleLangChange("de")}
        >
          De
        </div>
      </div>
    </div>
  );
}
