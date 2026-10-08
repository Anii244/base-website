import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
function Hero() {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-[1600px] sm:px-8 lg:px-10">
        <div className="relative min-h-140">
          <div className="relative z-10 flex min-h-140 items-center">
            <HeroContent />
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
export default Hero;