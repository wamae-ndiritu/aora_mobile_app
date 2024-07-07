import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {Link} from 'expo-router';

export default function App() {
  return (
    <View className="bg-primary flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar style='auto' />
      <Link href="/home" className="text-red-500" >Go to Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
