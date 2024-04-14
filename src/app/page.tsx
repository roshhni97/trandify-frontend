import Navbar from "@/components/common/NavbarHome";
import HeroSection from "@/components/home/hero";

const Home = () => {
  return (
    <div className="max-w-[90rem] m-auto p-4">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
