import React, {Component} from 'react';
import PropertyCardCollection from './PropertyCardCollection/PropertyCardCollection';
import './PropertyListing.css';

class PropertyListing extends Component {
    render(){
        return (
            <div className="propertyListing">
                <PropertyCardCollection></PropertyCardCollection>
            </div>
        )
    }
}

export default PropertyListing;