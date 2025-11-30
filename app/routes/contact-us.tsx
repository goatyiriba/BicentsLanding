import { Mail } from "lucide-react";
import PageLayout from "~/components/layout/page-layout";

function ContactUsPage() {
  return (
    <PageLayout>
      <div className="max-w-2xl">
        <h1 className="mb-8 sm:mb-12 lg:mb-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Contact</h1>
        <address className="">
          <div>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <Mail className="stroke-black fill-white w-8 h-8 sm:w-10 sm:h-10 block shrink-0" />
              <div>
                <a
                  href="mailto:available@bicents.com"
                  className="font-semibold text-lg sm:text-2xl md:text-3xl not-italic inline-block mb-2 break-all sm:break-normal"
                >
                  available@bicents.com
                </a>
                <p className="not-italic text-balance text-sm sm:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem, asperiores.
                </p>
              </div>
            </div>
          </div>
        </address>
      </div>
    </PageLayout>
  );
}

export default ContactUsPage;
