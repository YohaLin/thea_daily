import Image from "next/image";
import footer_logo2 from "@/svgs/footer_logo.svg";
import footer_instagram from "@/svgs/footer_instagram.svg";

import { styled } from "styled-components";
import { IisWebProps } from "@/type-config";
import Link from "next/link";

const Container = styled.div`
  margin-top: 14.0625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8125rem;
  margin-bottom: 1.5rem;
  @media screen and (min-width: 1400px) {
    margin-top: 21.5625rem;
    flex-direction: row;
    gap: 5.25rem;
    margin-bottom: 1.5rem;
  }
`;


const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
  font-size: ${(props) => props.theme.fontSizes.mobile.auxiliary};
  letter-spacing: 0.125rem;
  @media screen and (min-width: 1400px) {
    gap: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.desktop.auxiliary};
  }
`;

const ContentUpContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function Footer({ isWeb }: IisWebProps) {
  return (
    <>
      <Container>
        <div>
          <Image
            src={footer_logo2}
            alt="logo"
            width={isWeb ? 118 : 128}
            height={isWeb ? 118 : 128}
            priority={true}
          />
        </div>
        <ContentContainer>
          <ContentUpContainer>
            <div>商品訂製</div>
            <div>關於作者</div>
            <Link
              href="https://www.instagram.com/thea_daily/"
              target="_blank"
            >
              <Image
                src={footer_instagram}
                alt="logo"
                width={isWeb ? 18.75 : 24}
                height={isWeb ? 18.75 : 24}
                priority={true}
              />
            </Link>
          </ContentUpContainer>
          <div>
            All right Preserved 2023{" "}
          </div>
        </ContentContainer>
      </Container>
    </>
  );
}
