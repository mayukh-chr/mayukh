import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import BlogsSection from '../components/BlogsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col gap-2.5 items-center px-2.5 pt-12 pb-0 w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogsSection />
      <Footer />
    </div>
  );
}
