import React, { useState } from 'react';

function FormTextArea({ labelName }) {

  const [hasFocus, setHasFocus] = useState(true);

  const handleInputChange = (event) => {
    if (event.target.value.length > 0) {
      setHasFocus(false);
    } else {
      setHasFocus(true);
    }
  };

  return (
    <div className="form-group">
      <textarea
        onChange={handleInputChange}
        className="form-control contact__message"
        name="mensaje"
        required
        rows="10"></textarea>
      {hasFocus && <label className="input__label">{labelName}</label>}

    </div>
  );

}

export default FormTextArea;