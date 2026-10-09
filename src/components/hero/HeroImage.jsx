import heroWoman from "/hero-image.png";
function HeroImage() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        right-[-20px]
        top-[-120px]
        z-0
        hidden
        w-[1000px]
        sm:block
        md:right-[-25px]
        md:top-[-150px]
        md:w-[800px]
        lg:right-[-15px]
        lg:top-[-120px]
        lg:w-[1000px]
        xl:right-[-20px]
        xl:top-[-135px]
        xl:w-[1300px] " >
      <img
        src={heroWoman}
        alt="Woman working on laptop"
        className="h-auto w-full"
      />
    </div>
  );
}

export default HeroImage;