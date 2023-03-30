import Image from "next/image";
import product_description_title from "@/svgs/product_description_title.svg";
import product_description_step_one from "@/svgs/product_description_step_one.svg";
import product_description_step_two from "@/svgs/product_description_step_two.svg";
import product_description_step_three from "@/svgs/product_description_step_three.svg";

import styles from "@/styles/landingPage/productDescription.module.scss";
import { IisWebProps } from "@/type-config"

export default function ProductDescription({ isWeb }: IisWebProps) {
  return (
    <>
      <div className={styles["product-description-container"]}>
        <div className={styles["product-description-title"]}>
          <Image
            src={product_description_title}
            alt="logo"
            width={isWeb ? 245 : 175}
            height={isWeb ? 90 : 73}
            priority={true}
          />
        </div>

        <div className={styles["product-description__card-container"]}>
          <div className={styles["product-description__card"]}>
            <div className={styles["product-description__card-image"]}>
              <Image
                src={product_description_step_one}
                alt="logo"
                width={isWeb ? 212 : 180}
                height={isWeb ? 212 : 180}
                priority={true}
              />
            </div>
            {isWeb ? (
              <div className={styles["product-description__card-step"]}>
                Step 1
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className={styles["product-description__card"]}>
            <div className={styles["product-description__card-image"]}>
              <Image
                src={product_description_step_two}
                alt="logo"
                width={isWeb ? 212 : 180}
                height={isWeb ? 212 : 180}
                priority={true}
              />
            </div>
            {isWeb ? (
              <div className={styles["product-description__card-step"]}>
                Step 2
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className={styles["product-description__card"]}>
            <div className={styles["product-description__card-image"]}>
              <Image
                src={product_description_step_three}
                alt="logo"
                width={isWeb ? 212 : 180}
                height={isWeb ? 212 : 180}
                priority={true}
              />
            </div>
            {isWeb ? (
              <div className={styles["product-description__card-step"]}>
                Step 3
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
