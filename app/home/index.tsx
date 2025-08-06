import SearchBar from "@/components/SearchBar";
import { icons } from "@/constant/icons";
import { images } from "@/constant/images";
import { BrandData, brandInterface } from "@/data/brandData";
import { catData, catInterface } from "@/data/categoriesCard";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface subInterface {
  label: string;
  button: string;
}

const DailyImage = [
  {
    id: 1,
    image: images.fastfood,
  },
  {
    id: 2,
    image: images.burgerset,
  },
  {
    id: 3,
    image: images.fastfood2,
  },
  {
    id: 4,
    image: images.festivalfood,
  },
];

const SubInfo = ({ label, button }: subInterface) => (
  <View className="flex flex-row justify-between">
    <Text className="text-2xl font-normal text-black">{label}</Text>
    <View className="p-2 rounded-full bg-lightred">
      <Text className="text-sm font-light text-white uppercase">{button}</Text>
    </View>
  </View>
);

const CategoriesItem = ({ title, image }: catInterface) => (
  <View className="flex flex-row items-center ">
    <Image source={image} className="w-24" />
    <Text className="pr-2 text-2xl font-light">{title}</Text>
  </View>
);

const BrandsItem = ({ name, time, image }: brandInterface) => (
  <View className="flex flex-col items-center mx-2">
    <Image source={image} className="w-20 h-20" />
    <Text className="mt-1 text-2xl text-gray-500">{name}</Text>
    <Text className="text-sm font-light text-gray-500">{time} MIN</Text>
  </View>
);

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
        className="flex-1 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="flex-1 px-5 pb-10 mt-20">
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
          <View className="mt-10 ">
            <SubInfo label="Categories" button="View All" />
          </View>
          <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
            <FlatList
              horizontal
              data={catData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CategoriesItem title={item.title} image={item.image} />
              )}
            />
            <View className="py-5">
              <SubInfo label="Top Brands in spotlight" button="View All" />
            </View>
            <FlatList
              horizontal
              data={BrandData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <BrandsItem
                  name={item.name}
                  time={item.time}
                  image={item.image}
                />
              )}
            />
          </ScrollView>
        </View>
        <View className="bg-gray-400 w-full absolute top-[820px] mt-[60px] p-[10px] rounded-t-xl"></View>
        <View className="bg-[#FEEBD0] w-full h-[200px] p-[10px] rounded-t-xl">
          <Text className="px-5 mt-4 text-2xl text-black font-semimedium">
            Your Daily Deals
          </Text>
          <FlatList
            horizontal
            className="mt-5"
            data={DailyImage}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="flex flex-row gap-2">
                <Image source={item.image} className="mx-3 w-30" />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
