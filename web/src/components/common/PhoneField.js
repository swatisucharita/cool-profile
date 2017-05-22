import React, {PropTypes} from 'react';

const PhoneField = ({name, value, placeholder, error, onChange}) => {
    return (
      <div className="form-group">
        <input type="tel" value={value} onChange={onChange} name={name} placeholder={placeholder} />
        {error && <span className="error">{error}</span>}
      </div>
    );
};

PhoneField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default PhoneField;
