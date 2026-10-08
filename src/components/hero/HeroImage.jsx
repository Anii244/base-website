import heroWoman from "/hero-image-no-white.png";
function HeroImage() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        right-[-20px]
        top-[-180px]
        z-0
        hidden
        w-[540px]
        sm:block
        md:right-[-25px]
        md:top-[-150px]
        md:w-[620px]
        lg:right-[-15px]
        lg:top-[-175px]
        lg:w-[700px]
        xl:right-[-20px]
        xl:top-[-190px]
        xl:w-[760px] " >
      <img
        src={heroWoman}
        alt="Woman working on laptop"
        className="h-auto w-full"
      />
    </div>
  );
}

export default HeroImage;