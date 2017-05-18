import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import RegistrationForm from './RegistrationForm';
import {browserHistory} from 'react-router';

class RegisterUserPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      user: props.user,
      errors: {}
    };
    this.insertValues = this.insertValues.bind(this);
    this.addUser = this.addUser.bind(this);
    this.isValidUser = this.isValidUser.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  insertValues(event){
    const {errors} = this.state;

    let name = event.target.name,
      user = this.state.user;

    user[name] = event.target.value;

    if (errors[name]){
      this.validateUser(name);
    }

    this.setState({user: user});
  }

  validateUser(attr=''){
    const manadatoryAttributes = ['firstName', 'lastName', 'email'];
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const user = this.state.user;
    let errors = this.state.errors;

    if(attr) {
      errors[attr] = '';
      if (!user[attr]){
        errors[attr] = "can't be blank";
      }

      this.setState({errors: errors});
      return errors[attr];
    }

    manadatoryAttributes.forEach(attr => {
      if (!user[attr]){
        errors[attr] = "can't be blank";
      }
    });

    this.setState({errors: errors});
    return errors;
  }

  isValidUser(){
    let errors = this.validateUser();

    return (Object.values(errors).every(error => !error));
  }

  addUser(event){
    event.preventDefault();
    if (!this.isValidUser()){
      return;
    }

    this.props.actions.registerUser(this.state.user).then(() => {
      this.context.router.push('/');
    });
  }

  render(){
    return (
      <RegistrationForm
        user={this.props.user}
        onChange={this.insertValues}
        onSubmit={this.addUser}
        errors={this.state.errors} />
    );
  }
}

RegisterUserPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

RegisterUserPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state){
  let user = {name: '', email: '', phoneNumber: '', address: {}};

  return {
    user: user
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserPage);
