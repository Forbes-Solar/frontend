import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useGetAllProductsQuery } from "../redux/productsApi";
import TopNavbar from "../components/Nav/TopNavbar";
import Naira from "react-naira"



const ProductList = () => {
 // eslint-disable-next-line no-unused-vars
  const {products,  status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  

  const { data } = useGetAllProductsQuery();
  console.log(data)
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
            {data&&
            data?.map((product) => (
                <div key={product.id} className="product">
                  
                  <img src={product.img} alt={product.title} />
                  
                 <h5><Link to={`/product/${product._id}`}>{product.title}</Link></h5>
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

export default ProductList;
