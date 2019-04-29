import React, { FC } from "react";
import { Image } from "react-native";
import { Stage } from "../main/reducer";

interface Props {
  stage: Stage
}

const resource = {
  [Stage.EGG]: require('../assets/img/egg.png'),
  [Stage.LIVING]: require('../assets/img/dog-living.png'),
  [Stage.DIED]: require('../assets/img/dog-died.png'),
};

export const Pet: FC<Props> = ({stage}) => {
  const source = resource[stage];
  return (
    <Image
        style={{width: 100, height: 100}}
        source={source}
    />
  );
}