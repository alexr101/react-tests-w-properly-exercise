import React, { Component } from 'react';
import './App.css';
import PropertyListing from './components/PropertyListing/PropertyListing';
import FilterTab from './components/PropertyListing/FilterTab/FilterTab';
import GoogleMap from './components/GoogleMap/GoogleMap';
import {Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="Controls">
          <nav>properly code exercise</nav>
          <FilterTab></FilterTab>
        </div>
        <div className="ControlsPlaceholder"></div>

        <Row>
          <Col sm={12} md={6}>
            <div className="PropertiesHeader">
              <h1 className="AppTitle">View Homes</h1>
              <span>10 resuls found</span>
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

export default App;
