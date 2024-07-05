import PropTypes  from "prop-types";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIcon } from "@heroicons/react/16/solid";

const Model = ({profil,date,titre,desc,imgUrl}) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <>
      {/* <Slider {...settings}>
        {slides.map(slide => ( */}
          <div className="w-3/5 mx-auto border rounded-lg p-5">
             <div className="flex justify-between">
                <div className="profil flex gap-3">
                  <div className='w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center p-1'>
                    <img src={imgUrl} className="h-6 w-6" alt=""/>
                  </div>
                  <div>
                    <h4 className="font-bold font-sans">{profil}</h4>
                    <p className="font-sans ">{date}</p>
                  </div>
                </div>
                <div className="icone flex gap-2">
                  <StarIcon className="h-4 w-4 text-orange-500" />
                  <StarIcon className="h-4 w-4 text-orange-500" />
                  <StarIcon className="h-4 w-4 text-orange-500" />
                  <StarIcon className="h-4 w-4 text-orange-500" />
                  <StarIcon className="h-4 w-4 text-orange-500" />
                </div>
             </div>
              <h4 className="font-semibold px-3 mt-3 display">{titre}</h4>
              <div className=" px-3 mb-3 md:w-block">
                <p className="text-xs leading-5 font-sans">{desc}</p>
              </div>
          </div>
        {/* ))}
      </Slider> */}
    </>
  );
};

Model.propTypes = {
  profil: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default Model;
