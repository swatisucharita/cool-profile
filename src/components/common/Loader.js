import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Loader extends React.Component {
  render(){
    let loaderClass = classNames({
      'loader': true,
      'hidden': !(this.props.ajaxCallsCount > 0)
    });

    // return (<div className={loaderClass}>
    //   Loading...
    //   <div className="ball bouncer bg-gull-gray"></div>
    //   <div className="ball bouncer bg-gull-gray"></div>
    //   <div className="ball bouncer bg-gull-gray"></div>
    //   </div>);

    return(<div className={loaderClass}>
        <svg
          version="1.1"
          id="L4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
          <circle fill="#333" stroke="none" cx="44" cy="20" r="1">
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>
          </circle>
          <circle fill="#333" stroke="none" cx="47" cy="20" r="1">
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>
          </circle>
          <circle fill="#333" stroke="none" cx="50" cy="20" r="1">
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>
          </circle>
        </svg>
      </div>);
  }
}

Loader.propTypes = {
  ajaxCallsCount: PropTypes.number.isRequired
};


function mapStateToProps(state, ownProps){
  return {
    ajaxCallsCount: state.ajaxCallsCount
  };
}

export default connect(mapStateToProps)(Loader);
