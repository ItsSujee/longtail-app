import { gql } from "@apollo/client";

export const MAP_QUERY = gql`
query Query($lat: Float!, $long: Float!, $deltalat: Float!, $deltalong: Float!) {
  MapMarkers(lat: $lat, long: $long, deltalat: $deltalat, deltalong: $deltalong) {
    bs_id
    cross_street1
    cross_street2
    latitude
    longitude
    name
    bus_route {
      br_id
      end_bs_id
      route_name
      start_bs_id
    }
  }
}`;
