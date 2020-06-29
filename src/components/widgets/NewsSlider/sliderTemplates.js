import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';
import style from './slider.css';
const SliderTemplates = (props) => {
  let template = null;
  const settings = {
    dots: true,
    infinete: true,
    arrows: false,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    ...props.settings, // checks if settings has the value that is already here
  };

  switch (props.type) {
    case 'featured':
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={style.featured_item}>
              <div
                className={style.featured_image}
                style={{ background: `url(../images/articles/${item.image})` }}
              ></div>
              <Link to={`/articles/${item.id}`}>
                <div className={style.featured_title}>{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplates;
