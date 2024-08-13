"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css"; //.module.css 파일은 자파스크립트 파일인 것처럼 해야한다.

export default function Navigation() {
  const path = usePathname(); //usePathname: 현재 url을 확인할 수 있는 훅. 쿼리스트링 값은 제외하고 가져온다.
  const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {/* 현재 페이지가 홈인지 확인 */}
          {path === "/" ? " 👈🏻" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {/* 현재 페이지가 about-us인지 확인 */}
          {path === "/about-us" ? " 👈🏻" : ""}
        </li>
        <li>
          <button onClick={() => setCount(count + 1)}>
            클릭해보세요: {count}
          </button>
        </li>
      </ul>
    </nav>
  );
}
