import SearchBar from "@/components/SearchBar";
import { icons } from "@/constant/icons";
import { images } from "@/constant/images";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View className="flex-1 bg-white">
      <Image
        className="w-[334px] h-[250px] absolute top-0 left-0"
        source={images.elipse7}
        resizeMode="contain"
      />
      <Image
        className="absolute right-0 top-[230px]"
        source={images.elipse6}
        resizeMode="contain"
      />
      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="flex-1 mt-20">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row gap-2 mb-5">
              <View className="p-4 rounded-xl bg-lightred">
                <Image
                  className=" h-7 w-7"
                  source={icons.location}
                  resizeMode="contain"
                />
              </View>
              <View className="flex flex-col">
                <Text className="text-[#575757] font-bold text-lg">
                  Current Location
                </Text>
                <Text className="text-[#575757] font-normal text-lg">
                  Venice, Italy
                </Text>
              </View>
            </View>
            <Image
              source={icons.category}
              className="w-10 h-10 mt-2"
              resizeMode="contain"
            />
          </View>
          <SearchBar
            placeholder={"Search for shops & resturents"}
            classname="mt-20"
          />
          <View className="flex flex-col py-5">
            <Text className="text-4xl font-light">Food</Text>
            <Text className="text-5xl font-bold text-lightred">Delivery</Text>
          </View>
          <View className="p-10 bg-[#D82231] rounded-full shadow-xl ">
            <View className="flex flex-row justify-between py-5">
              <View className="flex flex-col">
                <Text className="font-bold text-white">14 March</Text>
                <Text className="text-xl font-bold text-white">
                  Free Cold Drink
                </Text>
                <Text className="font-light text-white">
                  For All Orders Over 100$
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={images.coke}
            className="absolute right-[-50px] top-[150px]"
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
