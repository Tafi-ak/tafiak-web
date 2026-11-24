import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Now",
}


export default function Now() {
  return (
    
    <div>


      <h1>Now</h1>

      <p>
        This is what I am working on these days. {" "} <span className="last-updated">[Last updated: 24 Nov, 2026]</span>
      </p>

      <h2>Preparing my program</h2>

      <p>
        Completing the handouts of my <Link href="/program">program</Link>.
      </p>





      <h2>Academic study</h2>

      <p>
        Next year in June, I have my board exam. So I am working for it.
      </p>






      <h2>
        Hobbies
      </h2>

      <p>
        I am more of a casual reader. Currently reading <a href="https://www.rokomari.com/book/194425/agatha-christie-somogro-1" target="_blank" rel="noopener noreferrer">Agatha Christie Somogro-1</a>, and <a>Give and Take</a> by Adam Grant.
      </p>





      <style>{/* css */`
        .last-updated{
          font-size: .9rem;
        }
      `}</style>
      
      

    </div>

  );
}