import Image from "next/image";
import product_categories_title from "@/svgs/product_categories_title.svg";
import btn from "@/svgs/product_categories_btn.svg";

import ProductOverview from "@/components/ProductOverview";
import { styled } from "styled-components";

import product_categories_digital_painting from "@/svgs/product_categories_digital_painting.svg";
import product_categories_frameless_painting from "@/svgs/product_categories_frameless_painting.svg";
import product_categories_teabag from "@/svgs/product_categories_teabag.svg";
import { IisWebProps } from "@/type-config";
import Link from "next/link";

const Container = styled.div`
  width: 72%;
  height: 100%;
  margin: 5.625rem auto 0 auto;
  @media screen and (min-width: 1400px) {
    margin: 16rem auto 0 auto;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const OverviewContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  @media screen and (min-width: 1400px) {
    margin-top: 3.25rem;
  }
`;

const LinkButton = styled(Link)`
  margin: 1.5rem auto 0 auto;
  width: 10.75rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.primary.one};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  span {
    color: ${props => props.theme.colors.text.light};
    font-size: ${(props) => props.theme.fontSizes.mobile.secondary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
  @media screen and (min-width: 1400px) {
    margin: 4rem auto 0 auto;
    width: 16.75rem;
    height: 3.875rem;
    span {
      font-size: ${(props) => props.theme.fontSizes.desktop.secondary};
    }
  }
`;

export default function ProductCategories({ isWeb }: IisWebProps) {
  return (
    <>
      <Container>
        <Title>
          <Image
            src={product_categories_title}
            alt="logo"
            width={isWeb ? 247 : 150}
            height={isWeb ? 105 : 75}
            priority={true}
          />
        </Title>
        <OverviewContainer>
          {/* 把 gallery 全部印出來 */}
          {galleries.map((gallery) => (
            <ProductOverview isWeb={isWeb} gallery={gallery} key={gallery.id} />
          ))}
        </OverviewContainer>
        <LinkButton href="/category">
          <Image
            src={btn}
            alt="logo"
            width={isWeb ? 24.77 : 13.39}
            height={isWeb ? 5.27 : 2.64}
            priority={true}
          />
          <span>前往商品總覽</span>
        </LinkButton>
      </Container>
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
      "每個客製商品都會拿到數位圖檔，完成作品後會有兩個尺寸規格，不僅可以作為手機桌布，也可以上傳到 IG 炫耀喔！",
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
