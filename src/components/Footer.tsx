"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (

    <footer>
      <div className="footer-inner">
        <div className="footer-main-content">
          <div className="footer-brand">
            <h2>Tafiak</h2>
            <p className="footer-quote">Here will be a nice quote.</p>
          </div>

          <div className="footer-nav-stuffs">
            <div className="footer-nav-things-1">
              <h4>About me</h4>
              <nav>
                <ul>
                  <li><Link href="/now">Now</Link></li>
                  <li><Link href="/tafiak">Tafiak</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>

            <div className="footer-nav-things-2">
              <h4>Misc</h4>
              <nav>
                <ul>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/olympiad">Olympiad</Link></li>
                  <li><Link href="/program">Program</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="footer-license-div">
          <p className="footer-copyright-text">
            &copy; {year} Abdullahil Kafi &bull;{" "}
            <a
              href="https://github.com/Tafi-ak/tafiak-web/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
          </p>

          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/abdullahilkafi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://discord.com/users/819907792935976992"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            <a
              href="https://github.com/Tafi-ak"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>

    
  );
}
