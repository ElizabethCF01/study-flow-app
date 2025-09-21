
import { Box, Button } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";

export default function GradientButton({handleClick, text, className = ""}:{handleClick: () => void, text: string, className?: string}) {

  return (
      <Button onPress={handleClick} variant="link">
        <Box className={`h-12 items-center justify-center rounded-full overflow-hidden ${className}`}>
          <LinearGradient
            colors={['#8F64FE', '#39D1E5']}
            start={[0, 0]}
            end={[1, 1]}

            style={{
              flex: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-[#080A0D] font-bold">{text}</Text>
          </LinearGradient>
        </Box>
      </Button>
  );
}
