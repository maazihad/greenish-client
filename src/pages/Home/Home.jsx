import BannerSlider from '../../Components/Home/Banner/BannerSlider';
import ExploreCategory from '../../Components/Home/ExploreCategory/ExploreCategory';
import FridayOffer from '../../Components/Home/FridayOffer/FridayOffer';
import HeroSection from '../../Components/Home/HeroSection/HeroSection';
import ProductHighlightSection from '../../Components/Home/ProductHighLightSection/ProductHighLightSection';
const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <ExploreCategory></ExploreCategory>
      <HeroSection></HeroSection>
      <ProductHighlightSection></ProductHighlightSection>
      <FridayOffer></FridayOffer>
    </div>
  );
};

export default Home;
