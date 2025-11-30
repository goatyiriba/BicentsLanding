import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";
import { slugify } from "~/lib/slugify";

const DATA = [
  {
    title: "Services",
    items: ["User experience research", "Innovation on demand", "Marketing"],
  },
  {
    title: "Industries",
    items: [
      "Health",
      "Education",
      "Public service",
      "Transport",
      "Communication & Media",
      "Commerce",
    ],
  },
  {
    title: "Advisoring",
    items: ["Startups", "Gouv", "Business"],
  },
];

function OurCapabilitiesPage() {
  return (
    <PageLayout>
      <h1 className="mb-6 sm:mb-8 md:mb-10 lg:mb-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Our capabilities</h1>
      <div>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-20">
          {DATA.map((section, idx) => (
            <ul className="space-y-4 sm:space-y-6 lg:space-y-[30px] min-w-0 sm:min-w-[150px]" key={section.title + "__" + idx}>
              <h2 className="text-xl sm:text-2xl text-[#BBC3C3]">{section.title}</h2>
              <ul className="flex flex-col gap-3 sm:gap-4">
                {section.items.map((item, idx) => (
                  <li className="text-xs sm:text-sm" key={`${item}__${idx}`}>
                    <Link to={slugify(item)}>
                      <Button className="bg-darkGray text-white hover:bg-purple relative after:content-[''] after:absolute after:w-full after:h-full after:bg-darkGray after:transition-all after:hover:translate-x-5 after:duration-300 after:hover:bg-purple transition-all duration-300 group text-xs sm:text-sm">
                        <span className="z-[2] flex items-center relative">
                          <span className="block">{item}</span>
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 block opacity-0 absolute -right-4 sm:-right-5 transition-opacity duration-200 group-hover:opacity-100" />
                        </span>
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}

export default OurCapabilitiesPage;
