import React from "react";
import {
    Text,
    Image,
    Heading,
    NativeBaseProvider,
    extendTheme,
    Button,
    Box,
    View,
  } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark"
  };

export const startScreenConfig = extendTheme({ 
    config, 
    dependencies:{'linear-gradient': LinearGradient},
});

export default function StartScreen({ navigation }) {
    return (
      <NativeBaseProvider config={startScreenConfig} >
        <Box pt={120} pb={20} flexDirection={"column"} width={'100%'} height={'100%'} bg={{ linearGradient: { colors: ['#0D53AE', '#32A0EA'], start: [0, 0], end: [1, 1]} }}>
            <View alignItems="center" justifyContent="flex-start">
              <Image size={"xl"} source={require('../assets/images/longtail.png')} alt="Longtail Bird"/>
              <Heading color={"white"} size="3xl">Longtail</Heading>
              <Text color={"white"} fontSize={"2xl"}>Bermuda's Best Transit App</Text>
            </View>
            <View alignItems="center" flex={1} justifyContent={"flex-end"}>
              <Text pb={5} color={"white"} fontSize="xs">By clicking "Get Started" you agree to the {"\n"} "Terms of Use" and "Privacy Policy".</Text>
              <Button onPress={() => navigation.navigate('Location')} size={"lg"} colorScheme={"light"}>Get Started</Button>
            </View>  
      </Box>
      </NativeBaseProvider>
    );
  }