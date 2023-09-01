import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import header_logo from "@/svgs/header_logo.svg";
import header_hamburger from "@/svgs/header_hamburger.svg";

import styled from "styled-components";
import { IisWebProps } from "@/type-config";

// 因為在 type-config.ts 定義過 isWeb，所以不使用 type，而用 interface 來 extends
interface headerProps extends IisWebProps {
  showModal: Boolean;
  toggleShowModal: () => void;
}

const Container = styled.div<{showHeader: boolean}>`
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.text.dark};
  position: fixed;
  z-index: 2;
  top: ${props => props.showHeader ? "0px" : "-80px"};
  transition: top 0.3s linear;
  @media screen and (min-width: 1400px) {
    height: 4.5rem;
  }
`;

const HeaderContainer = styled.div`
  width: 87.8%;
  height: 3.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1400px) {
    width: 91.5%;
    height: 4.5rem;
  }
`;

const LinkContainer = styled.div`
  @media screen and (min-width: 1400px) {
    display: flex;
    align-items: center;
    gap: 3.75rem;
  }
`;

const SignIn = styled.button`
  font-family: "Noto Sans TC";
  font-weight: 350;
  font-size: ${(props) => props.theme.fontSizes.desktop.interface};
  width: 6.5625rem;
  height: 2.625rem;
  line-height: 2.625rem;
  border: ${(props) => props.theme.colors.text.dark} solid 1px;
  border-radius: 47px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinkText = styled(Link)`
  font-family: "Noto Sans TC";
  font-weight: 350;
  font-size: ${(props) => props.theme.fontSizes.desktop.interface};
`;

export default function Header({
  isWeb,
  showModal,
  toggleShowModal,
}: headerProps) {
  const [showHeader, setShowHeader] = useState<boolean>(true);

    const controlHeader = () => {
    if (window.scrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };

  const handleToggleShowModal = (e: any): void => {
    e.preventDefault();
    e.stopPropagation();
    // 確保 showModal = false 才會將 modal 打開，避免狀態混亂
    showModal === false && toggleShowModal();
  }

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  return (
    <Container showHeader={showHeader}>
      <HeaderContainer>
        <Link href="/">
          <Image
            src={header_logo}
            alt="logo"
            width={isWeb ? 48 : 32}
            height={isWeb ? 48 : 32}
            priority={true}
          />
        </Link>

        <LinkContainer>
          {/* 手機版只有漢堡排，網頁版有完整資訊 */}
          {isWeb ? (
            <>
              <LinkText href="/">商品訂製</LinkText>
              <LinkText href="/author">創作者</LinkText>
              <SignIn>登入</SignIn>
            </>
          ) : (
            showModal === false && (
              <button onClick={handleToggleShowModal}>
                <Image
                  src={header_hamburger}
                  alt="這是註解"
                  width={36}
                  height={32}
                  priority={true}
                />
              </button>
            )
          )}
        </LinkContainer>
      </HeaderContainer>
    </Container>
  );
}
