import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import BlogsSection from '../components/BlogsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col gap-2.5 items-center px-2.5 pt-12 pb-0 w-full">
      <HeroSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
