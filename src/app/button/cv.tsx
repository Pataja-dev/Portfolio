'use client';
import { Download, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function CvButton() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Main Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-6 rounded-xl transition shadow-sm flex items-center"
      >
        CV
        <Download className="pb-1 inline-block w-5 h-5 ml-2" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg z-10">
          <a
            href="/cv.pdf"
            download="John-Lloyd-Glee-CV.pdf"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-t-xl transition"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-b-xl transition"
          >
            <ExternalLink className="w-4 h-4" />
            Open CV
          </a>
        </div>
      )}
    </div>
  );
}
