import Image from "next/image";
import product_people_title from "@/svgs/product_people_title.svg";
import last_btn from "@/svgs/last_btn.svg";
import next_btn from "@/svgs/next_btn.svg";

import { styled } from "styled-components";
import { productPeopleProps } from "@/type-config";

const Container = styled.div`
  width: 58.5rem;
  height: 100%;
  margin: 17rem auto 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CarouselIntroContainer = styled.div`
  padding: 2rem 0 0 0.875rem;
`;

const CarouselIntroTitleContainer = styled.div`
  position: relative;
  p {
    position: absolute;
    font-size: ${(props) => props.theme.fontSizes.desktop.secondary};
    color: ${props => props.theme.colors.text.light};
    letter-spacing: 0.25rem;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50% - 2.75rem), -50%);
  }
`;

const CarouselIntroContent = styled.div`
  width: 15.625rem;
  padding-top: 1.125rem;
  line-height: 2rem;
  font-family: "Noto Sans TC";
  font-weight: 350;
`;

const NextImageBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: -1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  p {
    font-size: ${(props) => props.theme.fontSizes.desktop.secondary};
  }
`;

const LastImageBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  p {
    font-size: ${(props) => props.theme.fontSizes.desktop.secondary};
  }
`;

export default function ProductPeopleWeb({
  carousel,
  carouselId,
  addCarouselId,
  reduceCarouselId,
}: productPeopleProps) {
  return (
    <>
      <Container>
        <div>
          <Image
            src={carousel[carouselId].mainImage}
            alt="logo"
            width={657}
            height={628}
            priority={true}
          />
        </div>

        <CarouselContainer>
          <CarouselIntroContainer>
            <CarouselIntroTitleContainer>
              <Image
                src={product_people_title}
                alt="logo"
                width={150}
                height={75}
                priority={true}
              />
              <p>{carousel[carouselId].title}</p>
            </CarouselIntroTitleContainer>
            <CarouselIntroContent>
              {carousel[carouselId].content}
            </CarouselIntroContent>
          </CarouselIntroContainer>

          <div>
            <Image
              src={carousel[carouselId].sideImage}
              alt="logo"
              width={223}
              height={256}
              priority={true}
            />
          </div>
        </CarouselContainer>

        <LastImageBtn
          onClick={reduceCarouselId}
        >
          <Image
            src={last_btn}
            alt="logo"
            width={64}
            height={10.36}
            priority={true}
          />
          <p>{carousel[carouselId].lastStep}</p>
        </LastImageBtn>
        <NextImageBtn
          onClick={addCarouselId}
        >
          <Image
            src={next_btn}
            alt="logo"
            width={64}
            height={10.36}
            priority={true}
          />
          <p>{carousel[carouselId].nextStep}</p>
        </NextImageBtn>
      </Container>
    </>
  );
}
