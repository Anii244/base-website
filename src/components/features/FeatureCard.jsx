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
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          text-white
          sm:h-16
          sm:w-16
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
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            max-w-xs
            text-sm
            leading-6
            text-gray-500
            dark:text-amber-100
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
export default FeatureCard;