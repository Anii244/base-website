function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        w-full
        max-w-[600px]
        py-12
        sm:max-w-[580px]
        lg:max-w-[610px]
        xl:max-w-[850px]">
      <h1
        className="
          max-w-[850px]
          text-[36px]
          font-bold
          leading-[1.15]
          tracking-tight
          text-[#111827]
          dark:text-gray-100
          sm:text-[42px]
          md:text-[46px]
          lg:text-[48px]
          xl:text-[76px]">
        We specialize in UI/UX, Web Development, Digital Marketing.
      </h1>
      <p
        className="
          mt-4
          max-w-[800px]
          text-[18px]
          leading-[1.8]
          text-gray-500
          dark:text-zinc-400
          sm:text-base
          md:text-[18px]
          lg:text-[23px] ">
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
            px-10
            py-5
            text-[14px]
            font-semibold
            text-white
            sm:px-7, py-4
            lg:px-12,py-6
            transition
            hover:bg-[#1747bf]
            dark:hover:bg-amber-500" >
          Get Started Now
        </button>
        <div>
          <p
            className="
              whitespace-nowrap
              text-[14px]
              font-semibold
              dark:text-gray-200
              dark:text-amber-100
              sm:text-[20px] ">
            Call us (0123) 456 - 789
          </p>
          <p
            className="
              mt-1
              text-[13px]
              text-gray-400
              dark:text-gray-500
              dark:text-amber-200
              sm:text-lg
            " >
            For any question or concern
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeroContent;