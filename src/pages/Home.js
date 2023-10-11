import AutoStore from "../layout/AutoStore/AutoStore";
import BrowseUsedCarsOverlay from "../layout/BrowseUsedCarsMain/BrowseUsedCarsOverlay";
import Browsevideos from "../layout/BrowseVideos/Browsevideos";
import ExploreProducts from "../layout/ExploreProducts/ExploreProducts";
import FeaturedCarsOverlay from "../layout/FeaturedCars/FeaturedCarsOverlay";
import FeaturedNewOverlay from "../layout/FeaturedNew/FeaturedNewOverlay";
import Footer from "../layout/Footer/Footer";
import GetPakwheels from "../layout/GetPakwheels/GetPakwheels";
import Homewidget from "../layout/Homewidget/Homewidget";
import LatestUsedBikesOverlay from "../layout/LatestUsedBikes/LatestUsedCarsOverlay";
import LatestUsedCarsOverlay from "../layout/LatestUsedCars/LatestUsedCarsOverlay";
import ManagedByPakwheelsOverlay from "../layout/LatestUsedCars/LatestUsedCarsOverlay";
import Newcars from "../layout/NewCars/Newcars";
import SearchOverlay from "../layout/Searcbox/SearchOverlay";
function Home() {
  return (
    <div>
      <SearchOverlay />
      <Homewidget />
      <LatestUsedCarsOverlay />
      <LatestUsedBikesOverlay />
      <ExploreProducts />
      <AutoStore />
      <Browsevideos />
      <GetPakwheels />
      <Footer />
    </div>
  );
}

export default Home;
