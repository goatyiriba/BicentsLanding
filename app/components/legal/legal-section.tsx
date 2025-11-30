function LegalSection({
  title,
  children,
}: React.PropsWithChildren<{
  title: string;
}>) {
  return (
    <section>
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-balance">{title}</h3>
      <p className="text-balance text-sm sm:text-base">{children}</p>
    </section>
  );
}

export default LegalSection;
