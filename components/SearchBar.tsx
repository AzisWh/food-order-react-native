import { icons } from "@/constant/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder?: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
  classname?: string;
}

const SearchBar = ({
  placeholder,
  onPress,
  value,
  onChangeText,
  classname,
}: Props) => {
  return (
    <View
      className={`flex-row items-center px-5 py-4 bg-white rounded-lg shadow-xl px bg-dark-200${classname}`}
    >
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#F5474A"
      />
      <TextInput
        onPress={onPress}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-black"
        placeholder={placeholder}
        placeholderTextColor="#929292"
      />
    </View>
  );
};

export default SearchBar;
