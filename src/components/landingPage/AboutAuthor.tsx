import Image from "next/image"
import about_author_logo from "@/svgs/about_author_logo.svg"

import styles from "@/styles/landingPage/aboutAuthor.module.scss"
import { IisWebProps } from "@/type-config"
import Link from "next/link"

export default function AboutAuthor({ isWeb }: IisWebProps){
  return(
    <>
      <div className={styles["about-author-container"]}>
        <div className={styles["about-author-image"]}>
          <Image
            src={about_author_logo}
            alt="logo"
            width={isWeb ? 288 : 200}
            height={isWeb ? 288 : 200}
            priority={true}
          />
        </div>
        <div className={styles["about-author-content-container"]}>
          <div className={styles["about-author-content-author"]}>關於作者</div>
          <div className={styles["about-author-content-text"]}>
            藥師背景出身的茶葉先森，在生藥學中，認識茶樹的學名 ”Thea sinensis“ ，深深被優美的文字吸引，而「先森」取自「先生」的諧音。成為社畜後，開始接案創作繪畫，也學習網頁前端工程，架設這個網站。在這裡，你可以選擇你想要的商品類型，告訴茶葉先森你/妳的故事，我會幫你創作出溫暖的無臉畫作品。
          </div>
          <Link href="https://www.instagram.com/thea_daily/" target="_blank" className={styles["about-author-content-text"]}>instagram | thea_daily</Link>
        </div>
      </div>
    </>
  )
}