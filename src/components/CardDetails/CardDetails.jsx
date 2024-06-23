import { useLoaderData, useParams } from "react-router-dom";

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
      <div>
        <img src={image} />
      </div>
      <div className="space-y-1">
        <h2 className="text-3xl">{estate_title}</h2>
        <h3 className="text-xl">Status: {status}</h3>
        <h3 className="text-xl"> {segment_name}</h3>
        <p>
          Facilities: {facilities[0]},{facilities[1]}
          {facilities[2]},{facilities[3]},{facilities[4]}
        </p>
        <p>Location: {location}</p>
        <p>Description : {description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
