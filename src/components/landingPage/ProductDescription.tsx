import Image from "next/image";
import product_description_title from "@/svgs/product_description_title.svg";
import product_description_step_one from "@/svgs/product_description_step_one.svg";
import product_description_step_two from "@/svgs/product_description_step_two.svg";
import product_description_step_three from "@/svgs/product_description_step_three.svg";

import { styled } from "styled-components";
import { IisWebProps } from "@/type-config";

const Container = styled.div`
  margin-top: 6.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1400px) {
    margin-top: 16.125rem;
  }
`;

const CardContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media screen and (min-width: 1400px) {
    display: flex;
    flex-direction: row;
    gap: 8.5rem;
  }
`;

const Card = styled.div`
  @media screen and (min-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.desktop.interface};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    line-height: 2.125rem;
    letter-spacing: 0.125rem;
    gap: 0.25rem;
  }
`;

export default function ProductDescription({ isWeb }: IisWebProps) {
  return (
    <>
      <Container>
        <div>
          <Image
            src={product_description_title}
            alt="logo"
            width={isWeb ? 245 : 175}
            height={isWeb ? 90 : 73}
            priority={true}
          />
        </div>

        <CardContainer>
          <Card>
            <div>
              <Image
                src={product_description_step_one}
                alt="logo"
                width={isWeb ? 212 : 180}
                height={isWeb ? 212 : 180}
                priority={true}
              />
            </div>
            {isWeb ? (
              <div>
                Step 1
              </div>
            ) : (
              <></>
            )}
          </Card>

          <Card>
            <div>
              <Image
                src={product_description_step_two}
                alt="logo"
                width={isWeb ? 212 : 180}
                height={isWeb ? 212 : 180}
                priority={true}
              />
            </div>
            {isWeb ? (
              <div>
                Step 2
              </div>
            ) : (
              <></>
            )}
          </Card>

          <Card>
            <div>
              <Image
                src={product_description_step_three}
                alt="logo"
                width={isWeb ? 212 : 180}
                height={isWeb ? 212 : 180}
                priority={true}
              />
            </div>
            {isWeb ? (
              <div>
                Step 3
              </div>
            ) : (
              <></>
            )}
          </Card>
        </CardContainer>
      </Container>
    </>
  );
}
