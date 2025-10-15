import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/service";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <Services />
    
      <Contact />
      <Footer />
    </main>
  );
}
