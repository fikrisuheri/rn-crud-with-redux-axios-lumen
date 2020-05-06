import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AddScreen,EditScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown : false
            }}/>
            <Stack.Screen name="Add" component={AddScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
    )
}

export default Router;
