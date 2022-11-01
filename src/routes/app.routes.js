import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/welcome";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
  );
}
