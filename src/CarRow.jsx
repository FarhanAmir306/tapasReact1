import React from 'react'
import CarDetails from './CarDetails'
import PropTypes from 'prop-types'

function CarRow({ car }) {
  return (
    <CarDetails car={car}/>
  );
}
CarRow.propTypes = {
  car: PropTypes.object.isRequired
}


export default CarRow