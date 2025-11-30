import { Link } from "@remix-run/react";
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
        <Link to={exploreHref} prefetch="viewport">
          <Button className="bg-purple hover:bg-purple/80 transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">
            Start exploration
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default HomeAccordionContent;
