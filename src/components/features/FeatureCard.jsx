function FeatureCard({
  icon,
  color,
  title,
  description,
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-5">
      <div
        className={`
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-full
          text-white
          sm:h-18
          sm:w-18
          ${color}
        `}
      >
        {icon}
      </div>
      <div>
        <h3
          className="
            text-xl
            font-bold
            text-gray-800
            dark:text-white 
            sm:text-xl
            md:text-2xl
            lg:text-2xl
            xl:text-3xl" >
          {title}
        </h3>
        <p
          className="
            mt-2
            max-w-xs
            text-sm
            leading-6
            text-gray-500
            dark:text-zinc-400
            sm:text-sm
            md:text-sm
            lg:text-md
            xl:text-lg" >
          {description}
        </p>
      </div>
    </div>
  );
}
export default FeatureCard;