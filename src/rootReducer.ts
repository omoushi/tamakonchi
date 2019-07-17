import { combineReducers } from "redux";

import { MainState } from "./types/main";
import { TimerState } from "./types/timer";
import { main } from "./reducers/main";
import { timer } from "./reducers/timer";

export interface RootState {
  main: MainState;
  timer: TimerState;
}

export default combineReducers<RootState>({
  main,
  timer,
});
