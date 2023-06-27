import React from "react";
import {
    Text,
    Image,
    Heading,
    NativeBaseProvider,
    VStack,
    Button,
    Box,
    View,
  } from "native-base";


export default function LocationScreen({ navigation }) {
    return (
      <NativeBaseProvider>
        <Box pt={100} pb={20} backgroundColor={'#1A1A1A'} width={'100%'} height={'100%'}>
          <View alignItems={"center"}>
            <Image resizeMode="contain" size={"2xl"} source={require('../assets/images/location.png')} alt="Use Location?"/>
            <Heading pb={5} textAlign={"center"} color={"white"} fontSize={"2xl"}>Longtail works best with {"\n"} your location!</Heading>
            <VStack space={1}>
              <Text color={"white"} fontSize={"lg"}>⏰  Real Time Arrivals</Text>
              <Text color={"white"} fontSize={"lg"}>🧭  Live Navigation</Text>
              <Text color={"white"} fontSize={"lg"}>📍  Find Routes</Text>
            </VStack>
          </View>
          <View alignItems={"center"} flex={1} justifyContent={"flex-end"}>
            <Button onPress={() => navigation.navigate('Notification')} size={"lg"} colorScheme={"success"}>Continue</Button>
          </View>
        </Box>
      </NativeBaseProvider>
    );
  }