import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateApiParams} from '../../../store/actions/property';
import {Row, Col, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './FilterTab.css';


const mapDispatchToProps = dispatch => {
    return {
        updateApiParams: (params) => {
            dispatch( updateApiParams(params) ) 
        }
    }
}

const mapStateToProps = state => {
    return { 
        propertyApiParams: state.property.apiParams,
    };
}

class ConnectedFilterTab extends Component {

    constructor(){
        super();
        this.propertyApiParams = {}
    }

    updatePropertyParams(type, e){
        this.props.propertyApiParams[type] = e.target.value;
        this.props.updateApiParams(this.props.propertyApiParams)
    }

    render(){
        return (
            <Form>
                <Row>
                    <Col sm={12} md={4} lg={2}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Price</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={(e)=>this.updatePropertyParams('price', e)}>
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
                            <FormControl componentClass="select" placeholder="select" onChange={(e)=>this.updatePropertyParams('bed', e)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Bath</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={(e)=>this.updatePropertyParams('bath', e)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={12} md={4} lg={2} className="pull-right">
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Sort</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={(e)=>this.updatePropertyParams('sort', e)}>
                                <option value="listing-price">Listing Price</option>
                                <option value="display-address">Address</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}
const FilterTab = connect(mapStateToProps, mapDispatchToProps)(ConnectedFilterTab);
export default FilterTab;