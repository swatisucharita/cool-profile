import React, {PropTypes} from 'react';

const EmailField = ({name, value, placeholder, error, onChange}) => {
    return (
      <div className="form-group">
        <input type="email" value={value} onChange={onChange} name={name} placeholder={placeholder} />
        {error && <span className="error">{error}</span>}
      </div>
    );
};

EmailField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default EmailField;
