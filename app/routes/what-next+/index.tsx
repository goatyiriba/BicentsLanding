import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

function WhatNextPage() {
  return (
    <PageLayout>
      <h1 className="mb-6 sm:mb-8 lg:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">What&apos;s next ?</h1>
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <WhatNextCard
          projectName="Blurd"
          projectYear={2024}
          projectType="web"
          imgSrc={"/imgs/what-next/vr.svg"}
        />
        <WhatNextCard
          projectName="Blurd"
          projectYear={2024}
          projectType="mobile"
          imgSrc={"/imgs/what-next/vr.svg"}
        />
        <WhatNextCard
          projectName="Blurd"
          projectYear={2024}
          projectType="web"
          imgSrc={"/imgs/what-next/vr.svg"}
        />
      </div>
    </PageLayout>
  );
}

export default WhatNextPage;

type WhatNextCardProps = {
  imgSrc: string;
  projectName: string;
  projectType: "web" | "mobile";
  projectYear: number;
};

function WhatNextCard({
  imgSrc,
  projectName,
  projectType,
  projectYear,
}: WhatNextCardProps) {
  return (
    <article className="w-full min-w-[200px] h-auto relative group rounded-lg overflow-hidden">
      <img src={imgSrc} alt="" loading="lazy" className="w-full h-auto min-h-[200px] object-cover" />
      <div className="absolute w-full h-full inset-0">
        <section className="relative h-full px-3 sm:px-4 py-3 sm:py-4 flex flex-col justify-between transition-colors duration-300 hover:bg-black/60 *:z-[1] after:transition-all after:duration-300 after:hover:opacity-0 after:opacity-100 after:bg-gradient-to-b after:to-[82%] after:from-black/[0.52] after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full">
          <h2 className="font-bold text-sm sm:text-base lg:text-lg truncate">{projectName}</h2>
          <div className="text-center py-2">
            <Button
              className={cn("h-9 sm:h-10 lg:h-14 px-4 sm:px-6 text-xs sm:text-sm", {
                "bg-[#3AD1A4] hover:bg-[#3AD1A4]/90": projectType === "mobile",
                "bg-purple-500 hover:bg-purple-500/90": projectType === "web",
              })}
            >
              {projectName}
            </Button>
          </div>
          <div className="flex justify-between text-xs">
            <div>
              <p>{projectType === "mobile" && "App mobile"}</p>
              <p>{projectType === "web" && "Site Web"}</p>
            </div>
            <p>{projectYear}</p>
          </div>
        </section>
      </div>
    </article>
  );
}
