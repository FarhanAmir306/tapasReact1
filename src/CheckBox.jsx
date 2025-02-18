import React from 'react'


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

export default CheckBox