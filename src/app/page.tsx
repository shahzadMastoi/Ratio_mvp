import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import CourseTimeline from '@/components/CourseTimeline';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <div className="pt-20">
        <Hero />
        
        <section id="solutions" className="scroll-mt-20">
          <ProblemSolution />
        </section>
        
        <section id="approach" className="scroll-mt-20">
          <CourseTimeline />
        </section>
        
        <CapabilitiesGrid />
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
