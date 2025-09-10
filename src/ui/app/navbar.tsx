"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar: React.FC = () => {
  const navbarDropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [darkMode, setDarkMode] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
const handleScroll = () => {
  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // ✅ works now
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id") || "home";
    }
  });
  setActiveSection(current);
};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-blue/100 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 transition-colors">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {["home", "skills", "project", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative transition ${
                activeSection === id
                  ? "text-emerald-950 dark:text-emerald-400"
                  : "text-neutral-700 dark:text-neutral-200"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-950 dark:bg-emerald-400 transition-all duration-300 ${
                  activeSection === id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:scale-105 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-neutral-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={navbarDropdownRef}
          className="md:hidden px-6 pb-6 animate-slideDown"
        >
          <ul className="flex flex-col space-y-4 font-medium">
            {["home", "skills", "project", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block transition ${
                    activeSection === id
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-neutral-700 dark:text-neutral-200"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 p-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 hover:scale-105 transition w-fit"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-5 h-5 text-yellow-400" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 text-neutral-800" /> Dark Mode
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
