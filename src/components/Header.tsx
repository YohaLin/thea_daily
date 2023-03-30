import Image from "next/image"
import header_logo from "@/svgs/header_logo.svg"
import header_hamburger from "@/svgs/header_hamburger.svg"

import styles from "@/styles/header.module.scss"
import { IisWebProps } from "@/type-config"

export default function Header({isWeb}: IisWebProps){
  return(
    <div className={styles["header"]}>
      <div className={styles["header-container"]}>
        <Image
          src={header_logo}
          alt="logo"
          width={isWeb ? 48 : 32}
          height={isWeb ? 48 : 32}
          priority={true}
          className={styles["header__logo"]}
        />
        <div className={styles["header__link-container"]}>
          {/* 手機版只有漢堡排，網頁版有完整資訊 */}
          {isWeb ? 
            <>
              <p className={styles["header__link-order"]}>商品訂製</p>
              <p className={styles["header__link-author"]}>創作者</p>
              <p className={styles["header__link-signin"]}>登入</p>
            </> 
            :
            <Image
              src={header_hamburger}
              alt="這是註解"
              width={36}
              height={32}
              priority={true}
              className={styles["header__link-hamburger"]}
            />
          }
        </div>
      </div >
    </div>
  )
}