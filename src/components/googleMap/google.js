import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

//note: code formatted for ES6 here
export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
      });


  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map google={this.props.google} onClick={this.onMapClicked}>
        <Marker onClick={()=>this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBqO-IjR3EuqbE8_tqjBawCF6uHmbbspF8",
})(GoogleMap);




// Use State


import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const GoogleMap = () => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(false);
  };
  const onMapClicked = (props) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }

    return (
      <>
        <Map google={props.google} onClick={onMapClicked()}>
          <Marker onClick={onMarkerClick()} name={"Current location"} />
        </Map>
      </>
    );
  };
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBqO-IjR3EuqbE8_tqjBawCF6uHmbbspF8",
})(GoogleMap);
