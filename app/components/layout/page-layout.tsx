import { PropsWithChildren } from "react";
import Footer from "../home/footer";
import { cn } from "~/lib/utils";
import GoBackButton from "../misc/go-back-button";

type PageLayoutProps = {
  noFooter?: boolean;
  className?: string;
  hideBackButton?: boolean;
};

function PageLayout({
  children,
  noFooter = false,
  hideBackButton = false,
  className,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <div className="relative min-h-dvh flex flex-col overflow-x-hidden">
      {!hideBackButton && (
        <header className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 w-full lg:max-w-7xl lg:mx-auto">
          <GoBackButton />
        </header>
      )}
      <div className={cn("px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-10 pb-6 sm:pb-8 lg:pb-10 w-full lg:max-w-7xl lg:mx-auto", className)}>
        {children}
      </div>
      {!noFooter && (
        <div className="mt-auto px-4 sm:px-6 lg:px-8 w-full lg:max-w-7xl lg:mx-auto">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default PageLayout;
