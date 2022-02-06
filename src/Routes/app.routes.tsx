import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Routes;
