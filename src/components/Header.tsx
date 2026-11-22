"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/now", label: "Now" },
  { href: "/tafiak", label: "Tafiak" },
  { href: "/blog", label: "Blog" },
  { href: "/olympiad", label: "Olympiad" },
  { href: "/program", label: "Program" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (

    <>
    
    <header className="header-main">
      <div className="header-inner">
        <Link href="/" className="logo" onClick={closeMenu}>
          Abdullahil Kafi <span className="logo-handle">(tafiak)</span>
        </Link>

        <nav className="nav-bar" aria-label="Main navigation">
          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <ul className={`nav-items ${isOpen ? "open" : ""}`}>
            {navLinks.map(({ href, label }) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className={isActive ? "active" : ""}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>


    <section className="in-building">
            Under construction now! For inquaries: <Link href="/contact"><strong>contact</strong></Link>
    </section>




    <style>{/* css */`
      .in-building{
        color: #ffffff;
        background-color: #4299d7;
        text-align: center;
        font-size: 1rem;
      }
      .in-building a{
        text-decoration: none;
        color: blue;
      }
    `}

    </style>



    </>
  );
}
