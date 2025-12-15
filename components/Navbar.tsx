"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/#courses",
      label: "Courses",
    },
    { href: "/#placements", label: "Placements" },
    { href: "/#features", label: "Features" },
    { href: "/#testimonials", label: "Testimonial" },
    { href: "/#request-demo-form", label: "Contact" },
  ];

  return (
    <div className="font-montserrat sticky top-0 right-0 left-0 z-60 bg-gradient-to-b from-[#081329] to-[#081329]">
      <nav className="px-fluid-container relative flex items-center justify-between py-6 text-white">
        <Link href="/" className="text-center text-xl font-[900]">
          <div>
            <p>CODING SAVVY</p>
            <p className="text-sm">Be a Savvy Coder!</p>
          </div>
        </Link>

        <ul className="text-nav-0 hidden gap-8 font-[600] capitalize min-[1240px]:flex">
          {navLinks.map(({ href, label }, index) => (
            <li key={index}>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="https://lms-auth.vercel.app/"
            className="rounded-md border border-white px-3 py-1 text-sm font-[400] lg:text-base"
          >
            Login
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none min-[1240px]:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center">
              <div
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
              ></div>
              <div
                className={`my-1 h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "scale-x-0" : ""}`}
              ></div>
              <div
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              ></div>
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`absolute top-full left-0 w-full overflow-hidden border-b border-gray-800 bg-[#09152d] text-sm text-white transition-all duration-500 ease-in-out min-[1240px]:hidden lg:text-base ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6 text-center font-[600] capitalize">
          {navLinks.map(({ href, label }, index) => (
            <li key={index}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-gray-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FooterNav() {
  return (
    <div className="bg-gradient-to-b from-[#0f2247] to-[#0B172D] pt-20">
      <footer className="px-fluid-container bg-black/15 pt-13 text-white backdrop:blur sm:px-8 md:px-12 lg:px-36">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between border-b border-b-white pb-8">
          <Link href="/" className="text-center text-xl font-[900]">
            <div>
              <p>CODING SAVVY</p>
              <p className="text-sm">Be a Savvy Coder!</p>
            </div>
          </Link>

          {/* Social Links */}
          <ul className="flex items-center gap-3 sm:gap-8">
            <li>
              <Link href="https://www.instagram.com/codingsavvy/">
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-auto md:w-auto"
                  src="/icons/instagram.svg"
                  alt="Instagram"
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Main */}
        <div className="mt-4.5 gap-16 pb-24 sm:flex">
          <div className="mb-5 flex flex-col gap-5">
            <div className="max-w-xl">
              <h4 className="mb-2 text-lg font-[500] uppercase md:text-xl">
                Important Links
              </h4>
              <ul className="flex flex-col flex-wrap gap-3 text-base font-[400] text-[#A19FBA] capitalize sm:flex-row md:flex-row md:gap-6 md:gap-y-2 md:text-lg">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/#courses"}>Courses</Link>
                </li>
                <li>
                  <Link href={"/#private-personalised-tutoring"}>Features</Link>
                </li>
                <li>
                  <Link href={"/#testimonials"}>Testimonials</Link>
                </li>
                <li>
                  <Link href={"/#instructor"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 sm:flex-col">
            <div>
              <h4 className="mb-2 text-lg font-[500] md:text-xl">Mail</h4>
              <p className="text-base text-[#A19FBA] md:text-lg">
                admin@codingsavvy.in
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-[500] md:text-xl">Phone</h4>
              <p className="text-base font-[400] text-[#A19FBA] md:text-lg">
                +91 - 7498 625 838
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
