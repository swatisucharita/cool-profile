import React, {PropTypes} from 'react';
import classNames from 'classnames';

const EmailField = ({name, value, placeholder, error, onChange}) => {
    let containerClass = classNames({
      'form-group': true,
      'has-danger': !!error
    });

    let inputClass = classNames({
      'form-control': true,
      'error-input': !!error
    });

    return (
      <div className={containerClass}>
        <input className={inputClass} type="email" value={value} onChange={onChange} name={name} placeholder={placeholder} />
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
