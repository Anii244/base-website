import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
function Hero() {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10">
        <div className="relative min-h-[560px]">
          <div className="relative z-10 flex min-h-[560px] items-center">
            <HeroContent />
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
export default Hero;