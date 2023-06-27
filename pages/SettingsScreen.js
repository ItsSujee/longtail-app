import React from "react";
import {
    View,
    Heading,
    Box,
    VStack
  } from "native-base";
import { Dimensions } from 'react-native';

export default function SettingsScreen () {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

    return (
        <View width="100%" height={"90%"}>
          <View>
            <Box pt={65} width={'100%'} bg={"#0e7eff"} height={"30%"}>
              <Heading px={'5%'} py={2} textAlign={"left"} size={'2xl'} color={'white'}>Settings</Heading>
              <Heading px={'5%'} textAlign={'left'} size={'md'} color={'white'}>App Information</Heading>
            </Box>
          <Box width={'100%'} height={'70%'} bg={'#EFEFEF'}></Box>
          </View>

          <Box top={'25%'} px={5} py={5} shadow={9} position={"absolute"} alignSelf={'center'} bg={'white'} width={'90%'} height={'70%'} borderRadius={20}>
            <Heading py={2} color={'#BABABA'} size={"sm"}>Data and permissions</Heading>

            <VStack pt={3} space={5}>
            <Heading size={'md'}>Rate on App Store</Heading>
            <Heading size={'md'}>Follow on Twitter</Heading>
            <Heading size={'md'}>Email Feedback</Heading>
            </VStack>
            
          </Box>
        </View>

    );
}