import Image from "next/image";
import product_categories_toggle_down from "@/svgs/product_categories_toggle_down.svg";
import { styled } from "styled-components";
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

const Container = styled.div<{ isShow: boolean }>`
  width: 17.5rem;
  height: ${(props) => (props.isShow ? "480px" : "340px")};
  border: 1.3px solid ${(props) => props.theme.colors.text.dark};
  border-radius: 40px;
  transition: height 0.5s ease-in;
  @media screen and (min-width: 1400px) {
    width: 20rem;
    height: ${(props) => (props.isShow ? "600px" : "400px")};
    border: 2px solid ${(props) => props.theme.colors.text.dark};
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  border-bottom: 1.3px solid ${(props) => props.theme.colors.text.dark};
  @media screen and (min-width: 1400px) {
    height: 2.875rem;
    line-height: 2.875rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.text.dark};
  }
`;

const TopTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.mobile.secondary};
  letter-spacing: 0.125rem;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  @media screen and (min-width: 1400px) {
    font-size: ${(props) => props.theme.fontSizes.desktop.secondary};
    letter-spacing: 0.125rem;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  @media screen and (min-width: 1400px) {
    padding: 1.5rem;
  }
`;

const BottomContent = styled.div<{ isShow: boolean }>`
  margin-top: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 0.125rem;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  visibility: ${(props) => (props.isShow ? "visible" : "hidden")};
  opacity: ${props => props.isShow ? 1 : 0};
  position: ${props => props.isShow ? "relative" : "absolute"};
  transition: opacity 0.5s ease-in;
  @media screen and (min-width: 1400px) {
    margin-top: 1.5rem;
    line-height: 1.875rem;
    font-size: ${(props) => props.theme.fontSizes.desktop.secondary};
  }
`;

const BottomToggle = styled.button<{ isShow: boolean }>`
  margin-top: 1.25rem;
  transform: rotate(${(props) => (props.isShow ? "180deg" : "0deg")});
  transition: transform 0.5s ease;
  @media screen and (min-width: 1400px) {
    margin-top: 1.5rem;
  }
`;

export default function ProductOverview({
  isWeb,
  gallery,
}: productOverviewProps) {
  const [isShow, setIsShow] = useState<boolean>(false);

  function toggleIsShow() {
    setIsShow(!isShow);
  }

  return (
    <>
      <Container isShow={isShow}>
        <TopContainer>
          <TopTitle>{gallery.title}</TopTitle>
        </TopContainer>
        <BottomContainer>
          <div>
            <Image
              src={gallery.image}
              alt="logo"
              width={isWeb ? 268 : 233}
              height={isWeb ? 268 : 233}
              priority={true}
            />
          </div>
          <BottomContent isShow={isShow}>
            {gallery.content}
          </BottomContent>
          <BottomToggle onClick={toggleIsShow} isShow={isShow}>
            <Image
              src={product_categories_toggle_down}
              alt="logo"
              width={isWeb ? 42 : 36.5}
              height={isWeb ? 10 : 7.82}
              priority={true}
            />
          </BottomToggle>
        </BottomContainer>
      </Container>
    </>
  );
}
