import React, { useEffect, useLayoutEffect, useState } from "react";
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
  // (2) AddChatScreen.js 수정 후, 채팅창 목록 state로 관리하기
  const [chats, setChats] = useState([]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  // (3) useEffect 채팅방 목록 더하기
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
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
          {/* (1) 버튼 눌렀을 때 채팅창 컴포넌트로 연결 */}
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <EvilIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {/* (3) 채팅 목록 표시하기 */}
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem key={id} id={id} chatName={chatName} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%', // ScrollView 높이에 맞게
  },
});
