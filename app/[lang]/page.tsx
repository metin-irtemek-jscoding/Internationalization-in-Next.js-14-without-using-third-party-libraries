import Link from "next/link";
import { Locale } from "@/lang/languages";
import { getTranslate } from "@/lang/serverSide";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = getTranslate(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{t["Welcome"]}</div>
      <Link href={`/${lang}/secondpage`}>{t["Go to Second Page"]}</Link>
      <div>{t["This page is the main page"]}</div>
    </main>
  );
}
