import { Situation, Stage } from "./reducer";
import { Action } from "redux"

export type MainState = {
  stage: Stage
  situation: Situation
}

export type MainStateEvent = {
  stage?: Stage
  situation?: Situation
}

export type MainEvents = {
  takeCare(): Action
  notTakeCare(): Action
  breakUp(): Action
  neglect(): Action
}