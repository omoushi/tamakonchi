import {Health, Stage} from "./reducer";

export type MainState = {
  stage: Stage
  health: Health
}

export type MainStateEvent = {
  stage?: Stage
  health?: Health
}

export type MainEvents = {
  takeCare(): void
  notTakeCare(): void
}