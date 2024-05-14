import CatProfiles from "../components/CatProfiles";
import HeroSection from "../components/HeroSection";
function Home() {
  return (
    <>
    <HeroSection />
    <h1 className="p-8 text-3xl font-bold">Our Catchonkas</h1>
      <CatProfiles />
    </>
  );
}
export default Home;
