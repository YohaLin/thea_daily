import Image from "next/image";
import Link from "next/link";
import header_logo from "@/svgs/header_logo.svg";
import header_hamburger from "@/svgs/header_hamburger.svg";

import styles from "@/styles/header.module.scss";
import { IisWebProps } from "@/type-config";

// 因為在 type-config.ts 定義過 isWeb，所以不使用 type，而用 interface 來 extends
interface headerProps extends IisWebProps {
  showModal: Boolean;
  toggleShowModal: () => void;
}

export default function Header({
  isWeb,
  showModal,
  toggleShowModal,
}: headerProps) {
  function handleToggleShowModal(e: any): void {
    e.preventDefault();
    e.stopPropagation();
    // 確保 showModal = false 才會將 modal 打開，避免狀態混亂
    showModal === false && toggleShowModal();
  }

  return (
    <div className={styles["header"]}>
      <div className={styles["header-container"]}>
        <Link href="/">
          <Image
            src={header_logo}
            alt="logo"
            width={isWeb ? 48 : 32}
            height={isWeb ? 48 : 32}
            priority={true}
            className={styles["header__logo"]}
          />
        </Link>

        <div className={styles["header__link-container"]}>
          {/* 手機版只有漢堡排，網頁版有完整資訊 */}
          {isWeb ? (
            <>
              <Link href="/category" className={styles["header__link-order"]}>商品訂製</Link>
              <Link href="/author" className={styles["header__link-author"]}>創作者</Link>
              <button className={styles["header__link-signin"]}>登入</button>
            </>
          ) : (
            showModal === false && (
              <button
                className={styles["header__link-hamburger"]}
                onClick={handleToggleShowModal}
              >
                <Image
                  src={header_hamburger}
                  alt="這是註解"
                  width={36}
                  height={32}
                  priority={true}
                />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
