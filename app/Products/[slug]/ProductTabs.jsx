import Link from "next/link";
import styles from "./ProductTabs.module.css";
import { headers } from "next/headers";

export default async function ProductTabs({ searchParams, description, slug }) {
  // Await headers()
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  // Await searchParams if needed
  const params = await searchParams;
  const activeTab = params?.tab ?? "details";

  let ratingsData = null;
  let commentsData = null;

  if (activeTab === "ratings") {
    const res = await fetch(`${baseUrl}/api/products/${slug}/ratings`, { cache: "no-store" });
    if (res.ok) ratingsData = await res.json();
  }

  if (activeTab === "discussion") {
    const res = await fetch(`${baseUrl}/api/products/${slug}/comments?page=1&limit=10`, { cache: "no-store" });
    if (res.ok) commentsData = await res.json();
  }

  return (
    <div className={styles["tabs-container"]}>
      <div className={styles["tabs"]}>
        <Link href="?tab=details" className={`${styles["tab"]} ${activeTab === "details" ? styles["active"] : ""}`}>Details</Link>
        <Link href="?tab=ratings" className={`${styles["tab"]} ${activeTab === "ratings" ? styles["active"] : ""}`}>
          Ratings{ratingsData?.total !== undefined && <span>({ratingsData.total})</span>}
        </Link>
        <Link href="?tab=discussion" className={`${styles["tab"]} ${activeTab === "discussion" ? styles["active"] : ""}`}>
          Comment {commentsData?.pagination?.total !== undefined && <span>({commentsData.pagination.total})</span>}
        </Link>
      </div>

      <div className={styles["content"]}>
        {activeTab === "details" && (
          <div className={styles["details-tab"]}>
            <h3>Description</h3>
            <p>{description ?? "No description available."}</p>
          </div>
        )}

        {activeTab === "ratings" && ratingsData && (
          <div className={styles["ratings-tab"]}>
            <h3>⭐ {ratingsData.avgRating ? ratingsData.avgRating.toFixed(1) : "0.0"} / 5</h3>
            {ratingsData.ratings.length === 0 ? <p>No ratings yet.</p> :
              ratingsData.ratings.map(r => <p key={r.id}>⭐ {r.rating}</p>)}
          </div>
        )}

        {activeTab === "discussion" && commentsData && (
          <div className={styles["discussion-tab"]}>
            {commentsData.comments.length === 0 ? <p>No comments yet.</p> :
              commentsData.comments.map(c => (
                <div key={c.id} className={styles["comment"]}>
                  <p>{c.content}</p>
                  <small>{new Date(c.createdAt).toLocaleDateString()}</small>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
}
