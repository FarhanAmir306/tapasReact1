import React from 'react'
import CarDetails from './CarDetails'
import PropTypes from 'prop-types'


function CarRow({car}) {
  return (
    <>
        <div className="rounded-lg ">
            <CarDetails car={car}/>
        </div>
    </>
  )
}

CarRow.propTypes = {
  car: PropTypes.object.isRequired
}


export default CarRow