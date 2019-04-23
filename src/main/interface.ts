import {Health, Stage} from "./reducer";

export type Props = State & Events

export type State = {
  stage: Stage
  health: Health
}

export type StateEvent = {
  stage?: Stage
  health?: Health
}

export type Events = {
  takeCare(): void
  notTakeCare(): void
}