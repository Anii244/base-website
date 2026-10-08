function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        w-full
        max-w-[650px]
        py-12
        sm:max-w-[580px]
        lg:max-w-[610px]
        xl:max-w-[650px]">
      <h1
        className="
          max-w-[650px]
          text-[36px]
          font-bold
          leading-[1.15]
          tracking-tight
          text-[#111827]
          dark:text-white
          sm:text-[42px]
          md:text-[46px]
          lg:text-[50px]
          xl:text-[54px]">
        We specialize in UI/UX, Web Development, Digital Marketing.
      </h1>
      <p
        className="
          mt-6
          max-w-[540px]
          text-[15px]
          leading-[1.8]
          text-gray-500
          dark:text-amber-100
          sm:text-base
          lg:text-[16px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
        consequat varius nisi quis, posuere magna.
      </p>
      <div
        className="
          mt-8
          flex
          flex-col
          items-start
          gap-5
          sm:flex-row
          sm:items-center
          sm:gap-7
          lg:gap-8">
        <button
          className="
            whitespace-nowrap
            rounded-full
            bg-[#285bd8]
            px-7
            py-4
            text-[14px]
            font-semibold
            text-white
            transition
            hover:bg-[#1747bf]
            dark:bg-amber-500
            dark:text-gray-900
            dark:hover:bg-amber-400 " >
          Get Started Now
        </button>
        <div>
          <p
            className="
              whitespace-nowrap
              text-[14px]
              font-semibold
              text-gray-700
              dark:text-amber-100
              sm:text-[15px] ">
            Call us (0123) 456 - 789
          </p>
          <p
            className="
              mt-1
              text-[13px]
              text-gray-500
              dark:text-amber-200
              sm:text-sm
            " >
            For any question or concern
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeroContent;