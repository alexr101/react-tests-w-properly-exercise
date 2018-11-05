import React, {Component} from 'react';
import PropertyCard from './propertyCard/PropertyCard';
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
            <PropertyCard 
                key={id}
                address={address}
                price={price}
                details={details}
            />
        )
    }

    render(){
        this.properties = this.getProperties();

        return (
            <div>
                {this.properties}
            </div>
        )
    }
}

export default PropertyCardCollection;