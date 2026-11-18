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

      <div className="footer-main-content">
        This is footer section.
      </div>
      
      <hr className="footer-line"/>
      <div className="footer-license-div">
        <p className="footer-copyright-text">
          &copy; {year} Abdullahil Kafi &bull; <a href="https://github.com/Tafi-ak/tafiak-web/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"> MIT License</a>
        </p>

        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/abdullahilkafi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://discord.com/users/819907792935976992" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://github.com/Tafi-ak" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

    </footer>
    
  );
}
