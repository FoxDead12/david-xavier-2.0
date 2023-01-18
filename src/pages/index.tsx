import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Formations from "@/components/Formations";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import { HeadPage } from "@/components/Head";

export default function Home() {

  const {locale, locales, push} = useRouter();
  const {t: translate} = useTranslation('common')

  
  const changeLocal = (l: string) => {
    push('/', undefined, {locale: l});
  }

  return (
    <>
    <HeadPage title={translate("title")} description={translate("about.description")}/>
    <div className="relative flex flex-col bg-gray-50 z-0">
      <Header t={translate} locale={locale || ""} locales={locales || []} changeLocal={changeLocal} />
      <Hero t={translate}/>
      <About t={translate} />
      <Formations t={translate} locale={locale || ""}/>
      <Experiences t={translate} locale={locale || ""}/>
      <Footer t={translate} />
    </div>
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  }
}