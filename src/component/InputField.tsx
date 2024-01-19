import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";

const InputField = ({ props, width, borderBottomWidth }: any) => {
  return (
    <TextInput
      {...props}
      style={{
        width: width,
        height: 30,
        color: "grey",
        backgroundColor: "#fff",
        borderBottomWidth: borderBottomWidth,
      }}
      placeholderTextColor={"black"}
    ></TextInput>
  );
};

export default InputField;
