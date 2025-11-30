import JoinUsForm from "~/components/join-us/form";
import PageLayout from "~/components/layout/page-layout";

function JoinUsPage() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:flex-row">
        <section className="w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Join Us</h1>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <p className="text-balance">
              When you join Bicents, you become part of an unparalleled
              adventure of daily transformation.
            </p>
            <p className="text-balance">
              It means applying technology to metamorphose the most ambitious
              ideas and companies, while significantly reshaping their influence
              to actively participate in improving the world.
            </p>
            <p className="text-balance">
              It&apos;s also a unique opportunity to learn, to design, to
              innovate, to suggest and to shake up our perception and
              interpretation of the world.
            </p>
          </div>
        </section>
        <section className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <JoinUsForm />
        </section>
      </div>
    </PageLayout>
  );
}

export default JoinUsPage;
