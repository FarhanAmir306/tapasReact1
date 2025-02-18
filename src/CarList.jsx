import React from 'react'
import CarRow from './CarRow'

function CarList({cars,search,premium}) {

const rows = [];

cars.forEach((car) => {
  // Check if the title contains the search term
  const matchesSearch = car.title.toLowerCase().includes(search.toLowerCase());

  // Check if premium filter is on, and if the car is premium
  const matchesPremium = !premium || car.isPremium;

  // If both conditions are true, add the car to rows
  if (matchesSearch && matchesPremium) {
    rows.push(<CarRow key={car.id} car={car} />);
  }
});
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rows}
      </div>
    </>
  );
}

export default CarList