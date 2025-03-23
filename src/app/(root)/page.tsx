import AddToCart from "@/components/Cart/AddToCart";
import HeroSlider from "@/components/Home/HeroSlider";
import Products from "@/components/Home/products/Products";
import ServicesInfo from "@/components/Home/ServicesInfo";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesInfo />
      <Products />
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-50">
        <AddToCart />
      </div>
    </div>
  );
};

export default HomePage;
