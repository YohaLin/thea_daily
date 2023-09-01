import Image from "next/image";
import { styled } from "styled-components";
import { IisWebProps } from "@/type-config";
import modal_cancel from "@/svgs/modal_cancel.svg";
import Link from "next/link";

// 因為在 type-config.ts 定義過 isWeb，所以不使用 type，而用 interface 來 extends
interface modalProps extends IisWebProps {
  showModal: Boolean;
  toggleShowModal: () => void;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: ${props => props.theme.colors.bg.five};
  opacity: 0.7;
  backdrop-filter: blur(5px);
`;

const LinkContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  text-align: center;
`;

const OrderLink = styled(Link)`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.mobile.secondary};
`;

const AuthorLink = styled(Link)`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.mobile.secondary};
`;

const SignInButton = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.mobile.secondary};
  width: 6.375rem;
  height: 2.4375rem;
  line-height: 2.4375rem;
  border: ${(props) => props.theme.colors.text.dark} solid 1px;
  border-radius: 47px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CancelButton = styled.div`
  margin: 3.5rem auto 0 auto;
`;

export default function Modal({
  isWeb,
  showModal,
  toggleShowModal,
}: modalProps): JSX.Element | any {
  function handleToggleShowModal(e: any): void {
    e.preventDefault();
    e.stopPropagation();
    // 確保 showModal = true 才會將 modal 關閉，避免狀態混亂
    showModal === true && toggleShowModal();
  }

  // 必須確保是手機版且 showModal = true 才會跳出 modal
  return (
    !isWeb &&
    showModal && (
      <>
        <Container>
          <LinkContainer>
            <OrderLink href="/">
              商品訂製
            </OrderLink>
            <AuthorLink href="/author">
              創作者
            </AuthorLink>
            <SignInButton>登入</SignInButton>
            <CancelButton
              onClick={handleToggleShowModal}
            >
              <Image
                src={modal_cancel}
                alt="modal_cancel"
                width={20}
                height={20}
                priority={true}
              />
            </CancelButton>
          </LinkContainer>
        </Container>
      </>
    )
  );
}
