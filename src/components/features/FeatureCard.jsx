function FeatureCard({ icon, color, title, description }) {
  return (
    <div className="flex items-start gap-6">
      <div
        className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-white text-2xl shrink-0`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-500 max-w-65">
          {description}
        </p>
      </div>
    </div>
  );
}
export default FeatureCard;