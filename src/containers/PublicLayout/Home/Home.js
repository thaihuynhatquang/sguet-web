import React from "react";
import HomeBanner from "components/PublicLayout/Home/HomeBanner";

const Home = (props) => {
  const { isMobile } = props;
  return <HomeBanner isMobile={isMobile} />;
};

export default Home;
