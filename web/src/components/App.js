import React, {PropTypes} from 'react';
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Loader from './common/Loader';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container" id="main-content">
          <Loader />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
