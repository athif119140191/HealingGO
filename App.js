import React, { useState } from 'react';
import {
    StyleSheet, Text, TextInput,
    Modal, View, Pressable, TouchableHighlight
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListBandara from './app/screens/ListBandara'
import Home from './app/screens/Home';

const Stack = createStackNavigator();
const App = () => {
    
    return (
          <NavigationContainer>
              <Stack.Navigator
                screenOptions={{ headerTitle: '', headerTransparent: true }}
              >
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen component={ListBandara} name='ListBandara' />
              </Stack.Navigator>
          </NavigationContainer>
      );
};

const styles = StyleSheet.create({
});

export default App;