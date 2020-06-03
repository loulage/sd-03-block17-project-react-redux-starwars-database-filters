import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './components/Table';
import { fetchData } from './action/index';
import InputFilter from './components/InputFilter';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.fetchUrl();
  }

  fetchUrl() {
    const { request } = this.props;
    request();
  }

  render() {
    return (
      <div>
      <InputFilter />
      <Table />
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  request: (e) => dispatch(fetchData(e)),
});


App.propTypes = {
  request: PropTypes.func,
};

App.defaultProps = {
  request: PropTypes.func,
};
export default connect(null, mapDispatchToProps)(App);
