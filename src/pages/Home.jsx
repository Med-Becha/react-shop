
import Products from "../components/products/Products";
import { useSelector } from "react-redux";


const Home = () => {
  const { productsFromSearch } = useSelector((state) => state.products);
  
  return <Products Products={productsFromSearch} />;
};

export default Home;
