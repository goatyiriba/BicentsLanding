import Logo from "../icons/logo";

function HomeHeader() {
  return (
    <header className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <Logo className="w-24 sm:w-28 lg:w-32" />
    </header>
  );
}

export default HomeHeader;
