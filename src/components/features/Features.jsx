import { UserRound, Globe, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";
function Features() {
  return (
    <section className="relative z-20 max-w-375 mx-auto px-10">
      <div className="grid grid-cols-3 gap-16">
        <FeatureCard
          icon={<UserRound size={26} />}
          color="bg-[#df3f78]"
          title="24/7 Support"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        />
        <FeatureCard
          icon={<Globe size={26} />}
          color="bg-[#16b94d]"
          title="Global Reach"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        />
        <FeatureCard
          icon={<Users size={26} />}
          color="bg-[#ed7625]"
          title="Team Work"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
        />
      </div>
    </section>
  );
}
export default Features;