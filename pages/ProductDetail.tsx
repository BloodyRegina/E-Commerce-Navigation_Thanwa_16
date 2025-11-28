import { View, Text, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

const ProductDetail = ({ route, navigation }: any) => {
  const { item } = route.params;

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View className="flex-1 bg-[#FBFBFB]">
      <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          className="absolute top-12 left-6 z-50 bg-white w-12 h-12 rounded-full justify-center items-center shadow-lg border border-gray-100"
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          style={{ elevation: 5 }}
      >
          <Text className="text-[#6d5ec7] font-bold text-2xl pb-1">
            ←
          </Text>
      </TouchableOpacity>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        <View className="bg-[#C4D9FF] w-full h-96 justify-center items-center rounded-b-[40px] shadow-sm mb-6 overflow-hidden">
          <Image
            source={{ uri: item.image }}
            className="w-full h-full"
            resizeMode="contain" 
          />
        </View>

        <View className="px-6 pb-10">
          
          <Text className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
            {item.name}
          </Text>

          <Text className="text-4xl font-extrabold text-[#6d5ec7] mb-6">
            ฿{formatPrice(item.price)}
          </Text>

          <View className="mb-6">
              <Text className="text-lg font-bold text-gray-800 mb-2">รายละเอียดสินค้า</Text>
              <Text className="text-gray-600 leading-7 text-base font-light">
                  {item.description}
              </Text>
          </View>

          <TouchableOpacity 
              className="bg-[#6d5ec7] py-4 rounded-2xl items-center shadow-xl shadow-indigo-200 active:bg-indigo-700 active:scale-95 transform transition"
              onPress={() => alert(`เพิ่ม ${item.name} ลงตะกร้าแล้ว`)}
          >
            <Text className="text-white font-bold text-xl tracking-widest">
              เพิ่มลงตะกร้า
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;