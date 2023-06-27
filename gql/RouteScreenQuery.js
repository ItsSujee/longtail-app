import { gql } from "@apollo/client";

export const ROUTE_QUERY = gql`
query Query($lat: Float!, $long: Float!, $n: Int!) {
  NearbyRouteCard(lat: $lat, long: $long, n: $n) {
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
