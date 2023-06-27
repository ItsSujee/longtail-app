import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import StartScreen from './pages/StartScreen.js';
import LocationScreen from './pages/LocationScreen.js'
import NotificationScreen from './pages/NotificationScreen.js'
import HomeScreen from './pages/HomeScreen.js'

export default function App() {
  // Create React Navigation
  const Stack = createNativeStackNavigator();
  const [viewOnboarding, setOnboarding] = React.useState(null)

  // Check Onboarding Flow
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding')
      if (value !== null) {
        setOnboarding(true)
      }
    } catch {
      console.log("Error @checkOnboarding:", err) 
    }
  }

  // Use checkOnboarding Function
  React.useEffect(() => {checkOnboarding();}, []);

  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'https://longtail-backend-production.up.railway.app/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={viewOnboarding === null ? "Home" : "Home"} screenOptions={{headerShown: false, gestureEnabled: false}}>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Location" component={LocationScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}