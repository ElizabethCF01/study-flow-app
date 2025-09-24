import { Box } from "@gluestack-ui/themed";
import React, { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import GradientButton from "./gradient-button";

const TimeSelectionModal = ({
  isVisible,
  onClose,
  onSelectTime,
}: {
  isVisible: boolean;
  onClose: () => void;
  onSelectTime: (time: number | string, breakTime: string | null) => void;
}) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customTime, setCustomTime] = useState("");
  const [showBreakInput, setShowBreakInput] = useState(true);
  const [breakTime, setBreakTime] = useState("");

  const timeOptions = ["25 min", "50 min", "90 min"];

  const handleStart = () => {
    if (selectedTime) {
      onSelectTime(selectedTime, breakTime);
    } else if (customTime) {
      onSelectTime(`${customTime} min`, breakTime );
    }
    onClose();
  };

  const handleSelectTimeOption = (time: string) => {
    setSelectedTime(time);
    setCustomTime("");
    if (time === "Custom") {
      setShowBreakInput(true);
    } else {
      setShowBreakInput(false);
      setBreakTime("");
    }
  };

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      backdropColor="rgba(0,0,0,0.3)"
    >
      <View className="flex-1 justify-center items-center bg-transparent px-8">
        <View className="bg-[#252325] p-8 rounded-2xl">
          <Text className="text-white text-2xl font-bold mb-4">
            Select Time Block
          </Text>

          {timeOptions.map((time) => (
            <Pressable
              key={time}
              className={`p-5 rounded-lg my-3 ${
                selectedTime === time ? "bg-white/20" : "bg-white/10"
              }`}
              onPress={() => handleSelectTimeOption(time)}
            >
              <Text className="text-white text-xl">{time}</Text>
            </Pressable>
          ))}

          <Pressable
            className={`p-5 rounded-lg my-3 ${
              selectedTime === "Custom" ? "bg-white/20" : "bg-white/10"
            }`}
            onPress={() => handleSelectTimeOption("Custom")}
          >
            <Text className="text-white text-xl">Custom</Text>
          </Pressable>
          {selectedTime === "Custom" && (
            <TextInput
              value={customTime}
              onChangeText={setCustomTime}
              placeholder="Minutes"
              placeholderTextColor="#9ca3af"
              keyboardType="numeric"
              className="text-white text-lg ml-4 w-20 p-2 rounded-lg bg-white/10 border border-white/20"
            />
          )}

          <View className=" mt-4 min-h-16">
            {/* <Pressable
              className="flex-row items-center"
              onPress={() => setShowBreakInput(!showBreakInput)}
            >
               <View
                className={`w-6 h-6 rounded border border-white/20 mr-2 ${
                  showBreakInput ? "bg-white/20" : ""
                }`}
              >
                {showBreakInput && (
                  <Check
                    size={20}
                    color="white"
                    className={showBreakInput ? "opacity-100" : "opacity-0"}
                  />
                )}
              </View> 
            </Pressable> */}
              <Text className="text-white text-lg">Break</Text>

              <Box className="flex-row items-center mt-2">
                <TextInput
                  value={breakTime}
                  onChangeText={setBreakTime}
                  placeholder="5"
                  placeholderTextColor="#9ca3af"
                  keyboardType="numeric"
                  className="text-white text-lg w-20 p-2 rounded-lg bg-white/10 border border-white/20"
                />
                <Text className="text-white text-lg ml-2">min</Text>
              </Box>
          </View>

          <View className="flex-row justify-between mt-4">
            <Pressable
              onPress={onClose}
              className="p-3 rounded-full border border-white/20 w-40 items-center justify-center"
            >
              <Text className="text-white">Cancel</Text>
            </Pressable>
            <GradientButton
              className="w-40 ml-6"
              handleClick={handleStart}
              text="Start"
              disabled={!selectedTime && !customTime}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TimeSelectionModal;
