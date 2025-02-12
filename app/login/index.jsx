import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
export default function Login() {
  return (
    <View style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
    }}>
      <Image
        source={require("../../assets/images/login.png")}
        style={{ width: "100%", height: 500 }}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          {" "}
          Ready to make a new friends
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 18,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Let's adopt the pet which you like and make there life happy again
        </Text>

        <Pressable
          style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: Colors.PRIMARY,
            width: "100%",
            color: "white",
            borderRadius: 14,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
