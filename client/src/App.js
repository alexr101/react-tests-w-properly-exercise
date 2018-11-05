import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/component1/component1';
import PropertyListing from './components/PropertyListing/PropertyListing';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col sm={12} md={6}>
            <PropertyListing></PropertyListing>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
