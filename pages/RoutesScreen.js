import React from "react";
import {
    Text,
    Box,
    ScrollView,
    Heading,
    HStack,
    VStack
  } from "native-base";
import { Dimensions } from 'react-native';
import { useQuery } from "@apollo/client";
import { ROUTE_QUERY } from "../gql/RouteScreenQuery";

function RouteCard(props) {
  const { loading, error, data } = useQuery(ROUTE_QUERY, { variables: { lat: props.latitude, long: props.longitude, n: props.n} } );
  if (loading) {
    return (
      <Box px={5} py={5} alignSelf={'center'} shadow={9} bg={'white'} width={'90%'} borderRadius={20}>
        <HStack>
        <VStack pl={2} width={'80%'} alignItems={"left"}>
          <Text>Loading Routes...</Text>
        </VStack>
        <VStack width={'20%'} alignItems={"center"}>
          <Text> </Text>
          <Text> </Text>
        </VStack>
        </HStack>
      </Box>
    )
  }
  if (error) {
    return (
      <Box px={5} py={5} alignSelf={'center'} shadow={9} bg={'white'} width={'90%'} borderRadius={20}>
      <HStack>
      <VStack pl={2} width={'80%'} alignItems={"left"}>
        <Text>An Error Occured.</Text>
      </VStack>
      <VStack width={'20%'} alignItems={"center"}>
        <Text> </Text>
        <Text> </Text>
      </VStack>
      </HStack>
    </Box>
    )
  }
  return data.NearbyRouteCard.map(({ bs_id, name, cross_street1, cross_street2, latitude, longitude, bus_route }) => (
    <Box key={bs_id} mb={5} px={5} py={5} alignSelf={'center'} shadow={9} bg={'white'} width={'90%'} borderRadius={20}>
      <HStack>
        <VStack pl={2} width={'80%'} alignItems={"left"}>
          <Text>{bus_route.route_name}</Text>
          <Text>{name}</Text>
          <Text>{cross_street1} & {cross_street2}</Text>
          <Text>8, 30, 55 min</Text>
        </VStack>
        <VStack width={'20%'} alignItems={"center"}>
          <Text>8:88</Text>
          <Text>88:88 PM</Text>
        </VStack>
      </HStack>
    </Box>
  ));
}

export default function RoutesScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    return (
          <ScrollView width={windowWidth} height={windowHeight * 0.90} bg={'#EFEFEF'}>
            <Box pt={65} width={windowWidth} height={windowHeight * 0.30} bg={"#0e7eff"} >
              <Heading px={'5%'} py={2} textAlign={"left"} size={'2xl'} color={'white'}>Nearby</Heading>
              <Heading px={'5%'} textAlign={'left'} size={'md'} color={'white'}>Look up local routes</Heading>
            </Box>
            <VStack top={windowHeight * -0.07}>
              <RouteCard latitude={32.294689} longitude={-64.784623} n={8}></RouteCard>
            </VStack>
          </ScrollView>
    );
}