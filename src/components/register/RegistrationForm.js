import React, {PropTypes} from 'react';
import TextField from '../common/TextField';
import EmailField from '../common/EmailField';
import PhoneField from '../common/PhoneField';
import SelectField from '../common/SelectField';

const RegistrationForm = ({user, onChange, onSubmit, errors}) => {
    return (
      <div id="registration-page" className="jumbotron">
        <h2 className="text-center">Sign Up</h2>
        <form id="registration-form">
          <TextField
            name={'firstName'}
            value={user.firstName}
            placeholder={'First Name'}
            error={errors.firstName}
            onChange={onChange} />

            <TextField
              name={'lastName'}
              value={user.lastName}
              placeholder={'Last Name'}
              error={errors.lastName}
              onChange={onChange} />

            <TextField
              name={'email'}
              value={user.email}
              placeholder={'Email'}
              error={errors.email}
              onChange={onChange} />

              <TextField
                name={'phoneNumber'}
                value={user.phoneNumber}
                placeholder={'Mobile Number'}
                error={errors.phoneNumber}
                onChange={onChange} />

              <SelectField
                name={'gender'}
                value={user.gender}
                error={errors.gender}
                options={[{value: 'male', text: 'Male'}, {value: 'female', text: 'Female'}]}
                onChange={onChange} />

              <input
                type="submit"
                value="Save"
                onClick={onSubmit}/>
        </form>
      </div>
    );
};

RegistrationForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default RegistrationForm;
