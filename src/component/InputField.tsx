import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";

const InputField = ({
  props,
  width,
  borderBottomWidth,
  value,
  onChangeText,
  maxLength,
  autoComplete,
  keyboardType,
  placeholder,
  borderBottomColor,
}: any) => {
  return (
    <TextInput
      {...props}
      style={{
        width: width,
        height: 30,
        color: "grey",
        // backgroundColor: "#fff",
        borderBottomWidth: borderBottomWidth,
      }}
      placeholderTextColor={"grey"}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      autoComplete={autoComplete}
      keyboardType={keyboardType}
      placeholder={placeholder}
      borderBottomColor={borderBottomColor}
    ></TextInput>
  );
};

export default InputField;
