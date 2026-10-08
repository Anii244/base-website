function HeroContent() {
  return (
    <div className="w-full max-w-187.5">
      <h1
        className="
          text-[62px]
          font-bold
          leading-[1.4]
          tracking-tight
          text-[#111827]
          dark:bg-grey-700
          dark:text-white
          sm:text-5xl
          lg:text-[50px]"> We specialize in UI/UX, Web Development, Digital Marketing.
      </h1>
      <p
        className="
          mt-6
          mb-6
          max-w-162.5
          text-[20px]
          dark:text-amber-100
          leading-[1.7]
          text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
        consequat varius nisi quis, posuere magna.
      </p>
      <div className="mt-7 w-full flex items-center gap-24">
        <button
          className="
            mt-4
            ml-24
            rounded-full
            bg-[#285bd8]
            px-12
            py-6
            mb-auto
            text-20px
            font-semibold
            text-white
            dark:bg-gray-900
            dark:text-blue-300
            transition
            hover:bg-[#1747bf]">
          Get Started Now
        </button>
        <div>
          <p className="mt-4 text-[20px] font-bold text-gray-700 dark:text-blue-300">
            Call us (0123) 456 - 789
          </p>
          <p className="mt-1 text-[18px] text-gray-500 dark:text-amber-200">
            For any question or concern
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeroContent;