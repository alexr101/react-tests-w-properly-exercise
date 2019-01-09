import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import PropertyListing from './components/PropertyListing/PropertyListing';
import FilterTab from './components/PropertyListing/FilterTab/FilterTab';
import GoogleMap from './components/GoogleMap/GoogleMap';
import {Row, Col} from 'react-bootstrap';

const mapStateToProps = state => {
  return { 
      properties: state.property.properties,
      propertyApiParams: state.property.apiParams,
  };
}

class ConnectedApp extends Component {
  render() {
    return (
      <div className="App">

        <div className="Controls">
          <nav>RealEstate API - REACT/REDUX</nav>
          <FilterTab></FilterTab>
        </div>
        <div className="ControlsPlaceholder"></div>

        <Row>
          <Col sm={12} md={6}>
            <div className="PropertiesHeader">
              <h1 className="AppTitle">View Homes</h1>
              <span>{this.props.properties.length} resuls found</span>
            </div>
            
            <PropertyListing></PropertyListing>
          </Col>
          <Col sm={12} md={6}>
            <GoogleMap></GoogleMap>
          </Col>
        </Row>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);
export default App;
