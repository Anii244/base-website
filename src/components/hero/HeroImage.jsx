import heroWoman from "/hero-image-no-white.png";
function HeroImage() {
  return (
    <div
      className="
        absolute
        right-[-20px]
        top-[-10px]
        z-0
        hidden
        w-[600px]
        lg:block
        xl:w-[590px]">
      <img
        src={heroWoman}
        alt="Woman working on laptop"
        className="h-auto w-full"
      />
    </div>
  );
}
export default HeroImage;