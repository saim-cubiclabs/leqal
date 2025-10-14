import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/service";
import Team from "@/components/teams";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
