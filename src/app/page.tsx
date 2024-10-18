// app/page.tsx
import Hero from '@/app/components/Hero';
import AboutUs from '@/app/components/AboutUs';
import Services from '@/app/components/Services';
import ContactUs from "@/app/components/ContactUs";


export default function Home() {
  return (
      <div>
        <Hero />
        <AboutUs />
        <Services />
          <ContactUs/>
      </div>
  );
}
