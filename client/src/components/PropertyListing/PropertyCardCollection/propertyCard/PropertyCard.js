import React, {Component} from 'react';
import './PropertyCard.css';

class PropertyCard extends Component {
    render(){
        return (
            <div className="propertyCard">
                <div className="imageContainer">
                    <img className="leftArrow" src=""></img>
                    <img className="propertyImg" src=""></img>
                    <img className="rightArrow" src=""></img>
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