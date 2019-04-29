import React, {FC} from "react";
import {View, Text} from "react-native";

export const Collection: FC<{title: 'Detail'}> = props => (
  <View>
    <Text>{props.title}</Text>
  </View>
);

export default Collection