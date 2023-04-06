import Image from "next/image";
import styles from "@/styles/modal.module.scss";
import { IisWebProps } from "@/type-config";
import modal_cancel from "@/svgs/modal_cancel.svg"
import Link from "next/link";

// 因為在 type-config.ts 定義過 isWeb，所以不使用 type，而用 interface 來 extends
interface modalProps extends IisWebProps {
  showModal: Boolean,
  toggleShowModal: () => void
}

export default function Modal({ isWeb, showModal, toggleShowModal }: modalProps): JSX.Element | any{
  function handleToggleShowModal(e:any): void {
    e.preventDefault()
    e.stopPropagation()
    // 確保 showModal = true 才會將 modal 關閉，避免狀態混亂
    showModal === true && toggleShowModal()
  }

  // 必須確保是手機版且 showModal = true 才會跳出 modal
  return !isWeb && showModal && (
    <>
      <div className={styles["modal-container"]}>
        <div className={styles["modal__link-container"]}>
          <Link href="/category" className={styles["modal__link-order"]}>商品訂製</Link>
          <Link href="/author" className={styles["modal__link-author"]}>創作者</Link>
          <button className={styles["modal__link-signin"]}>登入</button>
          <button className={styles["modal__link-cancel"]} onClick={handleToggleShowModal}>
            <Image
              src={modal_cancel}
              alt="modal_cancel"
              width={20}
              height={20}
              priority={true}
            />
          </button>
        </div>
      </div>
    </>
  );
}
