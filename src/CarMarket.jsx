
import Header from './Header'
import SearchBar from './SearchBar'
import CarList from './CarList'
import { useState } from 'react'
import CheckBox from './CheckBox'

const CAR = [   
  { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
  { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
  { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
  { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
  { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
]

function CarMarket() {
  const [search, setSearch] = useState("");
  const [premium, setPremium] = useState(false);

  const handlePremium = () => {
    setPremium((prev) => !prev); 
  };
  return (
     <>
        <div className="min-h-screen bg-gray-100 p-8">
          <div className='flex justify-between items-center gap-4 mb-8 p-6 bg-white rounded-lg shadow-md'>
            <Header />
            <SearchBar search={search} setSearch={setSearch} />
            <CheckBox handlePremium={handlePremium} premium={premium}/>
          </div>
          <div className="px-6">
            <CarList cars={CAR} search={search} premium={premium} />
          </div>
        </div>
     </>
  );
}

export default CarMarket