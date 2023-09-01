import Image from "next/image";
import product_making_title from "@/svgs/product_making_title.svg";
import product_making_image from "@/svgs/product_making_image.svg";
import product_making_content_image from "@/svgs/product_making_content_image.svg";

import { styled } from "styled-components";
import { IisWebProps } from "@/type-config";

const KvContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 8.25rem;
  @media screen and (min-width: 1400px) {
    position: relative;
    padding-top: 3.75rem;
  }
`;

const KvContent = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-family: "Italiana";
  @media screen and (min-width: 1400px) {
    position: absolute;
    left: 50%;
    top: calc(50% + 2rem);
    transform: translate(-50%);
  }
`;

const KvImage = styled(Image)`
  margin: 0 auto;
  width: 90%;
  max-width: 55.375rem;
  height: auto;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5rem;
  @media screen and (min-width: 1400px) {
    width: 62%;
    max-width: 50rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5.625rem auto; 
    grid-row-gap: 3.5rem;
    grid-template-areas: 
      'image title'
      'image text';
    justify-items: center;
    align-items: start;
  }
`;

const ContentTitle = styled.div`
  @media screen and (min-width: 1400px) {
    grid-area: title;
    transform: translate(-4.5rem);
  }
`

const ContentImageContainer = styled.div`
  margin-top: 2.8925rem;
  @media screen and (min-width: 1400px) {
    width: 100%;
    margin-top: 0;
    grid-area: image;
  }
`

const ContentText = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  line-height: 1.75rem;
  p{
    font-family: "Noto Sans TC";
    font-weight: 350;
    letter-spacing: 5%;
  }
  @media screen and (min-width: 1400px) {
    grid-area: text;
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.desktop.content};
    line-height: 2rem;
  }
`

export default function ProductMaking({ isWeb }: IisWebProps) {
  return (
    <>
      <KvContainer>
        <KvContent>A story giver with painting</KvContent>

        <div>
          <KvImage
            src={product_making_image}
            alt="logo"
            priority={true}
          />
        </div>
      </KvContainer>

      <ContentContainer>
        <ContentTitle>
          <Image
            src={product_making_title}
            alt="logo"
            width={isWeb ? 248 : 174}
            height={isWeb ? 90 : 74}
            priority={true}
          />
        </ContentTitle>
        <ContentImageContainer>
          <Image
            src={product_making_content_image}
            alt="logo"
            width={isWeb ? 386 : 260}
            height={isWeb ? 386 : 260}
            priority={true}
          />
        </ContentImageContainer>
        <ContentText>
          <p>為重要的時刻創造紀念、留下美好回憶</p>
          <p>想準備獨特性、具有心意的禮物</p>
          <p>透過畫作，為美好的紀念時分</p>
          <p>創造儀式感、保留氛圍</p>
        </ContentText>
      </ContentContainer>
    </>
  );
}
