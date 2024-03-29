import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList';
const newsMain = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        settings={{ dots: false }}
        start={0}
        amount={3}
      />
      <NewsList type="cardMain" loadMore={true} start={3} amount={10} />
    </div>
  );
};
export default newsMain;
