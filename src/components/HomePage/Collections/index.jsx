// Components
import SectionTitle from "../../Common/SectionTitle";
import Button from "../Button";
import Image from "./Image";

const Collections = () => {
  return (
    <section className="space-y-10">
      <SectionTitle title="Explore Collections" />
      <div className="flex flex-row gap-10">
        <div className="space-y-10">
          <Image image="1" />
          <div className="flex flex-row gap-10">
            <Image image="2" />
            <div className="space-y-10 flex flex-col gap-0.5">
              <Image image="3" />
              <Button section="collections" title="See All Collections" />
            </div>
          </div>
        </div>
        <Image image="4" />
      </div>
    </section>
  );
};

export default Collections;
