import Categories from "./components/categories/Categories";
import Trending from "./components/trending/Trending";
import ProductBoardCover from "./components/allCategories/ProductBoardCover";
import Benefit from "./components/Benefits/Benefit";
import { auth, signOut } from "../auth"; // ✅ Import from next-auth
import styles from "./page.module.css"

export default async function Home() {
  const session = await auth();

  return (
    <div id="wrapper">
      <div className={styles["login-check"]}>
        {JSON.stringify(session)}

        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit" className="login-btn">
            Sign Out
          </button>
        </form>
      </div>

      <Categories />
      <Benefit />
      <Trending />
      <ProductBoardCover />
    </div>
  );
}
