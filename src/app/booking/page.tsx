import Hero from "./_components/Hero";
import Statement from "./_components/Statement";
import WorkShowcase from "./_components/WorkShowcase";
import Testimonials from "./_components/Testimonials";
import BookingCalendar from "./_components/BookingCalendar";
import Faq from "./_components/Faq";

export const metadata = {
  title: "Book a Call | Show No More",
  description:
    "Partner with ShowNoMore — the creative studio and AI-Content OS behind the web's most ambitious channels. Book a call.",
};

export default function BookingPage() {
  return (
    <div className="bg-[#F5F0E6] text-[#1a1a1a] capitalize">
      <Hero />
      <Statement />
      <WorkShowcase />
      <Testimonials />
      <BookingCalendar />
      <Faq />
    </div>
  );
}
