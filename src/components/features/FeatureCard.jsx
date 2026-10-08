function FeatureCard({ icon, color, title, description }) {
  return (
    <div className="flex items-start gap-4 sm:gap-5 lg:gap-6 ml-28">
      <div
        className={`
          flex
          h-50
          w-50
          shrink-0
          items-center
          justify-center
          rounded-full
          text-white
          sm:h-16
          sm:w-16
          ${color}
        `}>
        {icon}
      </div>
      <div>
        <h3 className="text-[32px] font-bold text-gray-800 sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 max-w-xs text-[18px] leading-6 text-gray-500 sm:mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}
export default FeatureCard;