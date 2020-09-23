import React from 'react';
import { connect } from 'react-redux'
import { getData } from './actions/public-api';
import APIList from './components/api-list/api-list';
import SearchBar from './components/search-bar/search-bar';
import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={(searchString) => this.props.getData(searchString)} />
        <APIList data={this.props.apiList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apiList: state.publicAPI.apiList,
  isLoading: state.publicAPI.isLoading
});

const mapDispatchToProps = dispatch => ({
  getData: (searchString) => dispatch(getData(searchString))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
