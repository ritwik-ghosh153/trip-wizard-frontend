import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
const MapContainer = ({itinerary}) => {
  const mapStyles = {
    height: "100vh",
    width: "100%"};

  const defaultCenter = {
    lat: itinerary[0].lat, lng: itinerary[0].lng
  }
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyC_qJfJBWq9NFfoqZfQiTbhleir627I4zc'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={8}
          center={defaultCenter}>
          {
            itinerary.map((item, index) => {
              console.log(item)
              return (
              <Marker key={index} position={item} title={item.city}/>
              )
            })
         }
        </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer
