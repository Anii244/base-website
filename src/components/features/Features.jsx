import { UserRound, Globe, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";
function Features() {
  return (
    <section className="relative z-20 w-full">
      <div
        className="
          mx-auto
          w-full
          max-w-[2000px]
          gap-6
          pb-12
          sm:px-8
          lg:px-10">
        <div
          className="
            mt-40
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-14">
          <FeatureCard
            icon={<UserRound size={25} />}
            color="bg-[#df3f78]"
            title="24/7 Support"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit."/>
          <FeatureCard
            icon={<Globe size={25} />}
            color="bg-[#16b94d]"
            title="Take Ownership"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit."/>
          <FeatureCard
            icon={<Users size={25} />}
            color="bg-[#ed7625]"
            title="Team Work"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit."/>
        </div>
      </div>
    </section>
  );
}
export default Features;