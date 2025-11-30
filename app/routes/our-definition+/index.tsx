import OurDefinitionHeader from "~/components/our-definition/header";
import OurWhy from "~/components/our-definition/our-why";

function OurDefinition() {
  return (
    <div>
      <div className="sticky top-4 sm:top-6 lg:top-10 max-w-7xl mx-auto w-full">
        <OurDefinitionHeader />
      </div>
      <OurWhy />
    </div>
  );
}

export default OurDefinition;
