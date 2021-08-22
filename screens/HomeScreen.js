import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import CustomListItem from "../components/CustomListItem";
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  // (3) signOutUser 함수 생성
  const signOutUser = () => {
    // auth 의 signOut 메서드는 promise 객체를 반환
    // Login 페이지로 이동
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  // (2) useLayoutEffect 설정
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        // 헤더 왼쪽에 유저가 회원가입 시 입력한 이미지(또는 우리가 기본으로 지정한 이미지)
        <View style={{ marginLeft: 20 }}>
          {/* (3) onPress 에 signOutUser -> 프로필 이미지 누르면 로그아웃 되도록 하기 */}
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      // (4) 헤더 오른쪽에 카메라, 채팅창 버튼 만들기
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <EvilIcons name="camera" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <EvilIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
    // dependencies 에 navigation 넣어주기
  }, [navigation]);

  return (
    // (1) View -> SafeAreaView 로 바꾸기 (for iOS)
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
