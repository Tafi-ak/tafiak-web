"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header-main">
      <h1 className="logo"><Link href="/">Abdullahil Kafi (tafiak)</Link></h1>


      <nav className="nav-bar">
        {/* Mobile Toggle Button: Shows 3-line bar when closed, Cross when open */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            /* Cross (X) Icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* 3-Line Hamburger Icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* All navigation items go inside this list */}
        <ul className={`nav-items ${isOpen ? "open" : ""}`}>
          <li><Link href="/now" onClick={closeMenu}>Now</Link></li>
          <li><Link href="/tafiak" onClick={closeMenu}>Tafiak</Link></li>
          <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/olympiad" onClick={closeMenu}>Olympiad</Link></li>
          <li><Link href="/program" onClick={closeMenu}>Program</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
