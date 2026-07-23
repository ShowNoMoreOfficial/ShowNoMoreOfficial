import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";

/**
 * Chrome for the main marketing site. Everything except standalone landing
 * pages (e.g. /youtube, which lives outside this route group) is wrapped here,
 * so those pages render with no site nav/footer at all — no SSR leak, no flash.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#cc0906] focus:px-4 focus:py-2 focus:text-lg focus:font-medium focus:rounded"
      >
        Skip To Content
      </a>
      <NavBar />
      <div id="main-content">{children}</div>
      <Footer />
      <CookieConsent />
    </>
  );
}
