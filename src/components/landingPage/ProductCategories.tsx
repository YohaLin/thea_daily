import Image from "next/image";
import product_categories_title from "@/svgs/product_categories_title.svg";
import btn from "@/svgs/product_categories_btn.svg";

import ProductOverview from "@/components/ProductOverview";
import styles from "@/styles/landingPage/productCategories.module.scss";

import product_categories_digital_painting from "@/svgs/product_categories_digital_painting.svg";
import product_categories_frameless_painting from "@/svgs/product_categories_frameless_painting.svg";
import product_categories_teabag from "@/svgs/product_categories_teabag.svg";
import { IisWebProps } from "@/type-config";

export default function ProductCategories({ isWeb }: IisWebProps) {
  return (
    <>
      <div className={styles["product-categories-container"]}>
        <div className={styles["product-categories-title"]}>
          <Image
            src={product_categories_title}
            alt="logo"
            width={isWeb ? 247 : 150}
            height={isWeb ? 105 : 75}
            priority={true}
          />
        </div>
        <div className={styles["product-categories__overview-container"]}>
          {/* 把 gallery 全部印出來 */}
          {galleries.map((gallery) => (
            <ProductOverview isWeb={isWeb} gallery={gallery} key={gallery.id} />
          ))}
        </div>
        <button className={styles["product-categories-btn"]}>
          <Image
            src={btn}
            alt="logo"
            width={isWeb ? 24.77 : 13.39}
            height={isWeb ? 5.27 : 2.64}
            priority={true}
          />
          <span>前往商品總覽</span>
        </button>
      </div>
    </>
  );
}

const galleries: Array<{
  id: string;
  title: string;
  image: string;
  content: string;
}> = [
  {
    id: "數位圖檔",
    title: "數位圖檔",
    image: product_categories_digital_painting,
    content:
      "每個客製商品都會拿到數位圖檔，完成作品後會有兩個尺寸規格，可以作為手機桌布，也可以上傳到 IG 炫耀！",
  },
  {
    id: "無框畫",
    title: "無框畫",
    image: product_categories_frameless_painting,
    content:
      "感受照片再次帶來的美好時刻，精緻無框畫不論掛在牆上，或是擺在桌邊都很適合，世界因為你我陪伴而更加溫暖。",
  },
  {
    id: "印製茶包",
    title: "印製茶包",
    image: product_categories_teabag,
    content:
      "來自有「茶鄉」美譽之稱的坪林，地廣人稀、山明水秀讓茶葉顯得獨特，一撕開包裝就一陣清香襲來，入喉之後還帶有奶韻。",
  },
];
