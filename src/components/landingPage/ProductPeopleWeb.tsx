import Image from "next/image";
import product_people_title from "@/svgs/product_people_title.svg";
import last_btn from "@/svgs/last_btn.svg";
import next_btn from "@/svgs/next_btn.svg";

import styles from "@/styles/landingPage/productPeopleWeb.module.scss";
import { productPeopleProps } from "@/type-config";

export default function ProductPeopleWeb({
  carousel,
  carouselId,
  addCarouselId,
  reduceCarouselId,
}: productPeopleProps) {
  return (
    <>
      <div className={styles["product-people-web-container"]}>
        <div className={styles["product-people-web-image-main"]}>
          <Image
            src={carousel[carouselId].mainImage}
            alt="logo"
            width={657}
            height={628}
            priority={true}
          />
        </div>

        <div className={styles["product-people-web-carousel-container"]}>
          <div
            className={styles["product-people-web-carousel-intro-container"]}
          >
            <div className={styles["product-people-web-carousel-intro-title"]}>
              <Image
                src={product_people_title}
                alt="logo"
                width={150}
                height={75}
                priority={true}
              />
              <p>{carousel[carouselId].title}</p>
            </div>
            <div
              className={styles["product-people-web-carousel-intro-content"]}
            >
              {carousel[carouselId].content}
            </div>
          </div>

          <div className={styles["product-people-web-carousel-image-side"]}>
            <Image
              src={carousel[carouselId].sideImage}
              alt="logo"
              width={223}
              height={256}
              priority={true}
            />
          </div>
        </div>

        <button
          className={styles["product-people-web-image-last-btn"]}
          onClick={reduceCarouselId}
        >
          <Image
            src={last_btn}
            alt="logo"
            width={64}
            height={10.36}
            priority={true}
          />
          <p>{carousel[carouselId].lastStep}</p>
        </button>
        <button
          className={styles["product-people-web-image-next-btn"]}
          onClick={addCarouselId}
        >
          <Image
            src={next_btn}
            alt="logo"
            width={64}
            height={10.36}
            priority={true}
          />
          <p>{carousel[carouselId].nextStep}</p>
        </button>
      </div>
    </>
  );
}
