import React, { FC } from "react";
import { Image, View } from "react-native";

import { Tool } from "../types/timer";

interface Props {
  tool: Tool
}

export const Knife: FC<Props> = ({tool}) => {
  const source = require('../assets/img/knife.png');
  return (
    <View
      style={{
        position: 'absolute',
        top: tool.top,
        left: tool.left,
      }}>
      <Image
          style={{ width: 50, height: 50, }}
          source={source}
      />
    </View>
  );
}
