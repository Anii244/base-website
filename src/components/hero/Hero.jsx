import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
function Hero() {
  return (
    <section className="relative h-150 overflow-hidden">
      <HeroImage />
      <div className="relative z-10 max-w-375 mx-auto px-10 pt-26.25">
        <HeroContent />
      </div>
    </section>
  );
}
export default Hero;