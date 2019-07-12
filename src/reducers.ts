import { combineReducers } from "redux";
import { main } from "./reducers/main";
import { MainState } from "./main/interface";
import { TimerState } from "./timer/interface";
import { timer } from "./reducers/timer";

export interface RootState {
  main: MainState;
  timer: TimerState;
}

export default combineReducers<RootState>({
  main,
  timer,
});
