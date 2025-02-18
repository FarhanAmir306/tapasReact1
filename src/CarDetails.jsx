import React from "react";
import PropTypes from "prop-types";

function CarDetails({car}) {
  const { title, brand, year, price, isPremium } = car;
  return (
    <>
      <div className="w-[400px] shadow-lg rounded-lg p-5 space-y-0.5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p><span className="font-bold">Brand:</span>{brand}</p>
        <p><span className="font-bold">Year:</span>{year}</p>
        <p><span className="font-bold">Price:</span>{price}</p>
        <p><span className="font-bold">Premium:</span>{isPremium ?'Yes':'No'}</p>
      </div>
    </>
  );
}

CarDetails.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarDetails;
