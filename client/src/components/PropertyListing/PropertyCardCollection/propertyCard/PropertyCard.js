import React, {Component} from 'react';
import './PropertyCard.css';

class PropertyCard extends Component {
    render(){
        return (
            <div className="propertyCard">
                <div className="imageContainer">
                    <image className="leftArrow" src=""></image>
                    <image className="propertyImg" src=""></image>
                    <image className="rightArrow" src=""></image>
                </div>
                <div class="propertyInfo">
                    <strong>Address:{this.props.address}</strong>
                    <p>Price {this.props.price}</p>
                    <p>Details {this.props.details}</p>
                </div>
            </div>
        )
    }
}

export default PropertyCard;