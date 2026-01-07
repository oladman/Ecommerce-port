"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./ProductBoardCover.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductBoardWrapper from "./ProductBoardWrapper";
import { PRODUCT_BOARDS } from "./productBoards.config";

export default function ProductBoardCover() {
  return (
    <>
      {PRODUCT_BOARDS.map((board) => (
        <BoardRow key={board.slug} board={board} />
      ))}
    </>
  );
}

function BoardRow({ board }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = scrollRef.current.clientWidth * 0.8;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles["List-start"]}>
      <div className={styles["Category-body"]}>
        <div className={styles["Category-name"]}>{board.title}</div>

        <Link href={`/${board.slug}`} className={styles["Category-angle"]}>
          Show All
        </Link>
      </div>

      <div className={styles["Scroll-wrapper"]}>
        <button
          className={`${styles["scroll-btn"]} ${styles.left}`}
          onClick={() => scroll("left")}
        >
          ‹
        </button>

        <div className={styles["Cat-Scroll"]} ref={scrollRef}>
          <ProductBoardWrapper apiRoute={board.apiRoute} limit={10} />
        </div>

        <button
          className={`${styles["scroll-btn"]} ${styles.right}`}
          onClick={() => scroll("right")}
        >
          ›
        </button>
      </div>
    </div>
  );
}
