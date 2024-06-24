import { SlLocationPin } from "react-icons/sl";
import { TbToolsKitchen } from "react-icons/tb";
import { MdPool } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const EstateCard = ({ aEstate }) => {
  const {
    id,
    estate_title,
    location,
    price,
    status,
    facilities,
    area,
    segment_name,
    image,
    description,
  } = aEstate;
  return (
    <div className="rounded-xlbg-base-100 shadow-xl">
      <figure className="relative">
        <img
          className="p-4 rounded-3xl w-[720px] md:w-[440px] h-[450px] md:h-[250px] mx-auto"
          src={image}
        />
        <span className="absolute top-48 left-8  bg-white px-2 py-1 rounded-lg">
          {segment_name}
        </span>
        <span className="absolute top-8 left-8 bg-black text-white opacity-50 px-2 rounded-lg">
          For {status}
        </span>
        <Link to={`/card/${id}`}>
          <span className="absolute right-8 top-8 text-2xl px-2 rounded-lg opacity-70">
            <FaEye />
          </span>
        </Link>
      </figure>
      <div className="card-body">
        <div className="flex justify-between ">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">{estate_title}</h2>
            <p className="flex items-center gap-1 ">
              <SlLocationPin />
              {location}
            </p>
          </div>
          <div className=" text-lg font-medium text-gray-400">
            <p>{price}</p>
            <p>{area}</p>
          </div>
        </div>
        <hr />
        <div className="flex ">
          <p className="flex items-center gap-1">
            <FaBed />
            {facilities[0]}
          </p>
          <p className="flex items-center gap-1">
            <MdPool />
            {facilities[1]}
          </p>
          <p className="flex items-center gap-1">
            <TbToolsKitchen />
            {facilities[2]}
          </p>
        </div>
        <p className="text-gray-400 text-xl font-semibold text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EstateCard;
