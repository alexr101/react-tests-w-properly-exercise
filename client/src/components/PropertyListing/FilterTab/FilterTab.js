import React, {Component} from 'react';
import {Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './FilterTab.css';

class FilterTab extends Component {
    render(){
        return (
            <Form>
                    <Row>
                        <Col sm={12} md={4} lg={2}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Price</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="100000-199999">100,000 - 199,999</option>
                                    <option value="200000-299999">200,000 - 299,999</option>
                                    <option value="300000-399999">300,000 - 399,999</option>
                                    <option value="400000-499999">400,000 - 499,999</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col sm={12} md={4} lg={2}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Bed</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="100000-199999">100,000 - 199,999</option>
                                    <option value="200000-299999">200,000 - 299,999</option>
                                    <option value="300000-399999">300,000 - 399,999</option>
                                    <option value="400000-499999">400,000 - 499,999</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col sm={12} md={4} lg={2}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Bath</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="100000-199999">100,000 - 199,999</option>
                                    <option value="200000-299999">200,000 - 299,999</option>
                                    <option value="300000-399999">300,000 - 399,999</option>
                                    <option value="400000-499999">400,000 - 499,999</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col sm={12} md={4} lg={2}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Filters</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="100000-199999">100,000 - 199,999</option>
                                    <option value="200000-299999">200,000 - 299,999</option>
                                    <option value="300000-399999">300,000 - 399,999</option>
                                    <option value="400000-499999">400,000 - 499,999</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col sm={12} md={4} lg={2} className="pull-right">
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Sort</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="100000-199999">100,000 - 199,999</option>
                                    <option value="200000-299999">200,000 - 299,999</option>
                                    <option value="300000-399999">300,000 - 399,999</option>
                                    <option value="400000-499999">400,000 - 499,999</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
            </Form>
        )
    }
}

export default FilterTab;