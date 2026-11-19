import Image from "next/image";
import mePhoto from "../../public/images/me.jpg"; // Include 'public' in the relative path!

export default function About() {
  return (
    <div className="about-container">
      <h2>About me</h2>

      <Image
        src={mePhoto}
        alt="Abdullahil Kafi"
        className="about-photo"
      />

      <p className="about-text">
        Hi. I am Abdullahil Kafi, currently studying in the 12th grade. I have a strong interest in mathematics, particularly Olympiad problem solving. Over the past four years, I actively engaged in mathematical exploration, focusing on different areas. This experience helped me to develop strong analytical thinking and problem solving skills.
      </p>

      <p>
        Although I am no longer actively competing, my journey in mathematics continues to influence the way I approach challenges and think critically. Currently I teach olympiad math worldwide.
      </p>
          
      <p>
        Beyond mathematics, I am interested in business and enjoy applying analytical thinking to real world     problems to solve.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aliquam id non, laboriosam voluptas qui perspiciatis, unde sunt, beatae doloremque dolorum nam optio. Itaque atque quis repellat laborum a quidem!
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
        @media (max-width: 640px) {
          .about-photo{
            width: 160px;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
