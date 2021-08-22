import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// HomeScreen 에서 채팅방 목록까지 표시 후 다시 CustomListItem.js 로 돌아오기
const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "http://connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />
      <ListItem.Content>
        {/* youtubechat -> 채팅방 이름이 보이도록 */}
        <ListItem.Title style={{ fontWeight: "bold" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle.
          This is a test subtitle.
          This is a test subtitle.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
