import { WORK_EXPERIENCE } from "../../utils/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExperienceCard from "./ExperienceCard";
import "./workexperience.css"
import Slider from "react-slick";

export default function WorkExperience() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <section className="experience-container">
      <h5 className="text-gray-900 dark:text-gray-400">Work Experience</h5>

      <div className="experience-content">
        <Slider {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.titulo} details={item} />
          ))}
        </Slider>
      </div>

    </section>
  )
}

