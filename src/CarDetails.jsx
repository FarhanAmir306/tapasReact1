import React from "react";
import PropTypes from "prop-types";

function CarDetails({car}) {
  const { title, brand, year, price, isPremium } = car;
  return (
    <>
      <div className="w-[400px] shadow-lg rounded-lg p-8 space-y-4 bg-slate-50 hover:shadow-xl transition-shadow duration-300 border border-gray-200 m-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">{title}</h1>
        <p className="text-gray-600"><span className="font-bold">Brand: </span>{brand}</p>
        <p className="text-gray-600"><span className="font-bold">Year: </span>{year}</p>
        <p className="text-gray-600">{price}</p>
        <p className="text-gray-600"><span className="font-bold">Price: </span> 
          <span className="text-green-600 font-semibold">${car.price.toLocaleString()}</span>
        </p>
        {car.isPremium && 
          <span className="inline-block bg-blue-200 text-blue-700 font-bold px-4 py-2 rounded-full text-sm mt-3">
            Premium
          </span>
        }
      </div>
    </>
    
  );
}

CarDetails.propTypes = {
  car: PropTypes.object.isRequired
}

export default CarDetails;
