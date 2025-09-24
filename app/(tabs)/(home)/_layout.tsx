import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

const StackLayout = ()=>{
    return(
      <Stack initialRouteName="index" screenOptions={{headerShown:false}}>
       <Stack.Screen name="index" options={{}} />
       <Stack.Screen name="deepfocusscreen" options={{}} />

      </Stack>

    );
}