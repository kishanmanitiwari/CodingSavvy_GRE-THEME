import Link from "next/link";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  ariaLabel?: string;
}

export function Button({ label, onClick, bgColor, ariaLabel }: ButtonProps) {
  return (
    <div className="rounded-lg bg-gradient-to-t from-[#1b438f] to-[#34a0bd] px-[2px] py-[2px]">
      <button
        style={{ backgroundColor: bgColor }}
        className={`w-full rounded-md px-3 py-2 text-inherit capitalize hover:cursor-pointer`}
        type="button"
        onClick={onClick}
        aria-label={ariaLabel || label}
      >
        {label}
      </button>
    </div>
  );
}

interface ButtonLinkProps {
  label: string;
  href: string;
  bgColor?: string;
  download?: string
}

export function ButtonLink({ label, href, bgColor, download }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      download={download}
      className="inline-block w-full rounded-lg bg-gradient-to-t from-[#1b438f] to-[#34a0bd] px-[2px] py-[2px] text-center text-inherit capitalize"
    >
      <span
        className="inline-block h-full w-full rounded-md px-3 py-2"
        style={{ backgroundColor: bgColor }}
      >
        {label}
      </span>
    </Link>
  );
}
