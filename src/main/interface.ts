import { Situation, Stage } from "../reducers/main";
import { Action } from "redux"

export type MainState = {
  stage: Stage,
  situation: Situation
}

export type MainStateEvent = {
  stage?: Stage
  situation?: Situation
}

export type MainEvents = {
  breakUp(): Action
  neglect(): Action
  loseJob(): Action
  makeWorry(): Action
}