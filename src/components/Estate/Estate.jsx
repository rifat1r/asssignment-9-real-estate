import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";

const Estate = () => {
  const [estate, setEstate] = useState([]);
  useEffect(() => {
    fetch("estate.json")
      .then((res) => res.json())
      .then((data) => setEstate(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl">Estates:{estate.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {estate.map((aEstate) => (
          <EstateCard key={aEstate.id} aEstate={aEstate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estate;
