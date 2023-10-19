// Components
import SectionTitle from "../SectionTitle";
import Button from "./Button";
import CollectionImage from "./CollectionImage";

const Collections = () => {
  return (
    <section className="space-y-10">
      <SectionTitle title="Explore Collections" />
      <div className="flex flex-row gap-10">
        <div className="space-y-10">
          <CollectionImage image="1" />
          <div className="flex flex-row gap-10">
            <CollectionImage image="2" />
            <div className="space-y-10 flex flex-col gap-0.5">
              <CollectionImage image="3" />
              <Button section="collections" title="See All Collections" />
            </div>
          </div>
        </div>
        <CollectionImage image="4" />
      </div>
    </section>
  );
};

export default Collections;
