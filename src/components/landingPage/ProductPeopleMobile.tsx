import Image from "next/image";
import product_people_title from "@/svgs/product_people_title.svg";
import last_btn from "@/svgs/last_btn.svg";
import next_btn from "@/svgs/next_btn.svg";

import { styled } from "styled-components";
import { productPeopleProps } from "@/type-config";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 8.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  position: relative;
  p {
    position: absolute;
    font-size: ${(props) => props.theme.fontSizes.mobile.primary};
    color: ${(props) => props.theme.colors.text.light}
    letter-spacing: 0.25rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CarouselContainer = styled.div`
  width: 15.875rem;
  margin-top: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const NextImageBtn = styled.button`
  position: absolute;
  top: 5.75rem;
  right: -2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  p {
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
  }
`;

const LastImageBtn = styled.button`
  position: absolute;
  top: 5.75rem;
  left: -2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  p {
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
  }
`;

const CarouselContent = styled.div`
  width: 80%;
  margin-top: 1.125rem;
  font-family: "Noto Sans TC";
  font-size: ${(props) => props.theme.fontSizes.mobile.auxiliary};
  font-weight: 350;
`;

export default function ProductPeopleMobile({
  carousel,
  carouselId,
  addCarouselId,
  reduceCarouselId,
}: productPeopleProps) {
  return (
    <>
      <Container>
        <Title>
          <Image
            src={product_people_title}
            alt="logo"
            width={140}
            height={60}
            priority={true}
          />
          <p>{carousel[carouselId].title}</p>
        </Title>
        <CarouselContainer>
          <LastImageBtn onClick={reduceCarouselId}>
            <Image
              src={last_btn}
              alt="logo"
              width={26}
              height={5.4}
              priority={true}
            />
            <p>{carousel[carouselId].lastStep}</p>
          </LastImageBtn>
          <NextImageBtn onClick={addCarouselId}>
            <Image
              src={next_btn}
              alt="logo"
              width={26}
              height={5.4}
              priority={true}
            />
            <p>{carousel[carouselId].nextStep}</p>
          </NextImageBtn>
          <div>
            <Image
              src={carousel[carouselId].mainImage}
              alt="logo"
              width={254}
              height={240}
              priority={true}
            />
          </div>
          <CarouselContent>{carousel[carouselId].content}</CarouselContent>
        </CarouselContainer>
      </Container>
    </>
  );
}
