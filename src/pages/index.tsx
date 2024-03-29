'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutAuthor from "@/components/landingPage/AboutAuthor";
import ProductCategories from "@/components/landingPage/ProductCategories";
import ProductDescription from "@/components/landingPage/ProductDescription";
import ProductMaking from "@/components/landingPage/ProductMaking";
import ProductPeopleWeb from "@/components/landingPage/ProductPeopleWeb";
import ProductPeopleMobile from "@/components/landingPage/ProductPeopleMobile";

import product_people_group from "@/svgs/product_people_group.svg";
import product_people_individual from "@/svgs/product_people_individual.svg";
import product_people_double from "@/svgs/product_people_double.svg";

import { styled } from "styled-components";
import { useState } from "react";
import { IisWebProps } from "@/type-config";


const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export default function LandingPage({ isWeb }: IisWebProps) {
  const [carouselId, setCarouselId] = useState<number>(0);

  function addCarouselId(): void {
    // 如果 carouselId 為 2 時，點擊下一步讓 carouselId 改成 0
    if (carouselId === carousel.length - 1) {
      setCarouselId(0);
    } else {
      setCarouselId((id) => id + 1);
    }
  }

  function reduceCarouselId(): void {
    // 如果 carouselId 為 0 時，點擊上一步讓 carouselId 改成 2
    if (carouselId === 0) {
      setCarouselId(carousel.length - 1);
    } else {
      setCarouselId((id) => id - 1);
    }
  }

  return (
      <LandingPageContainer>
        <BodyContainer>
          {/* 無臉畫製作 */}
          <ProductMaking isWeb={isWeb} />

          {/* 選擇個人、雙人、團體 */}
          {isWeb ? (
            <ProductPeopleWeb
              carousel={carousel}
              carouselId={carouselId}
              addCarouselId={addCarouselId}
              reduceCarouselId={reduceCarouselId}
            />
          ) : (
            <ProductPeopleMobile
              carousel={carousel}
              carouselId={carouselId}
              addCarouselId={addCarouselId}
              reduceCarouselId={reduceCarouselId}
            />
          )}

          {/* 商品種類 */}
          <ProductCategories isWeb={isWeb} />

          {/* 商品說明 */}
          <ProductDescription isWeb={isWeb} />

          {/* 關於作者 */}
          <AboutAuthor isWeb={isWeb} />
        </BodyContainer>
      </LandingPageContainer>
  );
}

const carousel: Array<{
  id: number;
  title: string;
  mainImage: string;
  sideImage: string;
  content: string;
  lastStep: string;
  nextStep: string;
}> = [
  {
    id: 0,
    title: "團體",
    mainImage: product_people_group,
    sideImage: product_people_individual,
    content: "幸好有你們，是我最溫暖的避風港， 適合朋友們、家人的禮物。",
    lastStep: "雙人",
    nextStep: "個人",
  },
  {
    id: 1,
    title: "個人",
    mainImage: product_people_individual,
    sideImage: product_people_double,
    content: "獨特的你/妳在無臉畫中顯得是那麼出眾，適合做成名片或大頭照。",
    lastStep: "團體",
    nextStep: "雙人",
  },
  {
    id: 2,
    title: "雙人",
    mainImage: product_people_double,
    sideImage: product_people_group,
    content: "好希望時間就停在這一刻，享受著兩人開心時光，適合送禮傳達心意。",
    lastStep: "個人",
    nextStep: "團體",
  },
];
