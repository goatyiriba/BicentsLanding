import { Button } from "../ui/button";

type HomeAccordionContentProps = {
  content: string;
  exploreHref: string;
};

function HomeAccordionContent({
  content,
  exploreHref,
}: HomeAccordionContentProps) {
  return (
    <section className="space-y-4 sm:space-y-5">
      <p className="text-[#1A1A1A] text-balance text-sm sm:text-base">{content}</p>
      <div className="text-center sm:text-end">
        <Button 
          className="bg-gray-500 cursor-not-allowed opacity-70 w-full sm:w-auto text-sm sm:text-base"
          disabled
        >
          Start exploration
        </Button>
      </div>
    </section>
  );
}

export default HomeAccordionContent;
