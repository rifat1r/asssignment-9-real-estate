import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";

const CardDetails = () => {
  const { id } = useParams();
  const cards = useLoaderData();
  const card = cards.find((card) => card.id == id);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = card;
  console.log(card);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Helmet>
        <title>LiveLux | Estate Details</title>
      </Helmet>
      <div>
        <img className="w-full lg:w-[3000px]" src={image} />
      </div>
      <div className="space-y-3 lg:space-y-6">
        <div>
          <span
            className="bg-red-500  font-medium px-4 py-1 rounded text-white mr-1
          "
          >
            {status}
          </span>
          <span className="bg-red-500  font-medium px-4 py-1 rounded text-white">
            {segment_name}
          </span>
        </div>
        <h2 className="text-4xl font-semibold text-gray-400">{estate_title}</h2>
        <p>
          {facilities[0]},{facilities[1]}
          {facilities[2]},{facilities[3]},{facilities[4]}
        </p>
        <p className="flex items-center gap-1 font-light">
          {" "}
          <SlLocationPin /> {location}
        </p>
        <hr />
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
