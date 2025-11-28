import "./global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import UserProfile from "./pages/UserProfile"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define the common header options
const commonHeaderOptions = {
  headerStyle: { backgroundColor: "#3b82f6" },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold" },
};

function HomeStackScreen() {
  return (
    <Stack.Navigator
      // Apply common header options to the Stack Navigator
      screenOptions={commonHeaderOptions}
    >
      <Stack.Screen name="Home" component={MainPage} />
      {/* NOTE: These screens are part of the stack, 
        so they inherit the header from the Stack.Navigator.
        You can remove these from the Tab Navigator to avoid duplication.
      */}
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      {/* We'll keep ShoppingCart and UserProfile out of the Home stack 
        to ensure the tab bar always takes you to the 'root' of those screens.
        If you need them deep-linked from MainPage, keep them here too.
      */}
      {/* <Stack.Screen name="ShoppingCart" component={ShoppingCart} /> */}
      {/* <Stack.Screen name="UserProfile" component={UserProfile} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#3b82f6",
          tabBarInactiveTintColor: "#9ca3af",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#e5e7eb",
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          // Apply common header options directly to the Tab Navigator's screens
          ...commonHeaderOptions, 
        }}
      >
        <Tab.Screen
          name="HomeTab" // Changed name to avoid conflict with the Stack.Screen name
          component={HomeStackScreen}
          options={{
            title: "Home",
            headerShown: false, // The header will be provided by HomeStackScreen
            tabBarIcon: ({ color, size }) => (
              <span style={{ fontSize: size, color }}>🏠</span>
            ),
          }}
        />
        <Tab.Screen
          name="ShoppingCartTab"
          component={ShoppingCart}
          options={{
            // The header style is inherited from Tab.Navigator screenOptions
            title: "Shopping Cart", 
            headerTitle: "Shopping Cart", // Ensure the title is set
            tabBarBadge: 10,
            tabBarIcon: ({ color, size }) => (
              <span style={{ fontSize: size, color }}>🛒</span>
            ),
          }}
        />
        <Tab.Screen
          name="UserProfileTab"
          component={UserProfile}
          options={{
            // The header style is inherited from Tab.Navigator screenOptions
            title: "User Profile", 
            headerTitle: "User Profile", // Ensure the title is set
            tabBarIcon: ({ color, size }) => (
              <span style={{ fontSize: size, color }}>👤</span>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}