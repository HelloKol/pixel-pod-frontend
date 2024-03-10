import { GoogleTagManager } from "@next/third-parties/google";
import { SiteHeader, SiteFooter } from "@/components";

export default function Layout({ children }: any) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <GoogleTagManager gtmId="GTM-MFR4X6H6" />
    </>
  );
}
