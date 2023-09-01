import Image from "next/image";
import about_author_logo from "@/svgs/about_author_logo.svg";

import { styled } from "styled-components";
import { IisWebProps } from "@/type-config";
import Link from "next/link";

const Container = styled.div`
  width: 87%;
  max-width: 31.25rem;
  height: 100%;
  margin: 9rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.625rem;
  @media screen and (min-width: 1400px) {
    width: 70%;
    max-width: 62.5rem;
    margin: 30.5625rem auto 0 auto;
    flex-direction: row;
    justify-content: space-between;
    gap: 13.5625rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1400px) {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContentAuthor = styled.div`
  font-size: ${(props) => props.theme.fontSizes.mobile.secondary};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  letter-spacing: 0.125rem;
  @media screen and (min-width: 1400px) {
    font-size: ${(props) => props.theme.fontSizes.desktop.secondary};
    letter-spacing: 0.25rem;
  }
`;

const ContentText = styled.div`
  margin-top: 1.875rem;
  letter-spacing: 0.125rem;
  line-height: 1.6875rem;
  @media screen and (min-width: 1400px) {
    margin-top: 1.875rem;
    font-size: ${(props) => props.theme.fontSizes.desktop.content};
    letter-spacing: 0.125rem;
    line-height: 1.6875rem;
  }
`;

const LinkText = styled(Link)`
  ${ContentText}
`

export default function AboutAuthor({ isWeb }: IisWebProps) {
  return (
    <>
      <Container>
        <div>
          <Image
            src={about_author_logo}
            alt="logo"
            width={isWeb ? 288 : 200}
            height={isWeb ? 288 : 200}
            priority={true}
          />
        </div>
        <ContentContainer>
          <ContentAuthor>關於作者</ContentAuthor>
          <ContentText>
            藥師背景出身的茶葉先森，在生藥學中，認識茶樹的學名 ”Thea sinensis“
            ，深深被優美的文字吸引，而「先森」取自「先生」的諧音。成為社畜後，開始接案創作繪畫，也學習網頁前端工程，架設這個網站。在這裡，你可以選擇你想要的商品類型，告訴茶葉先森你/妳的故事，我會幫你創作出溫暖的無臉畫作品。
          </ContentText>
          <LinkText
            href="https://www.instagram.com/thea_daily/"
            target="_blank"
          >
            instagram | thea_daily
          </LinkText>
        </ContentContainer>
      </Container>
    </>
  );
}
