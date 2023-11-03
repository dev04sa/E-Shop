/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import Testimonial from "../components/Testimonial";
import Track from "../components/Track";
import { Context } from "../context/MyState"
import { addToCart, deleteToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";

const Home = () => {
  const context=Context();
  // console.log(context.mode)
  

  const dispatch=useDispatch();
  const cartItem=useSelector(state => state.cart);

  console.log(cartItem);
  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home