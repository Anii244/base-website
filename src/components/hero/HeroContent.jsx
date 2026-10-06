function HeroContent() {
  return (
    <div className="w-[51%]">
      <h1 className="text-[52px] font-bold leading-[1.15] tracking-[-1.5px] text-[#111827]">
        We specialize in UI/UX, Web
        <br />
        Development, Digital
        <br />
        Marketing.
      </h1>
      <p className="mt-6 max-w-142.5 text-[15px] leading-7 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus consequat
        varius nisi quis, posuere magna.
      </p>
      <div className="flex items-center gap-7 mt-8">
        <button className="bg-[#285bd8] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#1747bf]">
          Get Started Now
        </button>
        <div>
          <p className="font-medium text-[15px] text-gray-700">
            Call us (0123) 456 - 789
          </p>
          <p className="text-sm text-gray-500 mt-1">
            For any question or concern
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeroContent;