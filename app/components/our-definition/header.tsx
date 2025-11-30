import { NavLink } from "@remix-run/react";
import GoBackButton from "../misc/go-back-button";
import { cn } from "~/lib/utils";

const NAV_ITEMS = [
  { title: "Our Why", id: "our-why" },
  { title: "Our Mission", id: "our-mission" },
  { title: "Our Values", id: "our-values" },
  { title: "Our Commitments", id: "our-commitments" },
  { title: "Join Us", id: "join-us", href: "/join-us" },
];

function OurDefinitionHeader() {
  return (
    <header className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 px-4 sm:px-6 lg:px-8">
      <GoBackButton />
      <nav className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        <ul className="flex h-full min-w-max sm:min-w-0">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.title}
              className="h-full flex items-center justify-center text-xs sm:text-sm"
            >
              <NavLink
                to={item.href || `#${item.id}`}
                className={({ isActive }) =>
                  cn({ "bg-darkGray": isActive }, "px-3 sm:px-5 lg:px-7 py-2 whitespace-nowrap hover:bg-darkGray/50 transition-colors")
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden sm:block"></div>
    </header>
  );
}

export default OurDefinitionHeader;
