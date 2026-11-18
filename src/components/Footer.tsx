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

      This is footer.
      <hr className="footer-line"/>
      <div className="footer-license-div">
        &copy; {year} Abdullahil Kafi &bull; Source code under{" "}
        <a href="https://github.com/Tafi-ak/tafiak-web/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
          MIT License
        </a>
        . Personal content &amp; media reserved.
      </div>

    </footer>
    
  );
}
