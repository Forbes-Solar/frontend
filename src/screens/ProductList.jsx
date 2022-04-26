import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/cartSlice";
import { useGetAllProductsQuery } from "../redux/productsApi";
import TopNavbar from "../components/Nav/TopNavbar";
import Naira from "react-naira"


const Home = () => {
  const { items:  status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  

  const { data, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   
  };

  return (
    <div className="home-container">
       <TopNavbar/>
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {isLoading}
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.img} alt={product.name} />
                  
                  <div className="details">
                    <span>{product.desc}</span>
                  </div>
                    <span className="price"><Naira>{product.price}</Naira></span>
                
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
