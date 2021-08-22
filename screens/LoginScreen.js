import React, { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
// (1) 아래 모듈 임포트
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  // (5) useState 로 email, password 담고 설정할 변수 생성
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // (8) signIn 함수 생성
  const signIn = () => {};

  return (
    // (9) styles.container 설정 후, 아래 styles 에서 container css 설정하기
    // (10) keyboardAvoidingView 로 바꾸고 behavior 설정
    // keyboardAvoidingView 로 설정하면, 키보드에 따라 버튼이 사라지는 현상이 없어짐
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* (2) StatusBar 색깔을 바꿔서 시간, 와이파이, 배터리 등이 흰색으로 보임 */}
      <StatusBar style="light" />
      {/* (3) 시그널 로고 만들기 */}
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      {/* (4) View 생성 후, 이메일과 패스워드 폼 만들기 */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          // (6) value, onChangeText 설정
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="Password"
          // (6) value, onChangeText 설정
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      
      {/* (7) 로그인 버튼 만들기 */}
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button containerStyle={styles.button} type="outline" title="Register" />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300, // 이메일, 패스워드 폼의 길이가 길어짐
  },
  button: {
    width: 200,
    marginTop: 10
  }
});
