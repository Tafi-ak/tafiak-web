"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (

    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* ...rest of your footer... */}

      <p>
        © {year} Abdullahil Kafi · Source code under{" "}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 underline underline-offset-4 transition hover:text-sky-400"
        >
          MIT License
        </a>
        . Personal content &amp; media reserved.
      </p>
    </footer>
    
  );
}
