import Image from "next/image";
import product_categories_toggle_down from "@/svgs/product_categories_toggle_down.svg";
import product_categories_toggle_up from "@/svgs/product_categories_toggle_up.svg";
import styles from "@/styles/productOverview.module.scss";
import { useState } from "react";
import { IisWebProps } from "@/type-config";

// 因為在 type-config.ts 定義過 isWeb，所以不使用 type，而用 interface 來 extends
interface productOverviewProps extends IisWebProps {
  gallery: {
    id: string;
    title: string;
    image: string;
    content: string;
  };
}

export default function ProductOverview({
  isWeb,
  gallery,
}: productOverviewProps) {
  const [isShow, setIsShow] = useState(false);

  function toggleIsShow() {
    setIsShow(!isShow);
  }

  return (
    <>
      <div className={styles["product-overview-container"]}>
        <div className={styles["product-overview__top-container"]}>
          <div className={styles["product-overview__top-title"]}>
            {gallery.title}
          </div>
        </div>
        <div className={styles["product-overview__bottom-container"]}>
          <div className={styles["product-overview__bottom-image"]}>
            <Image
              src={gallery.image}
              alt="logo"
              width={isWeb ? 268 : 233}
              height={isWeb ? 268 : 233}
              priority={true}
            />
          </div>
          {isShow ? (
            <div className={styles["product-overview__bottom-content"]}>
              {gallery.content}
            </div>
          ) : (
            <></>
          )}
          <button
            onClick={toggleIsShow}
            className={styles["product-overview__bottom-toggle"]}
          >
            <Image
              src={
                isShow
                  ? product_categories_toggle_up
                  : product_categories_toggle_down
              }
              alt="logo"
              width={isWeb ? 42 : 36.5}
              height={isWeb ? 10 : 7.82}
              priority={true}
            />
          </button>
        </div>
      </div>
    </>
  );
}
