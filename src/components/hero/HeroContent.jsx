function HeroContent() {
  return (
    <div className="w-full max-w-[550px]">

      <h1
        className="
          text-4xl
          font-bold
          leading-[1.15]
          tracking-tight
          text-[#111827]
          sm:text-5xl
          lg:text-[50px]
        "
      >
        We specialize in UI/UX, Web Development, Digital Marketing.
      </h1>

      <p
        className="
          mt-5
          max-w-[520px]
          text-[14px]
          leading-6
          text-gray-500
        "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
        consequat varius nisi quis, posuere magna.
      </p>

      <div className="mt-7 flex items-center gap-6">

        <button
          className="
            rounded-full
            bg-[#285bd8]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#1747bf]
          "
        >
          Get Started Now
        </button>

        <div>
          <p className="text-sm font-medium text-gray-700">
            Call us (0123) 456 - 789
          </p>

          <p className="mt-1 text-xs text-gray-500">
            For any question or concern
          </p>
        </div>

      </div>

    </div>
  );
}

export default HeroContent;