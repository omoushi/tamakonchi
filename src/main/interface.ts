import { Situation } from "./reducer";
import { Action } from "redux"

export type MainState = {
  situation: Situation
}

export type MainStateEvent = {
  situation?: Situation
}

export type MainEvents = {
  breakUp(): Action
  neglect(): Action
}