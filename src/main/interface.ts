import { Stage } from "./reducer";
import { Action } from "redux"

export type MainState = {
  stage: Stage
}

export type MainStateEvent = {
  stage?: Stage
}

export type MainEvents = {
  breakUp(): Action
  neglect(): Action
}