import Image from "next/image";
import styles from "./Header.module.css";
import { HiMenu } from "react-icons/hi";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Image src="/images/logo.svg" width={100} height={25} />
        <HiMenu className={styles.menuBtn} size={25} />
      </header>
      <Sidebar />
    </>
  );
};

export default Header;
