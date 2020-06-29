import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={3}
        amount={10}
        settings={{
          dots: false,
        }}
      />
    </div>
  );
};

export default Home;
