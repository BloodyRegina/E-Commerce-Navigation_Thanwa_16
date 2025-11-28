import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { items } from "../data/items";

const MainPage = ({ navigation }: any) => {
  const { width: windowWidth } = useWindowDimensions();

  let numColumns = 2;
  let imageContainerHeight = "h-40";

  if (windowWidth >= 1024) {
    numColumns = 3;
    imageContainerHeight = "h-56";
  } else if (windowWidth >= 768) {
    numColumns = 2 ;
    imageContainerHeight = "h-48";
  }

  const cardWidth = (windowWidth - 48) / numColumns - 10;

  return (
    <ScrollView className="flex-1 bg-[#FBFBFB]">
      <View className="p-6">
        <View className="flex-row flex-wrap justify-between">
          {items.map((p, index) => (
            <TouchableOpacity
              key={p.id}
              style={{ width: cardWidth }}
              className="bg-white mb-5 rounded-3xl border border-[#E8F9FF] overflow-hidden shadow-sm transition-all"
              onPress={() => navigation.navigate("ProductDetail", { item: p })}
            >
              <View
                className={`${imageContainerHeight} bg-white justify-center items-center p-2`}
              >
                <Image
                  source={{ uri: p.image }}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>

              <View className="p-4">
                <Text
                  className="text-base font-bold text-gray-800 mb-2 h-12"
                  numberOfLines={2}
                >
                  {p.name}
                </Text>
                <Text className="text-xl font-extrabold text-[#C4D9FF] mb-3">
                  {p.price}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;