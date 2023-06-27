import React from "react";
import {
  Text,
  NativeBaseProvider,
  HStack,
  Pressable,
  Center,
  Icon,
} from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MapScreen from "./MapScreen";
import RoutesScreen from "./RoutesScreen";
import SettingsScreen from "./SettingsScreen";

export default function HomeScreen({ navigation }) {
    const [selected, setSelected] = React.useState(1);
  
    return (
      <NativeBaseProvider>
        {selected === 0 &&
          <MapScreen></MapScreen>
        }
        
        {selected === 1 &&
          <RoutesScreen></RoutesScreen>
        }
  
        {selected === 2 &&
          <SettingsScreen></SettingsScreen>
        }
  
        <HStack position={'fixed'} bottom={0} height={"10%"} bg="#1A1A1A" alignItems="center" safeAreaBottom shadow={9}>
            <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} pt="2" flex={1} onPress={() => setSelected(0)}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'map' : 'map-outline'} />} color="white" size="lg" />
                <Text color="white" fontSize="12">Map</Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} pt="2" flex={1} onPress={() => setSelected(1)}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={selected === 1 ? 'map-marker': 'map-marker-outline'} />} color="white" size="lg" />
                <Text color="white" fontSize="12">Nearby</Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.5} pt="2" flex={1} onPress={() => setSelected(2)}>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cog' : 'cog-outline'} />} color="white" size="lg" />
                <Text color="white" fontSize="12">Settings</Text>
              </Center>
            </Pressable>
        </HStack>
  
      </NativeBaseProvider>
    );
}