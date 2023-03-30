import Image from "next/image"
import product_making_title from "@/svgs/product_making_title.svg"
import product_making_image from "@/svgs/product_making_image.svg"
import product_making_content_image from "@/svgs/product_making_content_image.svg"

import styles from "@/styles/landingPage/productMaking.module.scss"
import { IisWebProps } from "@/type-config"

export default function ProductMaking({isWeb}: IisWebProps){
  return(
    <>
      <div className={styles["product-making__kv-container"]}>
        <div className={styles["product-making__kv-content"]}>
          A story giver with painting
        </div>
        <div >
          <Image
            src={product_making_image}
            alt="logo"
            priority={true}
            className={styles["product-making__kv-image"]}
          />
        </div>
      </div>
      <div className={styles["product-making__content-container"]}>
        <div className={styles["product-making__content-title"]}>
          <Image
            src={product_making_title}
            alt="logo"
            width={isWeb ? 248 :  174}
            height={isWeb ? 90 : 74}
            priority={true}
          />
        </div>
        <div className={styles["product-making__content-image"]}>
          <Image
            src={product_making_content_image}
            alt="logo"
            width={isWeb ? 386 : 260}
            height={isWeb ? 386 : 260}
            priority={true}
          />
        </div>
        <div className={styles["product-making__content-text"]}>
          <p>為重要的時刻創造紀念、留下美好回憶</p>
          <p>想準備獨特性、具有心意的禮物</p>
          <p>透過畫作，為美好的紀念時分</p>
          <p>創造儀式感、保留氛圍</p>
        </div>
      </div>
    </>
  )
}