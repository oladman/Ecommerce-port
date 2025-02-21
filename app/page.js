import Categories from "./components/categories/Categories";
import Trending from "./components/trending/Trending";
import ProductBoardCover from "./components/allCategories/ProductBoardCover";
import Benefit from "./components/Benefits/Benefit";
export default function Home() {
  return (
   <div id="wrapper">
   <Categories />
   <Benefit />
   <Trending />
   <ProductBoardCover/>



   </div>
  );
}
