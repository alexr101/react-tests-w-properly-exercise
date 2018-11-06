import React, { Component } from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
 
const mapStateToProps = state => {
    return { 
        properties: state.property.properties,
    };
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class ConnectedSimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  renderMarkers(map, maps, address) {
    const geocoder = new window.google.maps.Geocoder();
    const bounds = new window.google.maps.LatLngBounds();

    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            const marker = new window.google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            bounds.extend(marker.position);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
    map.fitBounds(bounds);

  }

  componentDidUpdate(prevProps) {
        let key1 = '';
        let key2 = '';
        prevProps.properties.map((p)=> key1 += p.id);
        this.props.properties.map((p)=> key2 += p.id);
        const newProperties = !prevProps.properties.length;
        const propertyOrderChanged = key1 !== key2;

        if(newProperties || propertyOrderChanged) {
            this.loadPropertiesOnMap();
        }

    }

    setMaps(map, maps){
        this.map = map;
        this.maps = maps;
    }

    loadPropertiesOnMap(map, maps) {
 
        this.props.properties.map((property)=>{
            const streetAddress = property.attributes['display-address'] 
            const city = property.attributes.city;
            const state = property.attributes.state;

            const fullAddress = streetAddress + ', ' + city + ', ' + state;
            this.renderMarkers(this.map, this.maps, fullAddress);
            console.log(property);
        })
    }
 
    render() {
        return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAizpPScCL2XazFKeIYHCRJIZtrIX7i8BI' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onGoogleApiLoaded={({map, maps}) => this.setMaps(map, maps)}
            >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
            />
            
            </GoogleMapReact>
        </div>
        );
  }
}
const SimpleMap = connect(mapStateToProps)(ConnectedSimpleMap);
export default SimpleMap;