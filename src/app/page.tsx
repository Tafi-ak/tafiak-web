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
        Hi. I am Abdullahil Kafi, known online as <code>tafiak</code>. I have a strong interest in mathematics, particularly Olympiad problem solving. Over the past five years, I have actively engaged in mathematical exploration, focusing on different areas. This experience helped me to develop strong analytical thinking and problem-solving skills.
      </p>


      <p>
        Although I am no longer actively competing, my journey in mathematics continues to influence the way I approach challenges and think critically. Currently I teach olympiad math worldwide.
      </p>
          
      <p>
        Beyond mathematics, I am interested in business and enjoy applying analytical thinking to real world problems to solve.
      </p>

      <p>
        This is my <Link href="/">CV</Link>.
      </p>

      <h2>Education</h2>
      <p>
        I am currently studying in the 12th grade at Shahid Mamun Mahmud Police Lines School and College in Rajshahi, Bangladesh.
      </p>

      <h2>Activities</h2>
      <p>
        Currently, I work with OTIS Math LLC and serve as a grader for the US Ersatz Math Olympiad (USEMO). I also contributed to translating the Olympiad book <em>Plane Geometry</em> into English and created Asymptote diagrams for Olympiad GeoGuessr.
      </p>

      <p>
        Outside math, I love exploring business strategy, analytical problem solving, and building web projects.
      </p>

      <h2>Contact</h2>
      <p>
        You can reach out via my <Link href="/contact">contact page</Link> or connect with me on LinkedIn and GitHub.
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
