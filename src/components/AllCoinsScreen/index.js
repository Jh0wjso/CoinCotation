import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import AllCoinsIndex from "../AllCoinsIndex";
import CoinValue from "../CoinValue";

const Stack = createStackNavigator();

export default function AllCoinsScreen(){
    return(
        <Stack.Navigator 
        initialRouteName="AllCoinsIndex"
        screenOptions={{
            headerMode: 'screen',
            headerStyle:{
                backgroundColor: 'tomato',
                borderColor: 'tomato'
            },
            title: ''
        }}
        >
            <Stack.Screen name="AllCoinsIndex" options={{title: ' '}} component={AllCoinsIndex}/>
            <Stack.Screen name="CoinValue" component={CoinValue} />
        </Stack.Navigator>
    );
}