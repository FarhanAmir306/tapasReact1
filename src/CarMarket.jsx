
import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import CarList from './CarList'



function CarMarket() {
  return (
    <>
        <div className="mx-auto p-4">
        <Header />
        <SearchBar />
        <CarList />
        </div>
    </>
  )
}

export default CarMarket