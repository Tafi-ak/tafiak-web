import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import mePhoto from "../../public/images/me.jpg";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function About() {
  return (
    <div>
      <h1>Abdullahil Kafi (tafiak)</h1>
      <Image
        src={mePhoto}
        alt="Abdullahil Kafi (tafiak)"
        className="about-photo"
        priority
      />



      <p className="about-text">
        Hi, I&apos;m Abdullahil Kafi, known online as <Link href="/tafiak"><code>tafiak</code></Link>. I have a deep interest in mathematics, particularly Olympiad math and I&apos;m a retired contestant. Over the past five years, I have actively explored various areas of mathematics, sharpening my analytical thinking and problem-solving skills. You can view my full background on my <a href="/public/pdf/cv.pdf">CV</a>.
      </p>

      

      <h2>Activities</h2>
      <p>
        I currently teach Olympiad math to students worldwide &mdash; see more on my <Link href="/program">program</Link> page.
      </p>
      <p>
        While mathematics is my primary passion, I am equally enthusiastic about entrepreneurship and applying analytical thinking to real-world problems. Outside of my core studies and projects, I enjoy reading novels and books on entrepreneurship, as well as listening to music to relax and stay inspired.
      </p>
      <p>
        For updates on my current work, priorities, and focus areas, visit my <Link href="/now">now</Link> page.
      </p>



      <h2>Education</h2>
      <p>
        I am currently completing my 12th grade at Shahid Mamun Mahmud Police Lines School and College in Rajshahi, Bangladesh. Earlier in my academic journey, I briefly attended Rajshahi Govt. City College before taking an unfortunate four-year hiatus, later resuming my studies to complete my higher secondary education.
      </p>



      <h2>Contact</h2>
      <p>
        Feel free to <Link href="/contact">get in touch</Link> anytime.
      </p>








      <style>{/* css */`
        .about-photo{
          float: right;
          height: 250px;
          width: auto;
          margin-left: 10px;
          margin-top: 15px;
          margin-bottom: 10px;
        }
        @media (max-width: 48rem) {
          .about-photo{
            width: 160px;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
