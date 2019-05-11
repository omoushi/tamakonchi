import { combineReducers } from "redux";
import {main} from "./main/reducer";
import { MainState } from "./main/interface";
import { TimerState } from "./timer/interface";
import { timer } from "./timer/reducer";

export interface RootState {
  main: MainState;
  timer: TimerState;
}

export default combineReducers<RootState>({
  main,
  timer,
});
