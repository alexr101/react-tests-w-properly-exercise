import React, {Component} from 'react';
import TextTruncate from 'react-text-truncate'; // recommend

import './PropertyCard.css';

class PropertyCard extends Component {
    render(){
        return (
            <div className="propertyCard">
                <div className="imageContainer">
                    <img className="propertyImg" src={this.props.img} alt="property"></img>
                </div>
                <div className="propertyInfo">
                    <strong>Address:{this.props.address}</strong>
                    <p>Price {this.props.price}</p>
                    <TextTruncate
                        line={3}
                        truncateText="…"
                        text={'Details: ' + this.props.details}
                    />
                </div>
            </div>
        )
    }
}

export default PropertyCard;