import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative min-h-[560px] sm:min-h-[600px] lg:min-h-[620px]">
        <HeroImage />
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex min-h-[560px] items-center sm:min-h-[600px] lg:min-h-[620px]">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;