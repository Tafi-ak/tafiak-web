import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch via email (kafi@tafiak.com), Discord, LinkedIn.",
}


export default function Contact() {
  return (

    <div>
      <h1>Contact me</h1>

      <p>
        Have questions about Math Olympiads, <Link href="/program">programs</Link>, or anything else - or just want to say hello? The best way to reach out to me is via email:{" "}
        <b style={{ display: "block", textAlign: "center", margin: ".5rem 0" }}>
          <a href="mailto:kafi@tafiak.com">kafi@tafiak.com</a>
        </b>{" "}
        I read and reply to every email, usually within 24 hours.
      </p>



      <h2>Social</h2>

      <p>I&apos;d also love to connect through social media. Feel free to reach out on any of my profiles below:</p>
      
      <ul className="list">
        <li><b>Discord</b>: My Discord username is <code><a href="https://discord.com/users/819907792935976992" target="_blank" rel="noopener noreferrer">tafi_ak</a></code>, best for quick chats.</li>

        <li><b>AoPS</b>: at <a href="https://artofproblemsolving.com/community/user/549337" target="_blank" rel="noopener noreferrer">Tafi_ak</a>. Don&apos;t hesitate to shoot me a PM.</li>

        <li><b>Linkedln</b>: at <code><a href="https://www.linkedin.com/in/abdullahilkafi" target="_blank" rel="noopener noreferrer">abdullahilkafi</a></code>. I'd love to connect! I accept all requests, and adding a note is always appreciated.</li>

        <li><b>GitHub</b>: at <code><a href="https://github.com/Tafi-ak" target="_blank" rel="noopener noreferrer">Tafi-ak</a></code>.</li>

      </ul>



      <style>{/* css */`
        .list{
          list-style-position: outside;
          padding-left: 1.1em;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        b{
          font-family: tahoma;
          font-size: .95rem;
        }
      `}
      
    </style>

    </div>
  );
}