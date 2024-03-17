"use client";
import React from "react";

import { getTranslate, getLang } from "@/lang/clientSide";

export default function ClientSideComponent() {
  const lang = getLang();
  const t = getTranslate(lang);
  return <div className="p-6">{t["This component works client side"]}</div>;
}
