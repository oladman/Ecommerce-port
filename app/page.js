import Categories from "./components/categories/Categories";
import Trending from "./components/trending/Trending";
import ProductBoard from "./components/products/ProductBoard";
import ProductBoardCover from "./components/products/ProductBoardCover";
export default function Home() {
  return (
   <div id="wrapper">
    <p>Welcome to our Ecommerce, where we sell beautiful feet wears</p>
   <Categories />
   <Trending />
   <ProductBoardCover/>



   </div>
  );
}
