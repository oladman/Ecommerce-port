import HomeTopCategories from "./components/AllHomeCategories/HomeTopCategories/Categories";
import Trending from "./components/trending/Trending";
import ProductBoardCover from "./components/AllHomeCategories/ProductBoardCover";
import Benefit from "./components/Benefits/Benefit";
import { auth, signOut } from "../auth"; 
import styles from "./page.module.css";
import Carousel from "./components/Carousel/Carousel";
import HeroSection from "./components/hero/HeroSection";

export default async function Home() {
  const session = await auth(); // Get session data

  return (
    <div id="wrapper">
         {/*<Carousel /> */}
         <HeroSection />
      {/* Show only if user is logged in */}
      {session && (
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
      )}

   
      <HomeTopCategories />
     {/* <Benefit /> */}
      <Trending />
      <ProductBoardCover />
    </div>
    
  );
}
