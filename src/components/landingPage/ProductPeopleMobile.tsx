import Image from "next/image";
import product_people_title from "@/svgs/product_people_title.svg";
import last_btn from "@/svgs/last_btn.svg";
import next_btn from "@/svgs/next_btn.svg";

import styles from "@/styles/landingPage/productPeopleMobile.module.scss";
import { productPeopleProps } from "@/type-config";

export default function ProductPeopleMobile({
  carousel,
  carouselId,
  addCarouselId,
  reduceCarouselId,
}: productPeopleProps) {
  return (
    <>
      <div className={styles["product-people-mobile-container"]}>
        <div className={styles["product-people-mobile-title"]}>
          <Image
            src={product_people_title}
            alt="logo"
            width={140}
            height={60}
            priority={true}
          />
          <p>{carousel[carouselId].title}</p>
        </div>
        <div className={styles["product-people-mobile__carousel-container"]}>
          <button
            className={styles["product-people-mobile__carousel-last-btn"]}
            onClick={reduceCarouselId}
          >
            <Image
              src={last_btn}
              alt="logo"
              width={26}
              height={5.4}
              priority={true}
            />
            <p>{carousel[carouselId].lastStep}</p>
          </button>
          <button
            className={styles["product-people-mobile__carousel-next-btn"]}
            onClick={addCarouselId}
          >
            <Image
              src={next_btn}
              alt="logo"
              width={26}
              height={5.4}
              priority={true}
            />
            <p>{carousel[carouselId].nextStep}</p>
          </button>
          <div className="product-people-mobile__carousel-image">
            <Image
              src={carousel[carouselId].mainImage}
              alt="logo"
              width={254}
              height={240}
              priority={true}
            />
          </div>
          <div className={styles["product-people-mobile__carousel-content"]}>
            {carousel[carouselId].content}
          </div>
        </div>
      </div>
    </>
  );
}
