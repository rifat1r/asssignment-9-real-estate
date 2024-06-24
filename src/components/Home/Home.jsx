import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Estate from "../Estate/Estate";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LiveLux | Home</title>
      </Helmet>
      <Banner></Banner>
      <Estate></Estate>
    </div>
  );
};

export default Home;
