import Image from "next/image"
import footer_logo2 from "@/svgs/footer_logo.svg"
import footer_instagram from "@/svgs/footer_instagram.svg"

import styles from "@/styles/footer.module.scss";
import { IisWebProps } from "@/type-config"

export default function Footer({ isWeb }: IisWebProps){
  return (
    <>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-image"]}>
          <Image
            src={footer_logo2}
            alt="logo"
            width={isWeb ? 118 : 128}
            height={isWeb ? 118 : 128}
            priority={true}
          />
        </div>
        <div className={styles["footer-content-container"]}>
          <div className={styles["footer-content-up"]}>
            <div className={styles["footer-content-text"]}>商品訂製</div>
            <div className={styles["footer-content-text"]}>關於作者</div>
            <a href="https://www.instagram.com/thea_daily/" target="_blank" className={styles["footer-content-instagram"]}>
              <Image
                src={footer_instagram}
                alt="logo"
                width={isWeb ? 18.75 : 24}
                height={isWeb ? 18.75 : 24}
                priority={true}
              />
            </a>
          </div>
          <div className={styles["footer-content-text"]}>All right Preserved 2023 </div>
        </div>
      </div>
    </>
  )
}