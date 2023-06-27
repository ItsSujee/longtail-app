import React, { useState } from "react";
import { Flex } from "native-base";
import MapView, { PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import { useQuery } from "@apollo/client";
import { MAP_QUERY } from "../gql/MapScreenQuery";

function DisplayMarkers(props) {
  const { loading, error, data } = useQuery(MAP_QUERY, { variables: { lat: props.latitude, long: props.longitude, deltalat: props.deltalatitude, deltalong: props.deltalongitude} } );
  if (loading) {
    return (
      <Marker></Marker>
    )
  }
  if (error) {
    return (
      <Marker></Marker>
    )
  }
  return data.MapMarkers.map(({ bs_id, name, cross_street1, cross_street2, latitude, longitude, bus_route}) => (
    <Marker key={bs_id} title={name} description={bus_route.route_name + "\n" + cross_street1 + " / " + cross_street2} coordinate={{latitude: latitude, longitude: longitude}}></Marker>
  ));
}

export default function MapScreen () {
    const [region, setRegion] = useState({
      latitude: 32.294689,
      longitude: -64.784623,
      latitudeDelta: 0.00222,
      longitudeDelta: 0.00222,
    });
    return (
      <Flex width="100%" height={"90%"}>
        <MapView 
        style={{flex: 1}} 
        initialRegion={region} 
        provider={PROVIDER_GOOGLE} 
        onRegionChangeComplete={(region) => setRegion(region)} 
        showsUserLocation={true}
        showsMyLocationButton={true}
        pitchEnabled={false}
        loadingEnabled={true}
        >
          <DisplayMarkers latitude={region.latitude} longitude={region.longitude} deltalatitude={region.latitudeDelta} deltalongitude={region.longitudeDelta}/>
        </MapView>
      </Flex>
    );
}