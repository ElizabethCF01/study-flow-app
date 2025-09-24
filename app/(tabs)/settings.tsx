import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from "expo-linear-gradient";
import { Center } from '@gluestack-ui/themed';

const settings = () => {
  return (
    <LinearGradient colors={["#0f2027", "#224551ff", "#2c5364"]} style={styles.container}>
    <SafeAreaView>
  
    <View>
      <Text style={styles.Text}>settings</Text>
    </View>
    
    </SafeAreaView>
   </LinearGradient>
  )
}

export default settings

const styles = StyleSheet.create({
 container: { flex: 1, padding: 20, justifyContent: "flex-start" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  time: { color: "#fff", fontSize: 16 },
  headerRight: { flexDirection: "row", alignItems: "center" },
  headerStat: { color: "#fff", marginHorizontal: 4 },
  avatar: { width: 36, height: 36, borderRadius: 18, marginLeft: 12 },

  greeting: { marginTop: 20 },
  wave: { fontSize: 16, color: "#fff" },
  greetingText: { fontSize: 22, fontWeight: "bold", color: "#fff" },

  Text:{
    textAlign:"center",
    color:"white",
    fontSize:30,
    justifyContent: "center",
    

  },

});