import GlowView from "@/components/glow-view";
import GradientButton from "@/components/gradient-button";
import {
    Box,
    Checkbox,
    CheckboxIcon,
    CheckboxIndicator,
    CheckIcon,
    Input,
    InputField,
    InputIcon,
    InputSlot,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import { Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Text } from "react-native";

export default function SignInScreen() {
  const handleLogin = () => {
    // TODO: Implement login logic here
    router.replace("/(tabs)");
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <GlowView>
      {/* Heading */}
      <Box className="items-center justify-center mt-36">
        <Text className="text-white text-3xl font-medium">
          {"Let's get you in"}
        </Text>
      </Box>
      <Box className="w-full px-8 mt-12">
        {/* Email */}
        <Box className="flex-row items-center h-16">
          <Input
            size="lg"
            variant="outline"
            sx={{
              borderColor: "transparent",
              _focus: { borderColor: "#919191" },
              borderRadius: 12,
              paddingVertical: 4,
              paddingHorizontal: 3,
              height: 54,
            }}
            className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl "
          >
            <InputSlot className="pl-3">
              <InputIcon as={Mail} />
            </InputSlot>
            <InputField
              placeholder="Email"
              placeholderTextColor="#ffffffad"
              color="#ffffff"
              className="py-2"
            />
          </Input>
        </Box>

        {/* Password */}
        <Box className="flex-row mt-8 h-16">
          <Input
            size="lg"
            variant="outline"
            sx={{
              borderColor: "transparent",
              _focus: { borderColor: "#919191" },
              borderRadius: 12,
              paddingVertical: 4,
              paddingHorizontal: 3,
              height: 54,
            }}
            className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl text-white"
          >
            <InputSlot className="pl-3">
              <InputIcon as={Lock} />
            </InputSlot>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              placeholderTextColor="#ffffffad"
              color="#ffffff"
              className="text-white"
            />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? Eye : EyeOff} />
            </InputSlot>
          </Input>
        </Box>
      </Box>
      {/* Actions */}
      <Box className="w-full px-8 mt-6">
        <Box className="flex-row items-center justify-between">
          <Box className="flex-row ">
            <Checkbox
              isDisabled={false}
              isInvalid={false}
              size="md"
              value="rememberme"
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <Text className="text-gray-400 ml-2">Remember me</Text>
            </Checkbox>
          </Box>
          <Text className="text-[#39D1E5] font-bold">Forgot Password?</Text>
        </Box>

        <GradientButton
          handleClick={handleLogin}
          text="Login"
          className="w-full mt-10"
        />

        {/* Divider */}
        <Box className="flex-row items-center my-10">
          <Box className="flex-1 h-px bg-gray-600" />
          <Text className="text-gray-400 mx-4">or continue with</Text>
          <Box className="flex-1 h-px bg-gray-600" />
        </Box>

        <Box className="flex-row justify-between w-full gap-4">
          <Box className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex-1 items-center">
            <Image
              className="w-10 h-10"
              source={require("../../assets/images/google.png")}
            />
          </Box>
          <Box className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex-1 items-center">
            <Image
              className="w-10 h-10"
              source={require("../../assets/images/apple.png")}
            />
          </Box>
        </Box>

        {/* Sign Up */}
        <Box className="flex-row justify-center mt-12">
          <Text className="text-gray-400">{"Don't have an account?"}</Text>
          <Text className="text-[#39D1E5] font-bold ml-2">Sign Up</Text>
        </Box>
      </Box>
    </GlowView>
  );
}
