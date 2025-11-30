interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

function Logo({ className, width = 40, height = 40 }: LogoProps) {
  return (
    <img
      src="/imgs/logo.png"
      alt="Bicents Logo"
      className={className}
      width={width}
      height={height}
    />
  );
}

export default Logo;
