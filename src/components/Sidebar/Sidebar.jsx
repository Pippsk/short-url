import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.listContainer}>
        <Link href="/features" className={styles.link}>
          Features
        </Link>
        <Link href="/pricing" className={styles.link}>
          Pricing
        </Link>
        <Link href="/resources" className={styles.link}>
          Resources
        </Link>
      </div>
      <div className={styles.auth}>
        <button className={styles.login}>Log In</button>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Sidebar;
