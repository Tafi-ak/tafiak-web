import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tafiak",
}


export default function Tafiak() {
  return (
    <div>

      <h1>Why Tafiak?</h1>

      <p>Across most corners of the internet including - {" "}
        <a href="https://artofproblemsolving.com/community/user/549337" target="_blank" rel="noopener noreferrer">AoPS</a>, {" "}
        <a href="https://discord.com/users/819907792935976992" target="_blank" rel="noopener noreferrer">Discord</a>, {" "}
        <a href="https://github.com/Tafi-ak" target="_blank" rel="noopener noreferrer">GitHub</a>, {" "}
        and so on - I&apos;m known as tafiak. Since that&apos;s how most people recognize me, <code><a href="https://tafiak.com">tafiak.com</a></code> was an obvious home for my work. Also I like short web names, so yeah.
      </p>



      <h2>Making personal website</h2>

      <p>
        Throughout a month, I have tried to find all the informations related to make personal static website. This is the short description what I did:
      </p>

      <p>

      </p>




      <h2>Misc</h2>

      <p>
        For me, the website is built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a> framework. The source code can be fount at <a href="https://github.com/Tafi-ak/tafiak-web" target="_blank" rel="noopener noreferrer">https://github.com/Tafi-ak/tafiak-web</a>.
      </p>

      <p>
        This site borrows a bit of the flavor of <a href="https://web.evanchen.cc/" target="_blank" rel="noopener noreferrer">Evan Chen</a>&apos;s personal website, especially on the <code>about</code> and <code>now</code> pages including styling the links in classic LaTeX blue.
      </p>



      

    </div>
  );
}