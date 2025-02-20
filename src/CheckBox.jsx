import React from 'react'
import { PropTypes } from "prop-types";

function CheckBox({handlePremium,premium}) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          checked={premium}
          onChange={handlePremium}  
        />
        <label className="form-check-label  ps-1 font-bold" htmlFor="flexCheckDefault">
          Show Premium Only
        </label>
      </div>
    </>
  );
}

CheckBox.propTypes = {
  handlePremium: PropTypes.func.isRequired,
  premium: PropTypes.bool.isRequired,
 };


export default CheckBox