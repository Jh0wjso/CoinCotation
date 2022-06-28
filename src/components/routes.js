import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BitCoinIndex from './BitCoinIndex';
import EthereumIndex from './EthereumIndex';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AllCoinsScreen from './AllCoinsScreen';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'BitCoin') {
              iconName ='logo-bitcoin';
            } else if (route.name === 'Ethereum') {
              iconName = 'logo-usd';
            }else if (route.name === 'All Coins') {
              iconName = 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
            <Tab.Screen name="BitCoin" component={BitCoinIndex}/>
            <Tab.Screen name="Ethereum" component={EthereumIndex}/>
            <Tab.Screen name="All Coins" component={AllCoinsScreen}/>
        </Tab.Navigator>
    )
}