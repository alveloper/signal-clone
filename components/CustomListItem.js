import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "http://connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "bold" }}>
          Youtube Chat
        </ListItem.Title>
        {/* numberOfLines={1} 때문에 여러줄 입력해도 한 줄만 보임 */}
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
