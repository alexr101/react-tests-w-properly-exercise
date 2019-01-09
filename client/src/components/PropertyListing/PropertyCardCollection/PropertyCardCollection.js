import React, {Component} from 'react';
import {connect} from 'react-redux';
import {propOrderChanged} from '../../helpers';
import PropertyCard from './propertyCard/PropertyCard';
import PropertyApi from '../../../api/property';
import {Row, Col} from 'react-bootstrap';
import {updateProperties, updateProperty} from '../../../store/actions/property';
import './PropertyCardCollection.css';

const mapDispatchToProps = dispatch => {
    return {
        updateProperties: (properties) => {
            dispatch( updateProperties(properties) ) 
        },
        updateProperty: (property) => {
            dispatch( updateProperty(property) ) 
        },
    }
}

const mapStateToProps = state => {
    return { 
        properties: state.property.properties,
        propertyApiParams: state.property.apiParams,
    };
}

class ConnectedPropertyCardCollection extends Component {

    constructor(props){
        super(props);
        this.getProperties();
        this.getProperties = this.getProperties.bind(this);
    }

    getProperties(){
        PropertyApi.getAll(this.props.propertyApiParams)
            .then((res)=>{
                const properties = res.data.data;
                this.props.updateProperties(properties);
            })
            .catch((err)=> console.log(err) );
    }

    componentDidUpdate(prevProps) {
        const newProperties = !prevProps.properties.length;
        const gotProperties = this.props.properties.length;
        const propertyOrderChanged = propOrderChanged(prevProps, this.props);

        if((newProperties && gotProperties) || propertyOrderChanged) {
            this.getIndividualPropertyData();
        }

        const apiParamsChanged = JSON.stringify(prevProps.propertyApiParams) !== JSON.stringify(this.props.propertyApiParams); // this comparison is not 100% acurrate
        
        if(apiParamsChanged) {
            console.log('api params changed');
            
            this.getProperties();
        }
    }

    getIndividualPropertyData() {
        this.props.properties.map(async (property, i)=>{
            const id = property.id;
            const photosPromise = this.getPhotos(id);
            const attributePromise = this.getAttributes(id);
            const [photos, attributes] = await Promise.all([photosPromise, attributePromise]);
            let newProperty = {
                ...property
            }
            newProperty.photos = photos;
            newProperty.extraAttributes = attributes;
            
            this.props.updateProperty(newProperty);
        })
    }

    async getPhotos(id){
        return PropertyApi.getPhotos(id)
    }
    async getAttributes(id){
        return PropertyApi.getAttributes(id)
    }

    renderProperties(){
        return this.props.properties.map((property)=> {
            let img = '';
            let details = '';

            if(property.photos && property.photos.data.data.length) 
                img = property.photos.data.data[0].attributes['photo-url'];
            else 
                img = '/images/placeholder.jpg'
            if(property.extraAttributes) 
                details = property.extraAttributes.data.data.attributes.remarks;

            return (
                <Col sm={12} md={12} lg={6} key={property.id}>
                    <PropertyCard 
                        img={img}
                        address={property.attributes['display-address']}
                        price={property.attributes['listing-price']}
                        details={details}
                    />
                </Col>
            )
        })
    }

    render(){
        return (
            <div>
                <Row>
                    {this.renderProperties()}
                </Row>
            </div>
        )
    }
}

const PropertyCardCollection = connect(mapStateToProps, mapDispatchToProps)(ConnectedPropertyCardCollection);
export default PropertyCardCollection;