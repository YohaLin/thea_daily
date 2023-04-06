import Image from "next/image";
import header_logo from "@/svgs/header_logo.svg";
import styles from "@/styles/author/author.module.scss";
import { IisWebProps } from "@/type-config";
import Link from "next/link";

export default function Author({ isWeb }: IisWebProps) {
  return (
    <>
      <div className={styles["author-container"]}>
        <div className={styles["author__logo"]}>
          <Image
            src={header_logo}
            alt="logo"
            width={isWeb ? 184 : 172}
            height={isWeb ? 184 : 172}
            priority={true}
            className={styles["header__logo"]}
          />
        </div>

        <div className={styles["author__content-container"]}>
          <p className={styles["author__content-title"]}>茶葉先森本人</p>
          <div className={styles["author__content-hashtag-container"]}>
            <p className={styles["author__content-hashtag"]}>
              #無臉畫創作者 #藥師 #網頁前端工程師
            </p>

            <p className={styles["author__content-hashtag"]}>
              instagram | <Link href="https://www.instagram.com/thea_daily/" target="_blank" className={styles["author__content-hashtag"]}>thea_daily</Link>
            </p>
          </div>

          <p className={styles["author__content-text"]}>
            從小就很喜歡畫畫的茶葉先森，在畢業之後受到斜槓風潮的感召，開始從
            2020 年嘗試使用 iPad 搭配 Procreate
            軟體繪畫，後來因為朋友的分享之後開始接到案子，甚至在 2022
            年接到了知名藥廠 team building 冠軍禮物的客製化邀請，再一路畫到了
            2023
            年。想過很多次要放棄，但認為畫畫可以帶給人們溫暖，自己也會得到很多成就感，於是心裡萌生一個念頭：「我想要自己架網站來宣傳我的無臉畫作，希望可以把這份溫暖擴及給更多人」，如同你們看到的這個網站，就這樣誕生了。
          </p>

          <div className={styles["author__content-paragraph-container"]}>
            <p className={styles["author__content-subtitle"]}>
              又是茶葉，又是先森？
            </p>
            <p className={styles["author__content-text"]}>
              ”Thea sinensis“
              是茶樹的學名，在大三學習生藥學，讀到了這個學名時，”Thea”這個字好美，於是就被我取名成粉專的名字了；因為覺得取名成「先生」太無趣，所以用諧音的方式改成「先森」。
            </p>
          </div>

          <div className={styles["author__content-paragraph-container"]}>
            <p className={styles["author__content-subtitle"]}>網站有什麼？</p>
            <p className={styles["author__content-text"]}>
              這是一個客製化網站，在這邊你可以選擇自己想要的商品類型，像是「數位圖檔、無框畫、茶包、卡片」……等等，不管做什麼商品，都會有一個數位圖檔，接著你可以選擇繪製人數。茶葉先森最喜歡大家跟我分享故事了，不管是客製化圖是要送給家人、另一半或是暗戀的那個人，只要你願意分享，都可以打在聊聊中，放心！在這邊絕對會保密的，最後就是耐心稍待茶葉先森將作品完成囉！
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
