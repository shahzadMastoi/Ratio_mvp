import Navbar from '@/components/Navbar';
import InstructorBio from '@/components/InstructorBio';
import Footer from '@/components/Footer';

export default function InstructorsPage() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <div className="pt-20">
        <InstructorBio />
      </div>
      <Footer />
    </main>
  );
}
