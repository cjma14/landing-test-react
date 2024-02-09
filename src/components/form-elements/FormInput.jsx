import React, { useState } from 'react';

function FormInput({labelName}) {

  const [hasFocus, setHasFocus] = useState(true);

  const handleInputChange = (event) => {
    if(event.target.value.length > 0){
      setHasFocus(false);
    } else {
      setHasFocus(true);
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        onChange={handleInputChange}
      />
      {hasFocus && <label className="input__label">{labelName}</label>}
    </div>
  );
}

export default FormInput;