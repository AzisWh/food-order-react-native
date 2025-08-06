import { images } from "@/constant/images";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const index = () => {
  return (
    <View className="flex-1 bg-lightred">
      <Image
        className="w-[300px] h-[250px]"
        source={images.elipseatas}
        resizeMode="contain"
      />
      <Image
        resizeMode="contain"
        className="absolute bottom-0 right-0"
        source={images.elipsebawah}
      />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="flex flex-col items-center justify-center">
          <Image
            className="w-[254px] h-[270px] rounded-xl mb-5 "
            source={images.panda}
          />

          <Text className="text-5xl italic font-medium text-white capitalize">
            food order
          </Text>

          <Link href="/(tabs)" className="mt-10" asChild>
            <TouchableOpacity className="w-[209px] h-[50px] px-5 py-3  bg-white rounded-full active:bg-gray-400 shadow-xl ">
              <Text className="text-lg font-medium text-center text-black">
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
