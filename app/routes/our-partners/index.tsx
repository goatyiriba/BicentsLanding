import PageLayout from "~/components/layout/page-layout";

function OurPartnersPage() {
  return (
    <PageLayout>
      <section className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Our partners</h1>
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10">
          <img
            src="/imgs/our-partners/microsoft.svg"
            alt="Microsoft logo"
            width={200}
            height={200}
            className="w-20 h-20 sm:w-28 sm:h-28 md:h-auto md:w-80"
          />
          <img
            src="/imgs/our-partners/open-ai.svg"
            alt="Open AI logo"
            width={200}
            height={200}
            className="w-20 h-20 sm:w-28 sm:h-28 md:h-auto md:w-80"
          />
        </div>
      </section>
    </PageLayout>
  );
}

export default OurPartnersPage;
