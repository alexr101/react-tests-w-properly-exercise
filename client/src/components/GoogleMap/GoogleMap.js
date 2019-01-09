import React, { Component } from 'react';
import {connect} from 'react-redux';
import {propOrderChanged, getPropertyAddress} from '../helpers';
import GoogleMapReact from 'google-map-react';
import './GoogleMap.css';
 
const mapStateToProps = state => {
    return { 
        properties: state.property.properties,
    };
}

class ConnectedSimpleMap extends Component {
    static defaultProps = {
        center: {
        lat: 59.95,
        lng: 30.33
        },
        zoom: 11
    };

    constructor(props){
        super(props);
        this.state = {
            map: {},
            maps: {},
            bounds: {},
            markers: [],
            infoWindows: []
        }
        this.renderPropertyMarker.bind(this)
        this.updateBounds.bind(this)
        this.clearMarkers.bind(this)
        this.setMaps.bind(this)
        this.resetMapConfig.bind(this)
        this.loadPropertiesOnMap.bind(this)
    }
    renderPropertyMarker(property) {
        const _this = this;
        const geocoder = new window.google.maps.Geocoder();
        const address = getPropertyAddress(property);
        
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                const marker = new window.google.maps.Marker({
                    map: _this.state.map,
                    position: results[0].geometry.location
                });

                const infowindow = new window.google.maps.InfoWindow({
                    content: property.extraAttributes.data.data.attributes.remarks 
                });

                marker.addListener('click', function() {
                    _this.closeInfoWindows();
                    infowindow.open(_this.state.map, marker);
                });

                _this.state.bounds.extend(marker.position);
                _this.state.markers.push(marker);
                _this.state.infoWindows.push(infowindow);
                _this.updateBounds();
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    updateBounds(){
        this.state.map.fitBounds(this.state.bounds);
    }
    
    componentDidUpdate(prevProps) {
        const propertiesListed = 10; // hard coded here...just use a state val later
        // bulky but given the api call order atm it needs to do all these checks so we dont run into an infinite loop
        const propertiesReady = prevProps.properties.length 
            && 'extraAttributes' in this.props.properties[propertiesListed-1]
            && !('extraAttributes' in prevProps.properties[propertiesListed-1])
        const propertyOrderChanged = propOrderChanged(prevProps, this.props);

        // bug here. propertyOrderChanged triggers a loop when changing a filter
        if( propertiesReady || (propertiesReady && propertyOrderChanged)) {
            this.loadPropertiesOnMap();
        }
    }
    closeInfoWindows(){
        while(this.state.infoWindows.length) {
            this.state.infoWindows.pop().close();
        }
    }
    clearMarkers(){
        while(this.state.markers.length) {
            this.state.markers.pop().setMap(null);
        }
    }

    setMaps(map, maps){
        this.setState({
            map: map,
            maps: maps
        })
    }

    resetMapConfig(){
        this.clearMarkers();
        this.setState({
            bounds: new window.google.maps.LatLngBounds()
        })
    }

    loadPropertiesOnMap() {
        this.resetMapConfig();
        this.props.properties.map((property)=>this.renderPropertyMarker(property))
    }
 
    render() {
        return (
        // Important! Always set the container height explicitly
        <div className="googleMap">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAizpPScCL2XazFKeIYHCRJIZtrIX7i8BI' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                onGoogleApiLoaded={({map, maps}) => this.setMaps(map, maps)}
                >
            </GoogleMapReact>
        </div>
        );
    }
}
const SimpleMap = connect(mapStateToProps)(ConnectedSimpleMap);
export default SimpleMap;