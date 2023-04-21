import additionalStyles from "@/blocks/Grants/Grants.module.css";
import styles from "./Partners.module.css";
import science from "assets/images/partners/science.svg";
import splot from "assets/images/partners/splot.svg";
import Image, { StaticImageData } from "next/image";

interface Partner {
  img: StaticImageData;
  link: string;
}

const partnersArr: Partner[] = [
  {
    img: splot,
    link: "https://www.ua.splot.institute/",
  },
  {
    img: science,
    link: "https://www.sciencenow.studio/",
  },
];
const Partners = () => {
  return (
    <div className={additionalStyles.container}>
      <div className={additionalStyles.text}>
        <h2>
          careers
          <br /> and grants
        </h2>
      </div>
      <div className={styles.linkWrapper}>
        {partnersArr.map(({ img, link }, index) => (
          <a href={link} key={index}>
            <Image src={img} alt={""} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
