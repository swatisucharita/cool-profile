import React, {PropTypes} from 'react';

const SelectField = ({name, value, options, defaultOption, onChange}) => {
    return (
      <div className="form-group">
        <select name={name} className="form-control" selected={value} onChange={onChange}>
          <option value="">Choose</option>
          {options.map((option) => {
            return <option value={option.value}>{option.text}</option>;
          })}
        </select>
      </div>
    );
};

SelectField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

export default SelectField;
