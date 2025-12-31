import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
}

export default function Logo({ className = "", showText = true, textColor = "text-gray-900" }: LogoProps) {
  return (
    <Link href="/" className={`group ${className}`}>
      {/* Text Element - Single line */}
      {showText && (
        <span className={`text-xl md:text-2xl lg:text-3xl font-black tracking-tight ${textColor} transition-all duration-300 group-hover:opacity-80`}>
          VMI Collective
        </span>
      )}
    </Link>
  );
}

