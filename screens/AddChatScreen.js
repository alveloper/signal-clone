import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  // (3) useState 로 input (채팅방 이름) 관리하기
  const [input, setInput] = useState("");

  // (1) useLayoutEffect 설정
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats", // iOS only
    });
  }, [navigation]);

  // (3) 새로운 채팅창 만들기 함수
  // .collection 은 firebase의 firestore database -> Cloud Firestore -> Data 에 쌓임
  // navigation.goBack()은 채팅방 개설 후 뒤로 가기 기능
  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      {/* (2) 채팅방 이름을 위한 Input form 만들기 */}
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      {/* (3) 새로운 채팅창 만들기 버튼 */}
      <Button disabled={!input} onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
