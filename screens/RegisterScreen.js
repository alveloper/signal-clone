import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  // (3) 이름, 이메일, 패스워드, 이미지 관련 useState 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  {/*
  [선택사항]
  (5) useLayoutEffect 는 navigation 이 바뀌면, repaint 한다
  headerBackTitle 은 iOS에서만 작동 (웹, 안드로이드에선 작동하지 않음)
  iOS에선 뒤로가기 버튼 옆에 Back to Login 텍스트가 보일 것임
  */}
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login"
    });
  }, [navigation]);

  // (6) firebase 설정 후 register 함수 변경
  // 이미지 URL을 넣거나, Register 버튼을 눌렀을 때 함수 실행
  const register = () => {
    // (6-1) 사용자가 입력한 email, password를 파라미터로 넘기고,
    // return 값으로 promise 객체를 받음 
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      // (6-2) 프로필 업데이트
      authUser.user.update({
        displayName: name, // (6-4) displayName은 firebase의 property임
        photoURL: // (6-4) imageUrl을 pass하거나 없으면 아래 url 이미지를 넘김
          imageUrl ||
          "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
      });
    }).catch(error => alert(error.message)); // (6-3) 에러 발생 시 alert 
  };

  return (
    // (1) View -> KeyboardAvoidingView 로 변경
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* (2) StatusBar 설정 */}
      <StatusBar style="light" />
      {/* (5) react-native-elements 의 텍스트로 바꾸기 */}
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
      {/* (3) 이름, 이메일, 패스워드, 이미지 받는 폼 만들기 */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      {/* (4) 
      등록 버튼. 
      raised 는 아주 얕은 그림자를 만들고, onPress 했을 때
      register 함수를 부름으로써 위의 이미지를 채우거나 Register 버튼을
      눌렀을 때 등록되도록 하기 */}
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white"
  },
  button: {
    width: 200,
    marginTop: 10
  },
  inputContainer: {
    width: 300,
  },
});
