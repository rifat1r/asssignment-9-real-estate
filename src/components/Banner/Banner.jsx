import { MdOutlineMapsHomeWork } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import { FaHotel } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item  w-full ">
          <img
            src="https://i.postimg.cc/1tVWsvcg/slide1.jpg"
            className="w-full h-full md:h-4/5  rounded-2xl my-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item w-full">
          <img
            src="https://i.postimg.cc/HWFLYzXQ/slide2.jpg"
            className="w-full h-full md:h-4/5 rounded-2xl my-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item w-full">
          <img
            src="https://i.postimg.cc/MKcjtXbY/slide3.jpg"
            className="w-full h-full md:h-4/5  rounded-2xl my-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item w-full">
          <img
            src="https://i.postimg.cc/yYV7YGW3/slide4.jpg"
            className="w-full h-full md:h-4/5  rounded-2xl my-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-2 md:top-1/2 right-1/4 space-y-4 ">
        <h3 className="btn btn-outline rounded-full text-center text-white">
          LET US GUIDE YOUR HOME
        </h3>
        <h2 className="text-lg md:text-4xl font-bold text-white">
          Believe in finding it
        </h2>
        <p className="text-white font-medium hidden md:block">
          What are you looking for?
        </p>
        <div className="flex gap-3 flex-col-reverse md:flex-row-reverse">
          <span className="flex items-center gap-1 text-xl font-medium bg-white opacity-50 rounded-full p-2">
            <LuBuilding2 />
            Apartments
          </span>
          <span className="flex items-center gap-1 text-xl font-medium bg-white opacity-50 rounded-full p-2">
            <MdOutlineMapsHomeWork />
            Single-family houses
          </span>
          <span className="flex items-center gap-1 text-xl font-medium bg-white opacity-50 rounded-full p-2">
            <FaHotel />
            Vacation rentals
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
