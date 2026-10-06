function HeroImage() {
  return (
    <div
      className="
        absolute
        -top-30
        right-0
        w-[52%]
        h-175
        bg-[#123ed3]
        rounded-bl-[50%]
        rounded-tl-[35%]
      "
    >
      <div
        className="
          absolute
          right-[9%]
          top-30
          w-107.5
          h-97.5
          rounded-[50%]
          overflow-hidden
        "
      >
        <img
          src="/hero-image-no-white.png"
          alt="Woman working on laptop"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
export default HeroImage;