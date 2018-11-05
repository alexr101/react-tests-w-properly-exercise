import React, {Component} from 'react';
import PropertyCard from './propertyCard/PropertyCard';
import {getProperties} from '../../../api/property';
import {Grid, Row, Col} from 'react-bootstrap';

import './PropertyCardCollection.css';

class PropertyCardCollection extends Component {

    constructor(){
        super();
        this.getProperties = this.getProperties.bind(this);

    }

    getProperties(){
        let address = 'address';
        let price = 1.99;
        let details = 'details';

        return [1, 2, 3, 4].map((id)=>
            <Col sm={12} md={12} lg={6}>
                <PropertyCard 
                    key={id}
                    address={address}
                    price={price}
                    details={details}
                />
            </Col>

        )
    }

    render(){
        this.properties = this.getProperties();

        return (
            <div>
                <Row>
                    {this.properties}
                </Row>
            </div>
        )
    }
}

export default PropertyCardCollection;