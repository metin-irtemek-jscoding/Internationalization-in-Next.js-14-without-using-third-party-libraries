import Link from "next/link";
import { Locale } from "@/lang/languages";
import { getTranslate } from "@/lang/serverSide";
import ClientSideComponent from "@/components/clientSideComponent";

export default function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = getTranslate(lang);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border border-slate-600">
        <ClientSideComponent />
      </div>
      <Link href={`/${lang}`}>{t["Go to Main Page"]}</Link>
      <div>{t["This page is the second page"]}</div>
    </div>
  );
}
