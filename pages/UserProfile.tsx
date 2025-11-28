import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
const UserProfile = () => {
  const [user, setUser] = useState({
    username: "loading_user",
    firstName: "สมชาย",
    lastName: "ใจดี",
    email: "somchai.design@email.com",
    image: null,
  });

  return (
    <SafeAreaView className="flex-1 bg-[#F5EFFF]">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <View className="mb-8 relative">
          <View className="w-36 h-36 rounded-full bg-white p-1 border-4 border-[#A294F9] justify-center items-center overflow-hidden shadow-sm">
            {user.image ? (
              <Image
                source={{ uri: user.image }}
                className="w-full h-full rounded-full"
              />
            ) : (
              <View className="w-full h-full bg-[#E5D9F2] justify-center items-center">
                <Ionicons name="person" size={64} color="#A294F9" />
              </View>
            )}
          </View>
          <View className="absolute bottom-2 right-2 w-8 h-8 bg-[#A294F9] rounded-full border-4 border-[#F5EFFF] justify-center items-center">
            <Ionicons name="checkmark" size={16} color="white" />
          </View>
        </View>
        <View className="w-[90%] bg-white rounded-3xl p-6 shadow-sm border border-[#E5D9F2]">
          <Text className="text-xl font-bold text-gray-800 mb-6 text-center">
            ข้อมูลส่วนตัว
          </Text>

          <View className="mb-4">
            <Text className="text-xs text-gray-400 font-bold uppercase mb-1 ml-1">
              Username
            </Text>
            <View className="flex-row items-center bg-[#F5EFFF] p-3 rounded-xl border border-[#CDC1FF]">
              <Ionicons
                name="at"
                size={20}
                color="#A294F9"
                style={{ marginRight: 10 }}
              />
              <Text className="text-gray-700 font-medium text-lg">
                {user.username}
              </Text>
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-xs text-gray-400 font-bold uppercase mb-1 ml-1">
              ชื่อ - นามสกุล
            </Text>
            <View className="flex-row items-center bg-[#F5EFFF] p-3 rounded-xl border border-[#CDC1FF]">
              <Ionicons
                name="person-outline"
                size={20}
                color="#A294F9"
                style={{ marginRight: 10 }}
              />
              <Text className="text-gray-700 font-medium text-lg">
                {user.firstName} {user.lastName}
              </Text>
            </View>
          </View>

          <View className="mb-2">
            <Text className="text-xs text-gray-400 font-bold uppercase mb-1 ml-1">
              อีเมล
            </Text>
            <View className="flex-row items-center bg-[#F5EFFF] p-3 rounded-xl border border-[#CDC1FF]">
              <Ionicons
                name="mail-outline"
                size={20}
                color="#A294F9"
                style={{ marginRight: 10 }}
              />
              <Text className="text-gray-700 font-medium text-lg">
                {user.email}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
