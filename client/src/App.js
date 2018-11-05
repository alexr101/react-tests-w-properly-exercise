import React, { Component } from 'react';
import './App.css';
import PropertyListing from './components/PropertyListing/PropertyListing';
import {Row, Col} from 'react-bootstrap';

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
