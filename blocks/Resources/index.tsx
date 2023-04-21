import additionalStyles from "@/blocks/Explanation/Explanation.module.css";
import styles from "./Resources.module.css";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import Image, { StaticImageData } from "next/image";
import hundred from "assets/images/websitePreviews/hundred.png";
import prosvit from "assets/images/websitePreviews/prosvit.png";
import llplatform from "assets/images/websitePreviews/llp.png";
import { Navigation } from "swiper";

interface Slide {
  title: string;
  image: StaticImageData;
  link: string;
}

const slides: Slide[] = [
  {
    title: "Hundred",
    image: hundred,
    link: "https://www.ua.splot.institute/",
  },
  {
    title: "Prosvitcenter",
    image: prosvit,
    link: "https://www.ua.splot.institute/",
  },
  {
    title: "LLplatform",
    image: llplatform,
    link: "https://www.ua.splot.institute/",
  },
  {
    title: "Prosvitcenter",
    image: prosvit,
    link: "https://www.ua.splot.institute/",
  },
  {
    title: "Hundred",
    image: hundred,
    link: "https://www.ua.splot.institute/",
  },
  {
    title: "LLplatform",
    image: llplatform,
    link: "https://www.ua.splot.institute/",
  },
];

const Resources = () => {
  return (
    <div>
      <h2 className={additionalStyles.heading}>
        helpful
        <br />
        <span className={additionalStyles.secondLine}>resources</span>
      </h2>
      <Swiper
        className={styles.swiper}
        slidesPerView={2.5}
        spaceBetween={48}
        loop={true}
      >
        {slides.map(({ title, image, link }, index) => (
          <SwiperSlide key={index}>
            <h3 className={styles.title}>{title}</h3>
            <a className={styles.webPreviewLink} href={link}>
              <Image src={image} alt={title} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Resources;
