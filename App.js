import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// (1) 아래 내용 임포트
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";

// (3) Stack 만들기
const Stack = createNativeStackNavigator();

// (5) 전체 헤더에 적용될 옵션 
const globalScreenOptions = {
  headerStyle: {  backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" }, // 헤더 타이틀 글씨
  headerTintColor: "white" // 헤더 아이콘 색
}

export default function App() {
  return (
    // (2) NavigationContainer 생성
    <NavigationContainer> 
      {/* 
      (4) Stack.Navigator 만들고 그 안에 Stack.Screen 으로 LoginScreen 컴포넌트 넣기 
      Stack.Navigator 에 screenOptions 를 주면, 
			페이지마다 헤더가 바뀌는 게 아니라 전체 헤더의 내용으로 적용됨
      */}
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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