function OurWhy() {
  return (
    <div>
      <section id="our-why" className="min-h-[50dvh] md:min-h-[70dvh] lg:min-h-[80dvh] flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-[140px] scroll-mt-20">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold font-graphik">
          <span className="block text-[#BBC3C3]">Do more</span>{" "}
          <span className="block">
            <span className="text-[#BBC3C3]">by</span> <span>connecting</span>{" "}
          </span>
          <span className="block">human creativity</span>{" "}
          <span className="block">
            <span className="text-[#BBC3C3]">to</span>{" "}
            <span className="orange_bar">technology</span>
          </span>
        </p>
      </section>
      <section id="our-mission" className="flex items-center lg:items-end min-h-[60dvh] lg:min-h-dvh py-12 sm:py-16 lg:py-0 px-4 sm:px-8 md:px-16 lg:px-[140px] scroll-mt-20">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 w-full">
          <div className="w-full lg:w-1/2 flex lg:pt-20">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug max-w-[600px]">
              We go above and beyond to support our clients so that they can
              unleash their full potential.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/imgs/our-definition/our-definition-img1.svg"
              className="h-[30dvh] sm:h-[40dvh] lg:h-[70dvh] object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="our-values" className="flex items-center justify-center min-h-[60dvh] lg:min-h-dvh relative py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-[140px] overflow-hidden scroll-mt-20">
        <img
          src="/imgs/our-definition/robot-human-hands-moving-handshake.svg"
          className="object-cover absolute -left-8 sm:-left-12 top-0 w-[120px] sm:w-[200px] lg:w-[380px]"
          alt=""
        />

        <img
          src="/imgs/our-definition/robot-human-hands-moving-handshake-removebg.svg"
          className="object-cover absolute bottom-0 -right-8 sm:-right-12 w-[120px] sm:w-[200px] lg:w-[380px]"
          alt=""
        />
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-graphik text-center">
          <span>Creativity</span> <span className="text-[#BBC3C3]">&</span>{" "}
          <br />
          <span>Technology</span>
        </h2>
      </section>
      <section id="our-commitments" className="flex items-center justify-center min-h-[50dvh] lg:min-h-dvh relative bg-[#E9EBED] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 scroll-mt-20">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1A1A1A] text-center">Our Commitments</p>
      </section>
    </div>
  );
}

export default OurWhy;
