import React from "react";
import {
    Text,
    Image,
    Heading,
    NativeBaseProvider,
    Button,
    Box,
    HStack,
    View,
  } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotificationScreen({ navigation }) {
    const stopOnboarding = async () => {
      try {
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch (err) {
        console.log("Error Notification Screen AsyncStorage:", err)
      }
    }
    return (
      <NativeBaseProvider>
        <Box pt={100} pb={20} bg={'#1A1A1A'} width={'100%'} height={'100%'}>
          <View alignItems={"center"}>
            <Image resizeMode="contain" size={"2xl"} source={require('../assets/images/notification.png')} alt="Allow Notifications?"/>
            <Heading pb={5} textAlign={"center"} color={"white"} fontSize={"2xl"}>Get Live Updates</Heading>
            <Text color={"white"} fontSize={"xl"} textAlign={"center"} >Allow notifications to get {"\n"} real-time transit updates</Text>
          </View>
          <View alignItems={"center"} flex={1} justifyContent={"flex-end"}>
            <HStack space={20}>
              <Button onPress={() => {navigation.navigate('Home'); stopOnboarding();}} size={"lg"} colorScheme={"danger"}>Not Now</Button>
              <Button onPress={() => {navigation.navigate('Home'); stopOnboarding();}} size={"lg"} colorScheme={"success"}>Allow</Button>
            </HStack>
          </View>
        </Box>
      </NativeBaseProvider>
    );
  }