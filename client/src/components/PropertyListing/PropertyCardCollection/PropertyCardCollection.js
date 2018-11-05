import React, {Component} from 'react';
import PropertyCard from './propertyCard/PropertyCard';
import PropertyApi from '../../../api/property';
import {Row, Col} from 'react-bootstrap';

import './PropertyCardCollection.css';

class PropertyCardCollection extends Component {

    constructor(){
        super();
        this.getProperties();
        this.getProperties = this.getProperties.bind(this);
    }

    getProperties(){
        PropertyApi.getAll()
            .then((res)=>{
                const properties = res.data.data;
                this.properties = properties;
                this.getIndividualPropertyData();
                this.forceUpdate()
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    getIndividualPropertyData() {
        this.properties.map(async (property)=>{
            const id = property.id;
            const photosPromise = this.getPhotos(id);
            const attributePromise = this.getAttributes(id);
            const [photos, attributes] = await Promise.all([photosPromise, attributePromise]);
            property.photos = photos;
            property.extraAttributes = attributes;
            this.forceUpdate()
        })
    }

    async getPhotos(id){
        return PropertyApi.getPhotos(id)
    }
    async getAttributes(id){
        return PropertyApi.getAttributes(id)
    }

    renderProperties(){
        return this.properties.map((property)=> {
            let img = '';
            let details = '';

            if(property.photos && property.photos.data.data.length) 
                img = property.photos.data.data[0].attributes['photo-url'];
            if(property.extraAttributes) 
                details = property.extraAttributes.data.data.attributes.remarks;

            return (
                <Col sm={12} md={12} lg={6}>
                    <PropertyCard 
                        img={img}
                        key={property.id}
                        address={property.attributes['display-address']}
                        price={property.attributes['listing-price']}
                        details={details}
                    />
                </Col>
            )
        })
    }

    render(){
        if(!this.properties) this.properties = [];
        
        return (
            <div>
                <Row>
                    {this.renderProperties()}
                </Row>
            </div>
        )
    }
}

export default PropertyCardCollection;