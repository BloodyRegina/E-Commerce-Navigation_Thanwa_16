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

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3b82f6" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
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
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: "Home",
            headerShown: false, 
            tabBarIcon: ({ color, size }) => (
              <span style={{ fontSize: size, color }}>🏠</span>
            ),
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            title: "ShoppingCart", 
            headerTitle: "ShoppingCart",
            tabBarIcon: ({ color, size }) => (

              <span style={{ fontSize: size, color }}>🛒</span>
            ),
          }}
        />
        <Tab.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            title: "UserProfile", 
            headerTitle: "UserProfile",
            tabBarIcon: ({ color, size }) => (
  
              <span style={{ fontSize: size, color }}>👤</span>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}